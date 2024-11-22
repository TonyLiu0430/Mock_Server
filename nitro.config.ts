//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2024-11-16",
  devProxy: {
    "/api": {
      target: process.env.BACKEND_URL + '/api',
      changeOrigin: true
    },
    "": {
      target: process.env.FRONTEND_URL,
      changeOrigin: true
    }
  }
});