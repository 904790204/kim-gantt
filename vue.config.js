
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  lintOnSave: false,
  // plugins: [
  //   new CopyPlugin([
  //       { from: 'static', to: 'dist/static' },
  //   ]),
  // ],
  chainWebpack: config => {
    // config.plugin = [
    //   ...config.plugin,
    //   new CopyPlugin([
    //     { from: 'static', to: 'dist/static' },
    //   ])
    // ]
		config.plugin('CopyPlugin').use(CopyPlugin, [
      [{ from: 'static', to: 'dist/static' }],
    ]);
	}
}
