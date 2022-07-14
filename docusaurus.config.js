module.exports = {
  title: 'IMTGida',
  tagline: 'IMTLazarusen informazioa, erabilera, etab.',
  url: 'https://kirikinowiki-github-io.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rixzty', // Usually your GitHub org/user name.
  projectName: 'kirikinowiki.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IMTGida',
      logo: {
        alt: 'Kirikiño',
        src: 'img/kiriki.png',
        srcDark: 'img/logo2.png',
      },
      links: [
        {
          to: 'docs/hasiera',
          activeBasePath: 'docs',
          label: 'Euskera',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Rixzty/kirikinowiki.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/hasiera',
            },
            {
              label: 'Second Doc',
              to: 'docs/erabilera',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Rixzty/kirikinowiki.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
