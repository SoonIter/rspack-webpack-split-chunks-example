/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      minSize: 0,
      chunks: 'all',
      cacheGroups: {
        hello: {
          enforce: true,
          test: /hello/,
          name: 'hello',
          priority: 10,
          reuseExistingChunk: true,
          chunks: 'all',
        },
        index: {
          name: 'index',
          enforce: true,
          priority: -10,
          reuseExistingChunk: true,
          chunks: 'all',
        },
        default: false,
        defaultVendors: false,
      },
    },
  },
  output: {
    asyncChunks: false,
  },
};
