'use strict';

const Clean = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const core = require('./webpack.core');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const CWD = process.cwd();
const PACKAGE = require(path.join(CWD, 'package.json'));
const APP_SRC_FILE = path.join(CWD, PACKAGE.config.appBuildEntry);
const BUILD = path.join(CWD, 'build/app');

module.exports = merge(core, {
  devtool: 'source-map', //note: not working in conjunction with UglifyJsPlugin, see UglifyJsPlugin configuration below
  entry: [APP_SRC_FILE],
  output: {
    path: BUILD,
    filename: 'app.js'
  },
  plugins: [
    new Clean([BUILD], {root: CWD}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true //needed because of http://stackoverflow.com/questions/41942811/webpack-2-devtool-not-working
    }),
    new HtmlPlugin({
      template: path.join(__dirname, '../src/appTemplate.ejs'),
      hash: true,
      xhtml: true
    })
  ]
});