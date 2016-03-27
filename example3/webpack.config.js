var webpack = require("webpack");
module.exports = {
    entry: [
        "./index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/" //The public path to load your async content, such as xxx.svg
    },
    module: {
        loaders: [{
              //IMAGE LOADER
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader:'url?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
