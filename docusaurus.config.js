module.exports = {
  title: 'IMTGida',
  tagline: 'IMTLazarus-aren erabilera',
  url: 'https://kirikinowiki-github-io.vercel.app/',
  baseUrl: '/',
  favicon: 'https://www.kirikino.eus/sites/default/files/favicon.png',
  organizationName: 'rixzty', // Usually your GitHub org/user name.
  projectName: 'kirikinowiki.github.io', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    sidebarCollapsible: false,
    announcementBar: {
      id: 'suport_es',
      content:
        'Webgune honek cookieak erabiltzen ditu erabiltzailearen esperientzia hobetzeko. <a href="https://www.kirikino.eus/eu/cookien-politika">Informazio gehio</a>',
      backgroundColor: '#11993F',
      textColor: '#FFFFFF',
      isCloseable: true,
    },
    defaultMode: 'light',
    algolia: {
      // The application ID provided by Algolia
      appId: 'Z4H9UOVJ6L',

      // Public API key: it is safe to commit it
      apiKey: '650ebae25310a02d5e918d61b4d72f33',

      indexName: 'kiriki_dev',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: {},

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    metadata: [{name: 'keywords', content: 'chromebook, ikastola, imt, imtlazarus, kirikiño, kirikino'}],
    navbar: {
      logo: {
        alt: 'Kirikiño',
        src: 'img/kirikilogo.png',
        srcDark: 'img/kirikino-ikastola-oina.png',
      },
      links: [
        {
          to: 'docs/hasiera',
          activeBasePath: 'docs',
          label: 'Euskera',
          position: 'left',
        },
        {
          to: 'docs/comienzo',
          activeBasePath: 'docs',
          label: 'Español',
          position: 'left',
        },
        {
          type: "localeDropdown",
          position: "right"
        },
      ],
    },
    i18n: {
      defaultLocale: 'eu',
      locales: ['eu', 'es'],
      localeConfigs: {
        eu: {
          label: 'Euskera',
        },
        es: {
          label: 'Español',
        },
      },
     },    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Páginas web',
          items: [
            {
              label: 'IMTLazarus',
              to: 'https://kirikino.imtlazarus.com/lazarus',
            },
            {
              label: 'Webgunea',
              to: 'https://kirikino.eus',
            },
          ],
        },
        {
          title: 'Redes sociales',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kirikino_ikastola/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/kirikinoikastola',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCsKuNuPlApDPNKpP_NFuTTA',
            },
          ],
        },
        {
          title: 'Otros',
          items: [
            {
              label: 'Bloga',
              to: 'https://www.kirikino.eus/kirikino_interaktiboa/',
            },
            {
              label: 'Alexia',
              href: 'https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=UgVruuxXs3Y%3d',
            },
            {
              label: 'Aviso legal',
              href: 'https://kirikino.wiki/img/aviso-legal.pdf',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <b>Bibbl, Inc</b>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebar: {
            hideable: true,
          },
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          hideable: true,
          autoCollapseCategories: true,
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
