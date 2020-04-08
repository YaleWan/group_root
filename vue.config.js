const path = require("path");
module.exports = {
  chainWebpack: config => {
    //热更新
    config.resolve.symlinks(true);
    // vue默认@指向src目录
    config.resolve.alias.set("@", path.resolve("src"));
  }
};
