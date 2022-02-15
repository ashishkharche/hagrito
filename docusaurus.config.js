const path = require("path");
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Anime Summit',
    tagline: 'Notes',
    url: 'https://animesummit.net',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/chan.ico',
    organizationName: 'androiddevnotes', // Usually your GitHub org/user name.
    projectName: 'animesummit', // Usually your repo name.
    // customFields: {
    //   trailingSlash: true
    // },
    themeConfig: {
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Anime Summit',
            logo: {
                alt: 'Anime Summit Logo',
                src: 'img/logo.svg',
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
            //         href: 'https://github.com/androiddevnotes/animesummit',
            //         label: 'GitHub',
            //         position: 'right',
            //     },
            // ],
            items: [
                {
                    activeBasePath: "/docs",
                    label: "Wiki",
                    position: 'right',
                    items: [
                        {
                            to: "wiki/",
                            activeBasePath: "docs",
                            label: "Intro",
                        },
                        {
                            to: "/wiki/category/ao",
                            activeBasePath: "/docs/ao",
                            label: "AO",
                        },
                        {
                            to: "/wiki/category/guested",
                            activeBasePath: "/docs/guested",
                            label: "Guested",
                        },
                        {
                            to: "/wiki/category/main",
                            activeBasePath: "/docs/main",
                            label: "Main",
                        },
                    ],
                },
                {to: '/any', label: 'Any', position: 'right'},
                {
                    to: "/blog",
                    activeBasePath: "/blog",
                    label: "Blog",
                    position: 'right',

                },
            ],

        },
        algolia: {
            // The application ID provided by Algolia
            appId: 'LP3LNUFLMH',

            // Public API key: it is safe to commit it
            apiKey: '39eca361cd08297e3d0dd1d3327b864b',

            indexName: 'indexname',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Algolia search parameters
            searchParameters: {},

            //... other Algolia params
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                // docs: {
                //     routeBasePath: "/",
                //     sidebarPath: require.resolve('./sidebars.js'),
                //     // Please change this to your repo.
                //     editUrl:
                //         'https://github.com/androiddevnotes/animesummit/edit/main/',
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
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/androiddevnotes/animesummit/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],

    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'any',
                path: 'any',
                routeBasePath: 'any',
                sidebarPath: require.resolve('./sidebarAny.js'),
            },
        ],
    ],

};
