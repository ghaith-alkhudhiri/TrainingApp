// const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

// module.exports = function override(config, env) {
//     // Remove ModuleScopePlugin
//     config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

//     // Add extensions
//     config.resolve.extensions.push(".web.tsx", ".web.ts", ".tsx", ".ts");

//     // Set aliases
//     config.resolve.alias = {
//         ...config.resolve.alias,
//         'react-native-maps': 'react-native-web-maps',
//     };

//     // Add font loader
//     config.module.rules.push({
//         test: /\.ttf$/,
//         loader: "url-loader",
//         include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
//     });

//     // Ensure output path is valid
//     config.output.path = path.resolve(__dirname, 'dist');

//     // Add HtmlWebpackPlugin if missing
//     if (!config.plugins.some(plugin => plugin instanceof HtmlWebpackPlugin)) {
//         config.plugins.push(
//             new HtmlWebpackPlugin({
//                 template: path.resolve(__dirname, 'public/index.html'),
//                 inject: true,
//             })
//         );
//     }

//     // Enable TerserPlugin
//     config.optimization = {
//         ...config.optimization,
//         minimize: true,
//         minimizer: [
//             new TerserPlugin({
//                 terserOptions: {
//                     compress: {
//                         drop_console: true,
//                     },
//                 },
//             }),
//         ],
//     };

//     // Add devServer
//     config.devServer = {
//         static: {
//             directory: path.join(__dirname, 'public'),
//         },
//         compress: true,
//         port: 3000,
//         historyApiFallback: true,
//     };

//     return config;
// };
const webpack = require('webpack');
const { override, babelInclude, addBabelPreset } = require('customize-cra');
const path = require('path');

module.exports = override(
  babelInclude([
    path.resolve('src'), // Include your source code
    path.resolve('node_modules/@react-native/assets-registry'), // Include the problematic package
    path.resolve('node_modules/react-native-vector-icons'),
  ]),

  addBabelPreset('@babel/preset-react'),
  (config) => {
    // Define the __DEV__ global variable
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'), // Set __DEV__ based on environment
      })
    );

    // Resolve aliases for React Native modules
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native-gesture-handler': 'react-native-gesture-handler/gesture-handler.web.js', // Use web-specific handler
      'react-native-maps': 'react-native-web-maps', // Replace with web-compatible maps
      'react-native': 'react-native-web', // Replace core RN with RN Web
    };

    // Add support for font loading
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    });

    // Return updated configuration
    return config;
  }
);