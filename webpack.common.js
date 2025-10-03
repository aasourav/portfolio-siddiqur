const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'), // now Webpack outputs to public/
    clean: true,
    filename: 'js/[name].js',
  },
};
