// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-15",
  // 当您运行 nuxi dev 或 nuxi build 时，Nuxt 不会检查类型,要在构建或开发时启用类型检查
  typescript: {
    typeCheck: false,
  },
  devtools: { enabled: false },
  // https://github.com/element-plus/element-plus-nuxt/issues/95 解决问题
  vite: {
    optimizeDeps: {
      include: ["dayjs", "dayjs/plugin/*", "element-plus", "lodash-unified"],
    },
    server: {
      cors: true,
    },
  },
  devServer: {
    port: 11000,
  },

  // 所有页面都需要导入的样式
  css: [
    "~/assets/css/_global.scss",
  ],

  modules: [
    "@nuxt/devtools",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@element-plus/nuxt",
    "@nuxt/ui",
    "nuxt-svgo",
    "nuxt-swiper",
  ],

  svgo: {
    autoImportPath: "./assets/icons/",
  },

  icon: {
    localApiEndpoint: "/mall/_nuxt_icon/:collection",
    serverBundle: false,
    clientBundle: {
      scan: true,
    },
  },
  googleFonts: {
    families: {
      // 日本字体
      "Noto Sans JP": true,
      // 英国站字体
      "Open Sans": true,
      Roboto: true,
    },
    display: "swap",
    subsets: ["latin"],
  },
  sourcemap: process.env.NUXT_ENV !== "prod",
  i18n: {
    // 设置默认ja，默认策略的前提下,则会省略ja的路径,prefix策略下则重定向
    defaultLocale: "ja",
    strategy: "prefix_and_default",
    compilation: {
      // 允许有html https://github.com/intlify/bundle-tools/issues/259
      strictMessage: false,
    },
    baseUrl: "https://s.theckb.com/",
    detectBrowserLanguage: false,
    locales: [
      { code: "ja", name: "JP", language: "ja-JP", file: "ja.ts" },
      { code: "en", name: "US", ios: "en-US", file: "en.ts" },
    ],
    langDir: "locales",
    debug: false,
  },
  imports: {
    dirs: ["composables", "composables/*", "composables/**"],
    presets: [
      {
        from: "@/shared/mall",
        imports: ["IndexChannel"],
      },
      {
        from: "@/shared/client",
        imports: ["Language", "LanguageSet"],
      },
    ],
  },

  app: {
    buildAssetsDir: "/_mall/",
  },
  runtimeConfig: {
    public: {
      apiHost: process.env.NUXT_API_HOST,
      cdnUrl: process.env.NUXT_CDN_URL,
      env: process.env.NUXT_ENV,
      tag: process.env.NUXT_PROJECT_TAG,
      build_date: new Date().toLocaleString(),
      optionUrl:process.env.NUXT_PUBLIC_OPTION
    },
  },
  colorMode: {
    preference: "light",
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('micro-app'),
    },
    },
});