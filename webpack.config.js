const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const Dotenv = require('dotenv-webpack')

// const babelCore = require("babel-core/register");
// const babelPolyfill = require("babel-polyfill");

// const modeEnv = process.env.ENV === 'production' ? 'production' : 'development'

// 程式碼切分
// https://ithelp.ithome.com.tw/articles/10274467?sc=rss.iron
// webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env) => {
    return {
        mode: 'production', //mode: 'production' npm run build之後js空格會被壓縮掉
        // devtool: 'source-map',
        // devtool: 'source-map',
        entry: ['./src/index.js'],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
            //加hash是為了快取問題，版本更新使用者會抓到最新的檔案

            // 不要加 publicPath，配合 nginx 設定 root 根目錄路徑即為專案資料夾，靜態檔案都放在專案資料夾，在 index.html 引入 js、css 的路徑為「/main.js」、不要「/homepage/main.js」。
            // publicPath: '/homepage/',

            // 此專案非為 nginx root 根目錄才需要多加，在前端專案 index.js 中也要加 basename
            // publicPath: '/basename/',

            // "/signSystem/" :同網域 , "/":localhost
            //允許您為應用程序中的所有資產指定基本路徑。
        },
        // devServer: {
        //     contentBase: path.join(__dirname, 'signSystem'),
        //     historyApiFallback: true,
        //     //將 404s 重定向到/index.html.
        //     compress: true,
        //     port: 9000,
        // },
        //loader是幫助瀏覽器閱讀非js的檔案
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.js|.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-transform-react-jsx',
                                '@babel/plugin-transform-react-jsx-compat',
                            ],
                        },
                    },
                },
                {
                    test: /\.(jpg|jpe?g|png|gif|svg|pdf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.json$/,
                    use: ['json-loader'],
                    type: 'javascript/auto',
                },
                {
                    test: /\.(xls|xlsx)$/,
                    use: 'file-loader',
                },
            ],
        },
        //plugins插件
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'), //html模板
                filename: 'index.html',
                favicon: './public/logo.png',
            }),
            new MiniCssExtractPlugin({
                filename: 'main.css',
            }), //讓dist新增獨立的css檔

            // "@babel/plugin-transform-react-jsx",
            // {
            //     "throwIfNamespace": false, // defaults to true
            //     "runtime": "automatic", // defaults to classic
            //     "importSource": "custom-jsx-library" // defaults to react
            // }
            new webpack.ProvidePlugin({
                React: 'react',
                'react-dom': 'ReactDOM',
                'react-router-dom': 'ReactRouterDOM',
            }),

            new Dotenv({
                path:
                    process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
                },
            }),
            // TODO: 研究加入以下 plugin，另外注意有沒有 source map
            // https://ithelp.ithome.com.tw/articles/10268059
            // new webpack.optimize.UglifyJsPlugin({
            //     compressor: {
            //         warnings: false,
            //     },
            // }),
            // new webpack.optimize.OccurenceOrderPlugin(),
            new BundleAnalyzerPlugin(), // Bundle 分析視圖
        ],
        // resolve: {
        //   fallback: { "path": false }
        // }
        resolve: {
            fallback: { path: require.resolve('path-browserify') },
            extensions: ['.jsx', '.js', '.tsx', '.ts'],
        },
        // 程式碼切分，抽離第三方套件
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                    },
                    // 拆分出共用的 chunk
                    default: {
                        name: 'default',
                        minChunks: 2,
                        reuseExistingChunk: true,
                        enforce: true,
                        priority: -20,
                    },
                },
            },
        },
    }
}
