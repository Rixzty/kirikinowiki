module.exports = {
  title: 'IMTGida',
  tagline: 'IMTLazarus-aren erabilera',
  url: 'https://kirikinowiki-github-io.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rixzty', // Usually your GitHub org/user name.
  projectName: 'kirikinowiki.github.io', // Usually your repo name.
  themeConfig: {
    metadata: [{name: 'keywords', content: 'chromebook, ikastola, imt, imtlazarus'}],
    navbar: {
      title: 'IMTGida',
      logo: {
        alt: 'Kirikiño',
        src: 'img/kirikilogo.png',
        srcDark: 'img/kirikinologo.png',
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
          title: 'Garrantzitsuak',
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
          title: 'Sare sozialak',
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
          title: 'Gehiago',
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
