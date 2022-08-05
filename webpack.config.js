'use strict';

let path = require('path');

module.exports = {
  mode: 'development',// development and production режим
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',// выходной конфигурированный файл
    path: __dirname + '/js' //отслеживает пути автоматически
  },
  watch: true,

  devtool: "source-map",// для того чтобы посмотреть исходники

  module: {}
};
