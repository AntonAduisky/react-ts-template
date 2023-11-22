const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const modes = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
};

module.exports = (env, { mode }) => {
    const isProduction = mode === modes.PRODUCTION;

    const plugins = [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
        }),
    ];

    if (isProduction) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                chunkFilename: '[id].[contenthash].css',
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 8 }],
                            [
                                'svgo',
                                {
                                    plugins: [
                                        {
                                            name: 'preset-default',
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
            new TerserPlugin()
        );
    }

    return {
        mode,
        entry: path.join(__dirname, 'src', 'index.tsx'),
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                    },
                },
                {
                    test: /\.css$/i,
                    use: isProduction ? [MiniCssExtractPlugin.loader, 'css-loader'] : ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jp(e*)g|gif|webp|avif)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        plugins,
        performance: {
            maxEntrypointSize: Infinity,
            maxAssetSize: 1024 ** 2,
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
            open: true,
            hot: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: true,
                },
                progress: true,
            },
        },
    };
};
