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
        },{id: "nav-papers",
          title: "Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "post-continued-investments-in-price-performance-and-faster-top-k-queries",
        
          title: 'Continued Investments in Price Performance and Faster Top-K Queries <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Performance optimizations of `ORDER BY ... LIMIT k`, also known as Top-K queries in SQL, in the Snowflake Data Warehouse. Joint work with Juliane Waack. Part 2.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.snowflake.com/en/blog/continued-investments-in-price-performance-and-faster-top-k-queries/", "_blank");
          
        },
      },{id: "post-speeding-up-top-k-queries-in-snowflake",
        
          title: 'Speeding up Top-K Queries in Snowflake <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Performance optimizations of `ORDER BY ... LIMIT k`, also known as Top-K queries in SQL, in the Snowflake Data Warehouse. Joint work with Juliane Waack.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.snowflake.com/blog/super-fast-top-k-queries/", "_blank");
          
        },
      },{id: "post-my-journey-to-becoming-a-tikv-contributor",
        
          title: 'My Journey to Becoming a TiKV Contributor <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I had the pleasure the work on TiKV, a distributed key-value store in Rust that serves as a storage engine for TiDB, as an LFX Program Mentee in 2021. The goal was to implement a &quot;pluggable&quot; coprocessor, similar to HBase&#39;s coprocessor, where users can leverage the computational power of storage nodes and directory execute arbitrary computation on them.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.cncf.io/blog/2021/07/26/mentorship-spotlight-looking-back-at-the-lfx-mentorship-program-spring-21-my-journey-to-becoming-a-tikv-contributor/?hss_channel=tw-3286770860", "_blank");
          
        },
      },{id: "post-automatic-flamegraphs-for-benchmarks-in-rust",
        
          title: "Automatic Flamegraphs for Benchmarks in Rust",
        
        description: "Automatically generate performance flamegraphs for Rust benchmarks with Criterion using pprof and in-process profiling hooks.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/criterion-flamegraphs.html";
          
        },
      },{id: "post-header-only-self-registering-classes-for-factories-in-c",
        
          title: "Header-Only Self-Registering Classes for Factories in C++",
        
        description: "Sometimes, especially with the factory pattern, you want your derived classes to register automatically to a factory class. However, I found this harder than expected! Especially if you want it to be header only. Here is a quick walk-through of how this can be done.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/cpp-header-only-self-registering-types.html";
          
        },
      },{id: "post-add-rapidjson-with-cmake",
        
          title: "Add RapidJSON with CMake",
        
        description: "RapidJSON is a nice C++ library for parsing JSON files. If you use CMake, we can automatically download it as a dependency for your project.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/rapidjson-cmake.html";
          
        },
      },{id: "post-creating-portable-native-applications-with-net-mono",
        
          title: "Creating portable native applications with .Net Mono",
        
        description: "While .Net projects usually require a runtime environment, the Mono project allows us to compile a program to native code with all dependencies included. In this blog post, we will explore how to do this.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/portable-native-mono-applications.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/andizimmerer.bsky.social", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/https://github.com/andizimmerer", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/https://www.linkedin.com/in/andi-zimmerer/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
