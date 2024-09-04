// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  css: ["~/styles/main.scss"],
  ssr: true,
  runtimeConfig: {
    WP_APPLICATION_PASSWORD: process.env.WP_APPLICATION_PASSWORD,
    WP_USERNAME: process.env.WP_USERNAME,
  }, 
  devServer : {
    port : 4000,
  }
});