// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@formkit/auto-animate"],
  runtimeConfig: {
    public: {
      POCKETBASE_URL: process.env.POCKETBASE_URL,
    },
  },
});
