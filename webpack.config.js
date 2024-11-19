const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/App.tsx', // Entry point for your web app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {}, // Define any custom aliases if needed
    extensions: ['.web.js', '.js', '.json', '.ts', '.tsx'], // Extensions for module resolution
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Transpile JS and TS files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react', // JSX preset
              'module:metro-react-native-babel-preset', // React Native preset
            ],
            plugins: [
              '@babel/plugin-syntax-jsx', // Enable JSX syntax
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/, // Handle assets
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/', // Output assets to 'assets' folder
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV === 'development'), // Define global __DEV__
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve files from 'public' directory
    },
    compress: true,
    port: 3000, // Web server runs on port 3000
  },
};