const path = require('path'); // know where we are in our system
const HtmlWebpackPlugin = require('html-webpack-plugin'); // instantiate webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // plugin css

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname: current dir, 'dist': name of the out folder
        filename: 'bundle.js', // name of the package that is created
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // use all the files containing .js and .jsx extensions
                exclude: /node_modules/, // don't use it
                use: {
                    loader: 'babel-loader', // use installed loader
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i, // sass files
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000, // define the port to use
    }
}