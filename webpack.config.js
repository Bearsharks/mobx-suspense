var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const srcDir = path.resolve(__dirname, './src');
const publicDir = path.resolve(__dirname, './public');

module.exports = {
    devServer: {
        hot: true
    },
    devtool: 'eval-cheap-module-source-map',
    mode: 'none',
    entry: srcDir + '/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
        extensions: ['.ts', '.tsx', '.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: publicDir + '/index.html',
            filename: './index.html'
        }),
        //new CleanWebpackPlugin(),
    ],
};