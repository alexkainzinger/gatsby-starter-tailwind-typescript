module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    {
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js") // Optional: Load custom Tailwind CSS configuration
        ]
      },
      resolve: `gatsby-plugin-sass`
    },
    "gatsby-plugin-image",
    // enable google-analytics plugin
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      options: {
        icon: "src/images/icon.png"
      },
      resolve: "gatsby-plugin-manifest"
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      __key: "images",
      options: {
        name: "images",
        path: "./src/images/"
      },
      resolve: "gatsby-source-filesystem"
    }
  ],
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-starter-tailwind-typescript"
  }
}
