var webpack = require("webpack");
module.exports = {
    entry: [
        "./index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/assets/" //The public path to load your async content, such as xxx.svg
    },
    module: {
        loaders: [{
              //IMAGE LOADER
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader:'url'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
