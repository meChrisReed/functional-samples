const path = require('path')
const webpack = require('webpack')
const BrowserConsoleBuildErrorPlugin = require('browser-console-build-error-webpack-plugin')

module.exports = {
	entry: './app/index.js',
	resolve: { // file types we can resolve
		extensions: ['', '.js', '.jsx', '.json']
	},
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		hot: true,
		inline: true,
		progress: true,
		host: 'localhost',
		port: 9050,
		stats: { colors: true }
	},
	debug: true,
	module: {
		loaders: [
			{
				test: /\.json$/,
				loaders: ['json-loader'],
			}, {
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [path.resolve('./node_modules')],
				query: {
					babelrc: false,
					presets: [
						require.resolve('babel-preset-react'),
						require.resolve('babel-preset-es2015')
					],
					plugins: [
						require.resolve('babel-plugin-transform-class-properties'),
						require.resolve('babel-plugin-transform-object-rest-spread')
					]
				}
			}, {
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel'],
				exclude: [path.resolve('./node_modules')]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new BrowserConsoleBuildErrorPlugin()
	]
}
