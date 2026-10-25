# Short links redirecting to the material of papers and talks

# Libraries
require 'bibtex'
require 'cgi'
require 'json'

module Jekyll

  class ShortLink < PageWithoutAFile

    def initialize(site, category, name, target)
      # Call the parent constructor
      super(site, site.source, File.join('link', category), "#{name}.html")
      # Build the redirection page
      href = CGI.escapeHTML(target)
      data.merge!('layout' => nil, 'sitemap' => false)
      self.content = <<~HTML
        <!DOCTYPE html>
        <html lang="en">
          <meta charset="utf-8">
          <title>Redirecting&hellip;</title>
          <link rel="canonical" href="#{href}">
          <meta http-equiv="refresh" content="0; url=#{href}">
          <meta name="robots" content="noindex">
          <script>location.replace(#{target.to_json})</script>
          <a href="#{href}">Click here if you are not redirected.</a>
        </html>
      HTML
    end

  end


  class ShortLinkGenerator < Generator

    # Link category of each material field
    CATEGORIES = { 'pdf' => 'papers', 'code' => 'code', 'slides' => 'slides', 'poster' => 'posters', 'video' => 'videos' }

    def generate(site)
      # Get the papers from the bibliography
      scholar = site.config['scholar']
      bibliography = BibTeX.open(File.join(site.source, scholar['source'], scholar['bibliography']))
      items = bibliography.entries.values.map do |entry|
        [(entry[:slug] || entry.key).to_s, entry.fields.to_h { |field, value| [field.to_s, value.to_s] }]
      end

      # Get the talks
      items += site.collections['talks'].docs.map { |doc| [doc.data['slug'], doc.data] }

      # Build a short link for each material
      items.each do |name, fields|
        CATEGORIES.each do |field, category|
          target = fields[field]
          next if target.nil?
          target = File.join(site.baseurl.to_s, '/assets/pdf', target) unless target.include?('://')
          site.pages << ShortLink.new(site, category, name, target)
        end
      end
    end

  end

end
