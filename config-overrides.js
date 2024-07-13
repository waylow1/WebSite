const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
     addWebpackAlias({
          "@css": path.resolve(__dirname, "src/resources/css"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@js": path.resolve(__dirname, "src/resources/js"),
          "@components": path.resolve(__dirname, "src/resources/js/Components"),
          "@layouts": path.resolve(__dirname, "src/resources/js/Layouts"),
          "@pages": path.resolve(__dirname, "src/resources/js/Pages"),
     })
);
