// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "about me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-will-present-a-poster-at-the-3rd-edition-of-bayes-comp-in-levi-finland-bayescomp-promotes-research-in-bayesian-computation-methods-encourages-the-use-of-advanced-tools-among-practitioners-supports-software-development-and-facilitates-interdisciplinary-knowledge-exchange-among-statisticians",
          title: 'I will present a poster at the 3rd edition of Bayes Comp in...',
          description: "",
          section: "News",},{id: "news-my-first-paper-on-sampling-with-approximate-transport-maps-has-been-accepted-to-the-40th-international-conference-on-machine-learning-icml-at-honolulu-hawaii-usa",
          title: 'My first paper On Sampling with Approximate Transport Maps has been accepted to...',
          description: "",
          section: "News",},{id: "news-i-will-present-a-poster-at-the-4th-edition-of-youth-in-high-dimensions-in-trieste-italy-this-conference-provides-a-platform-for-young-researchers-in-academia-and-industry-to-share-recent-findings-in-high-dimensional-statistical-problems-including-areas-like-machine-learning-neuroscience-and-statistical-physics-with-the-goal-of-strengthening-interdisciplinary-connections-and-showcasing-the-latest-developments-in-the-field",
          title: 'I will present a poster at the 4th edition of Youth in High-Dimensions...',
          description: "",
          section: "News",},{id: "news-my-second-paper-balanced-training-of-energy-based-models-with-adaptive-flow-sampling-has-been-accepted-to-1st-edition-of-the-structured-probabilistic-inference-amp-amp-generative-modeling-spigm-workshop-at-icml-2023",
          title: 'My second paper Balanced Training of Energy-Based Models with Adaptive Flow Sampling has...',
          description: "",
          section: "News",},{id: "news-i-will-be-at-orsay-for-the-probabilistic-sampling-for-physics-finding-needles-in-a-field-of-high-dimensional-haystacks-workshop-organized-by-institut-pascal-from-the-4th-september-to-the-22nd-september-moreover-i-will-be-at-marne-la-vallée-for-the-sampling-high-dimensional-probability-measures-applications-in-non-equilibrium-molecular-dynamics-and-statistics-at-the-cermics-lab-where-i-will-be-presenting-2-posters",
          title: 'I will be at Orsay for the Probabilistic sampling for physics: finding needles...',
          description: "",
          section: "News",},{id: "news-i-will-give-a-talk-at-the-11th-world-congress-in-probability-and-statistics-bochum-germany-in-august-about-sampling-with-approximate-transport-maps-within-the-new-trends-in-approximate-sampling-session-chaired-by-daniel-rudolf-university-of-passau-germany-and-björn-sprungk-university-of-freiberg-germany",
          title: 'I will give a talk at the 11th World Congress in Probability and...',
          description: "",
          section: "News",},{id: "news-my-latest-paper-stochastic-localization-via-iterative-posterior-sampling-co-authored-with-maxence-noble-marylou-gabrié-and-alain-durmus-has-been-accepted-at-icml-2024",
          title: 'My latest paper Stochastic Localization via Iterative Posterior Sampling co-authored with Maxence Noble,...',
          description: "",
          section: "News",},{id: "news-i-will-be-at-the-isba-2024-world-meeting-venice-italy-in-july-2024-i-will-give-a-talk-entitled-transporting-measures-for-sampling-parametric-and-non-parametric-approaches-inspired-by-generative-modeling-in-the-invited-session-monte-carlo-algorithms-using-modern-hardware-chaired-by-charles-margossian-flatiron-institute-new-york-usa",
          title: 'I will be at the ISBA 2024 World Meeting (Venice, Italy) in July...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
