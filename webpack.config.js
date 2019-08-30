const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: ['react', 'react-dom'],
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          query: {
            // Inline images smaller than 0.5kb as data URIs
            limit: 500,
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]-[hash:5]',
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './src/favicon.ico',
    }),
    new CopyWebpackPlugin([
      {from: './src/images/', to: 'images'},
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
