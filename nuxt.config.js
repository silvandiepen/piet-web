module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "piet",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Piet, another framework"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  modules: ["nuxt-rfg-icon", "@nuxtjs/manifest", "@nuxtjs/pwa"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  plugins: [
    {
      src: "~plugins/highlight",
      ssr: false
    },
    {
      src: "~plugins/markdown",
      ssr: false
    },
    {
      src: "~plugins/svgicon",
      ssr: true
    },
    {
      src: "~plugins/piet-grid"
    },
    {
      src: "~plugins/ga",
      ssr: true
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        "postcss-cssnext": {
          browsers: ["last 2 versions", "ie >= 9"],
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  css: [
    {
      src: "~assets/scss/app.scss",
      lang: "scss"
    }
  ]
};
