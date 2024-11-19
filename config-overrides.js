const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function override(config, env) {
    // Remove ModuleScopePlugin
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    // Add extensions
    config.resolve.extensions.push(".web.tsx", ".web.ts", ".tsx", ".ts");

    // Set aliases
    config.resolve.alias = {
        ...config.resolve.alias,
        'react-native-maps': 'react-native-web-maps',
    };

    // Add font loader
    config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
    });

    // Ensure output path is valid
    config.output.path = path.resolve(__dirname, 'dist');

    // Add HtmlWebpackPlugin if missing
    if (!config.plugins.some(plugin => plugin instanceof HtmlWebpackPlugin)) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                inject: true,
            })
        );
    }

    // Enable TerserPlugin
    config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    };

    // Add devServer
    config.devServer = {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    };

    return config;
};