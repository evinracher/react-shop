const path = require('path'); // know where we are in our system
const HtmlWebpackPlugin = require('html-webpack-plugin'); // instantiate webpack

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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}