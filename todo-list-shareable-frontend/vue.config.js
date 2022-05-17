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
    proxy: 'http://localhost:5000'
  }
});
