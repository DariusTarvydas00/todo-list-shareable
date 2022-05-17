const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }
      ]
    },
  },
  devServer: {
    proxy: "http://161.97.99.214:8081"
  }
});
