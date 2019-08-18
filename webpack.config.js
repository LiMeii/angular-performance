const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = (config, options) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'APP_VERSION': JSON.stringify(pkg.version),
    }),
    //new BundleAnalyzerPlugin(),
    new CopyPlugin([
      { from: path.join(__dirname, "moackdata"), to: path.join(__dirname, "dist/angular-performance/moackdata") }
    ])
  );

  return config;
};