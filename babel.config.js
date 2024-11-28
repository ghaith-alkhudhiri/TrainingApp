module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-flow'],
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
    'react-native-reanimated/plugin'],
};

