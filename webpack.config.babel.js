import webpack from 'webpack';
import path from 'path';

export default {
  entry: {
    common: './src/common'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist',
    libraryTarget: 'umd',
    library: 'common'
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
