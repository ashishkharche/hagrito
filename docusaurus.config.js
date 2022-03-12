const path = require("path");
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hagrito",
  tagline: "Notes",
  url: "https://hagrito.net",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",
  organizationName: "ashishkharche", // Usually your GitHub org/user name.
  projectName: "hagrito", // Usually your repo name.
  // customFields: {
  //   trailingSlash: true
  // },
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    hideableSidebar: true,
    navbar: {
      title: "Hagrito",
      logo: {
        alt: "Hagrito Logo",
        src: "img/hagrito.png",
      },

      // items: [
      //     // {
      //     //   type: 'doc',
      //     //   docId: 'intro',
      //     //   position: 'left',
      //     //   label: 'Wiki',
      //     // },
      //     {
      //         to: "docs/",
      //         activeBasePath: "docs",
      //         label: "Docs",
      //         position: "left",
      //     },
      //     {to: '/blog', label: 'Blog', position: 'left'},
      //     {
      //         href: 'https://github.com/ashishkharche/hagrito',
      //         label: 'GitHub',
      //         position: 'right',
      //     },
      // ],
      items: [
        {
          activeBasePath: "/docs",
          label: "Wiki",
          position: "right",
          items: [
            {
              to: "wiki/",
              activeBasePath: "docs",
              label: "Intro",
            },
            {
              to: "/wiki/category/languages",
              activeBasePath: "/docs/languages",
              label: "Languages",
            },
            {
              to: "/wiki/category/media",
              activeBasePath: "/docs/media",
              label: "Media",
            },
            {
              to: "/wiki/category/networking",
              activeBasePath: "/docs/networking",
              label: "Networking",
            },
            {
              to: "/wiki/category/cloud",
              activeBasePath: "/docs/cloud",
              label: "Cloud",
            },
            {
              to: "/wiki/category/command-line",
              activeBasePath: "/docs/command-line",
              label: "Command-line",
            },
            {
              to: "/wiki/category/software-development",
              activeBasePath: "/docs/software-development",
              label: "Software Development",
            },
            {
              to: "/wiki/category/data-science",
              activeBasePath: "/docs/data-science",
              label: "Data Science",
            },
            {
              to: "/wiki/category/operating-system",
              activeBasePath: "/docs/operating-system",
              label: "Operating System",
            },
            {
              to: "/wiki/category/general",
              activeBasePath: "/docs/general",
              label: "General",
            },
          ],
        },
        { to: "/wip", label: "WIP", position: "right" },
        {
          to: "/blog",
          activeBasePath: "/blog",
          label: "Blog",
          position: "right",
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "SO040MI8P2",

      // Public API key: it is safe to commit it
      apiKey: "0277fa6dd6cd976e53529cdd85f6fe1a",

      indexName: "hagritoalgoliaindex",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //     routeBasePath: "/",
        //     sidebarPath: require.resolve('./sidebars.js'),
        //     // Please change this to your repo.
        //     editUrl:
        //         'https://github.com/ashishkharche/hagrito/edit/main/',
        // },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "wiki",
          exclude: ["**/shared/**"], // do not render "shared" content
          editUrl: "https://github.com/asupio/documentation/blob/master",
          /**
           * Whether to display the author who last updated the doc.
           */
          showLastUpdateAuthor: false,
          /**
           * Whether to display the last date the doc was updated.
           */
          showLastUpdateTime: false,
          /**
           * Skip the next release docs when versioning is enabled.
           * This will not generate HTML files in the production build for documents
           * in `/docs/next` directory, only versioned docs.
           */
          includeCurrentVersion: true, // excludeNextVersionDocs is now deprecated
          // excludeNextVersionDocs: false,
          // // below remark plugin disabled until we can figure out why it is not transpiling to ESNext properly - swyx
          // // original PR https://github.com/asupio/documentation/pull/496/files
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/ashishkharche/hagrito/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve("./plugins/sitemap-to-json"),
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wip",
        path: "wip",
        routeBasePath: "wip",
        sidebarPath: require.resolve("./sidebarWip.js"),
      },
    ],
  ],
};
