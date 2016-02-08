'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ComponentResolverPlugin = require('component-resolver-webpack');

const common = require('./webpack.common.config');

const config = common.readConfig();
const meta = common.readMetadata();

module.exports = {
  entry: path.join(__dirname, 'src', 'fallback-cache'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
      { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
    ]
  },
  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config),
      META: JSON.stringify(meta)
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.ResolverPlugin([
      new ComponentResolverPlugin()
    ])
  ]
};
