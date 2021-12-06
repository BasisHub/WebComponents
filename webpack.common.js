const path = require('path');
const webpack = require('webpack');

 module.exports = {
    // entry: './dist/web-component/web-component.esm.js',
    entry: './www/build/web-component.esm.js',

    output: {
      filename: 'hudai.js',
      path: path.resolve(__dirname, 'mybuild'),
      clean: true,
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
 };