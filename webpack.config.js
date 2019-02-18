const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const OpenBrowerPlugin = require('open-browser-webpack-plugin');

const port = 8080;
const host = `http://localhost:${port}`;

module.exports = {
    entry:  __dirname + '/src/index.js',
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".jsx", ".json", ".css", ".scss"]
    },

    devtool: 'eval-source-map',
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true,
        compress: true,
        port: port
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2017'],
                    plugins: ["transform-object-rest-spread", "syntax-dynamic-import",['import', {libraryName: 'antd', "libraryDirectory": "es", style: "css"}]],
                }
            },
            exclude: /node_modules/
        },{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader?modules', {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [
                        require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })
                    ]
                }
            }, 'sass-loader']
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader?modules",
        },{
            test: /\.(?:png|jpg|gif)/,
            loader: 'url-loader?limit=8192&name=image/[hash].[ext]' ,
        },{
            test: /\.svg$/,
            loader: 'svg-url-loader'
        }]
    },

    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'antd': 'antd'
    // },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'node_modules/antd/dist/antd.min.js',
            to: 'lib/'
        }
        ]),

        new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'lib/antd.min.js',
            ],
            append: false
        }),

        new OpenBrowerPlugin({
            url: host
        }),

    ]

}