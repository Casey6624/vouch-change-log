module.exports = {
  siteMetadata: {
    title: "vouch-change-log",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
        ignore: ["**/.*", "**/.*.tsx"],
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `vouch-change-log`,
        remote: `https://github.com/Casey6624/vouch-change-log.git`,
        branch: `master`,
        // Only import the docs folder from a codebase.
        patterns: `docs/**`,
      },
    },
  ],
};
