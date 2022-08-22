const path = require("path");
const entryFile = path.resolve(__dirname, "client", "src", "index.js");
const outputDir = path.resolve(__dirname, "client", "public");

const webpack = require("webpack");

module.exports = {
    entry: ["babel-polyfill", entryFile],
    output: {
        path: outputDir,
        publicPath: "/",
        filename: "bundle.js",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        historyApiFallback: true,
        static: "./client/public",
        hot: true,
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
};
