// @ts-check

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenLeukemia Docs",
  tagline: "Patient-centered documentation for OpenLeukemia",
  favicon: "img/favicon-32.png",

  url: "https://aledon8.github.io",
  baseUrl: "/docs/",

  organizationName: "Aledon8",
  projectName: "OpenLeukemia",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Aledon8/OpenLeukemia/tree/main/docs-site/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "OpenLeukemia",
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://openleukemia.com",
            label: "App",
            position: "left",
          },
          {
            href: "https://github.com/Aledon8/OpenLeukemia",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Project",
            items: [
              {
                label: "Overview",
                to: "/",
              },
              {
                label: "Architecture",
                to: "/architecture",
              },
              {
                label: "Consent model",
                to: "/consent-and-privacy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Aledon8/OpenLeukemia",
              },
              {
                label: "Discussions",
                href: "https://github.com/Aledon8/OpenLeukemia/discussions",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/OpenLeukemia/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/openleukemia/",
              },
            ],
          },
        ],
        copyright: `Copyright (c) ${new Date().getFullYear()} OpenLeukemia contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
