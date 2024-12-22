module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-flow', '@babel/preset-react'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    '@babel/plugin-syntax-flow',
    '@babel/plugin-syntax-jsx',
    'react-native-reanimated/plugin',
  ],
  overrides: [
    {
      test: /node_modules[\\/]react-native-vector-icons[\\/]/,
      presets: ['@babel/preset-react'],
    }
  ]
};

