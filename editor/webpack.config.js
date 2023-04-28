const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const getConfig = () => ({
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'editor.js',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx', '.json'],
      }),
    ],
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/fonts',
          to: 'fonts',
        },
        {
          from: 'public/static',
          to: 'static',
        },
        {
          from: 'latest.worker.js',
          to: 'workers',
          context: '../../node_modules/@gql-grammar/worker/dist/',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            }
          }
        ],
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
});

module.exports = (() => {
  const config = getConfig();

  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }

  return config;
})();


