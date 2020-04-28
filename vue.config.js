module.exports = {
  publicPath: process.env.NODE_ENV === "production"
    ? "/takeoff/"
    : "/",
  outputDir: "docs",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/settings.sass"`
      }
    }
  }
}