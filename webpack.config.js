const path = require('path');
const {merge} = require('webpack-merge');
const {
  loadTypescript,
  devServer,
  loadHtml,
  eslint,
} = require('./webpack.parts');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const commonConfig = ({mode}) =>
  merge([
    {
      mode,
      entry: path.join(__dirname, 'src', 'index.tsx'),
      resolve: {extensions},
      context: __dirname,
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    },
    loadTypescript(),
    loadHtml(),
  ]);

const developmentConfig = () => merge([devServer(), eslint(extensions)]);

const productionConfig = () => ({});

module.exports = (env, arg) => {
  switch (arg.mode) {
    case 'production':
      return merge([commonConfig(arg), productionConfig()]);
    case 'development':
      return merge([commonConfig(arg), developmentConfig()]);
    default:
      return new Error('Unknown mode:', arg.mode);
  }
};
