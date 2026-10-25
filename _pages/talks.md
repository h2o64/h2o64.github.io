---
layout: page
permalink: /talks/
title: talks
nav: true
nav_order: 3
scholar:
  group_by: none
  bibliography_list_tag: ul
  bibliography_class: papers
  bibliography_template: '<i class="fa-regular fa-file-lines"></i> <a href="{{ entry.url | default: entry.pdf }}">{{ entry.title }}</a>'
_styles: >
  .publications ul.papers { list-style: none; padding-left: 0; margin-bottom: 0; }
  .publications ul.papers li { margin-bottom: 0; }
---

<!-- _pages/talks.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">
  {% assign talks = site.talks | sort: 'date' | reverse %}
  {% assign talks_by_year = talks | group_by_exp: 'talk', "talk.date | date: '%Y'" %}
  {% for year in talks_by_year %}
    <h2 class="bibliography">{{ year.name }}</h2>
    <ol class="bibliography">
      {% for talk in year.items %}
        <li>
          <div class="row">
            <div class="col col-sm-2 abbr">
              <abbr class="badge rounded w-100">{{ talk.abbr }}</abbr>
            </div>
            <div class="col-sm-8">
              <div class="title">{{ talk.title }}</div>
              <div class="author">
                {% if talk.event_url %}
                  <a href="{{ talk.event_url }}">{{ talk.event }}</a>
                {% else %}
                  {{ talk.event }}
                {% endif %}
              </div>
              <div class="periodical">
                <i class="fa-regular fa-calendar"></i> {{ talk.date | date: '%B %-d, %Y' }}
                <i class="fa-solid fa-location-dot ml-1"></i> {{ talk.location }}
              </div>
              {% capture query %}@*[key={{ talk.papers | join: '||key=' }}]{% endcapture %}
              {% bibliography --query {{ query }} %}
              <div class="links">
                {% if talk.slides %}
                  <a href="{{ talk.slides }}" class="btn btn-sm z-depth-0" role="button">Slides</a>
                {% endif %}
                {% if talk.video %}
                  <a href="{{ talk.video }}" class="btn btn-sm z-depth-0" role="button">Video</a>
                {% endif %}
              </div>
            </div>
          </div>
        </li>
      {% endfor %}
    </ol>
  {% endfor %}
</div>
