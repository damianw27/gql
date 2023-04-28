const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const getConfig = (inputFilePath, outputFilePath) => ({
  mode: 'production',
  entry: path.resolve(__dirname, 'src', inputFilePath),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFilePath,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [
      new TSConfigPathsPlugin(),
    ],
    fallback: {
      util: require.resolve("util/"),
      assert: require.resolve("assert/")
    }
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            }
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
  },
});

module.exports = [
  getConfig('index.ts', 'index.js'),
  getConfig('versions/latest/index.ts', 'latest/index.js'),
];
