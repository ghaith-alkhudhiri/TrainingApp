const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // Import TerserPlugin

module.exports = function override(config, env) {
    // Remove ModuleScopePlugin
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    // Add custom extensions
    config.resolve.extensions.push(".web.tsx", ".web.ts", ".tsx", ".ts");

    // Update plugins
    config.plugins[0].hash = true;

    // Set up aliases
    config.resolve.alias = Object.assign(config.resolve.alias, {
        'react-native-maps': 'react-native-web-maps',
    });

    // Add font loader
    config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", 
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
    });

    // Update babel plugins
    var list = config.module.rules
        .find(a => Object.keys(a).indexOf("oneOf") > -1)
        .oneOf
        .filter(a => a.loader && a.loader.indexOf('babel-loader') > -1)
        .map(a => a.options)
        .filter(a => a);

    for (var i of list)
        i.plugins = [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-react-jsx',
            '@babel/plugin-transform-typescript',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-optional-chaining',
            ...(i.plugins ?? [])
        ];

    // Set output path
    config.output.path = path.resolve(__dirname, "hello");
    config.output.path = "Z:\\WebApp";

    // Update optimization to use TerserPlugin
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

    return config;
};