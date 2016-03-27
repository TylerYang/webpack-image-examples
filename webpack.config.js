var webpack = require("webpack");
module.exports = {
    entry: [
        "./index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [{
              //IMAGE LOADER
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader:'file'
            },
            {
              // HTML LOADER
              test: /\.html$/,
              loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
