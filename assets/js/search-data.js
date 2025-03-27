// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-validation-of-a-digital-framework-for-circular-economy-retrofits-a-multi-case-analysis",
      
        title: "Validation of a Digital Framework for Circular Economy Retrofits: A Multi‐Case Analysis",
      
      description: "Empirical validation of a CE retrofit framework via eight real-world case studies using BIM, IoT, AI, and Digital Twins.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/CE-Validation/";
        
      },
    },{id: "post-a-comprehensive-digital-integration-framework-for-circular-economy-in-existing-building-retrofits",
      
        title: "A Comprehensive Digital Integration Framework for Circular Economy in Existing Building Retrofits",
      
      description: "Exploring a four-phase, technology-enabled retrofit methodology to embed Circular Economy principles into aging buildings.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/CE-Framework/";
        
      },
    },{id: "post-barriers-strategies-and-policy-pathways-for-digital-circular-economy-in-building-retrofits",
      
        title: "Barriers, Strategies, and Policy Pathways for Digital Circular Economy in Building Retrofits",
      
      description: "Financial, regulatory, technical, and cultural challenges to adopting CE-based retrofits, and a roadmap for digital-driven solutions.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/CE-Barriers/";
        
      },
    },{
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
