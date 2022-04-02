const path = require('path'); // know where we are in our system
const HtmlWebpackPlugin = require('html-webpack-plugin'); // instantiate webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // plugin css

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // __dirname: current dir, 'build': name of the out folder
        filename: 'bundle.js', // name of the package that is created
        publicPath: '/react-shop/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
        }
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
                test: /\.(css|scss)$/, // css and sass files
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/, // images extensions
                type: 'asset/resource',
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
        port: 3000, // define the port to use,
        historyApiFallback: true
    }
}