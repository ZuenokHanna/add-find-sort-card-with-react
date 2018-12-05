var path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "output"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.join(__dirname, "node_modules"),
				loader: "babel-loader",
				options: {
		          presets: ["react","es2015"]
		        },
			},
		]
	},
	mode: "development",
}