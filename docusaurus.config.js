/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hagrito',
  tagline: 'Notes',
  url: 'https://hagrito.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ashishkharche', // Usually your GitHub org/user name.
  projectName: 'hagrito', // Usually your repo name.
  // customFields: {
  //   trailingSlash: true
  // },
  themeConfig: {
    navbar: {
      title: 'Hagrito',
      logo: {
        alt: 'Hagrito Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ashishkharche/hagrito',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ashishkharche/hagrito/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ashishkharche/hagrito/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
