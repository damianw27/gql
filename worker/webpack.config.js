const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const getConfig = (entryFile, outputFile) => ({
  context: __dirname,
  mode: 'production',
  entry: entryFile,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    globalObject: 'this',
    library: {
      name: 'gql-grammar-worker',
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
              configFile: 'tsconfig.json'
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
  getConfig('./src/latest/worker.ts', 'latest.worker.js'),
  getConfig('./src/pg-schema/worker.ts', 'pg-schema.worker.js'),
  getConfig('./src/index.ts', 'index.js'),
];
