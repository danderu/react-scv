'use strict';

const merge = require('webpack-merge');

module.exports = function (config, cursors, options) {

  const inline = options.inline; //if false force the assets to be inlined in a Data Url

  return merge(config, {
    module: {
      rules: [
        cursors.push('woff-rule', {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: inline ? undefined : 10000,
            mimetype: 'application/font-woff'
          }
        }),
        cursors.push('ttf-rule', {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: inline ? undefined : 10000,
            mimetype: 'application/octet-stream'
          }
        }),
        cursors.push('svg-rule', {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: inline ? undefined : 10000,
            mimetype: 'image/svg+xml'
          }
        }),
        cursors.push('png-rule', {
          test: /\.(png)$/,
          loader: 'url-loader',
          options: {
            limit: inline ? undefined : 8192
          }
        }),
        cursors.push('jpg-rule', {
          test: /\.(jpe?g)$/,
          loader: 'url-loader',
          options: {
            limit: inline ? undefined : 8192
          }
        }),
        cursors.push('gif-rule', {
          test: /\.(gif)$/,
          loader: 'url-loader',
          options: {
            limit: inline ? undefined : 8192
          }
        }),
        cursors.push('ico-rule', {
          test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader'
        }),
        cursors.push('html-rule', {
          test: /\.html$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }),
        cursors.push('eot-rule', {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader'
        })
      ]
    }
  });

}
