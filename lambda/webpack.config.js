const nodeExternals = require('webpack-node-externals');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/handler',
  target: 'node',
  output: {
    libraryTarget: "commonjs2",
    filename: 'handler.js',
    path: path.join(__dirname, '/dist'),
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: '#source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      'node_modules',
      'src',
    ],
    // root: path.resolve('./')
  },

  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        // loader: 'raw-loader'
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          ts: {
            compiler: 'typescript',
            configFileName: 'tsconfig.json'
          },
          tslint: {
            emitErrors: true,
            failOnHint: true
          }
        }
      }
    ]
  },

  plugins: [
    new CheckerPlugin(),
    // new webpack.SourceMapDevToolPlugin({
    //   test: /\.js$/,
    //   moduleFilenameTemplate: '[absolute-resource-path]',
    //   fallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
    //   filename: '[file].map',
    //   sourceRoot: '/'
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     test: /\.ts$/,
    //     ts: {
    //       compiler: 'typescript',
    //       configFileName: 'tsconfig.json'
    //     },
    //     tslint: {
    //       emitErrors: true,
    //       failOnHint: true
    //     }
    //   }
    // })
  ],
  externals: [nodeExternals()]

};
