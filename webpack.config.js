module.exports = {
  mode: 'development',
  entry: {
    translator: './src/Translator.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};