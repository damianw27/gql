const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const getConfig = (inputFilePath, outputFilePath) => ({
  context: __dirname,
  // mode: 'production',
  entry: path.resolve(__dirname, 'src', inputFilePath),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFilePath,
    globalObject: 'this',
    library: {
      name: 'gql-grammar-core',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
    symlinks: false,
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
  getConfig('versions/latest/index.ts', 'versions/latest/index.js'),
  getConfig('versions/pg-schema/index.ts', 'versions/pg-schema/index.js'),
];
