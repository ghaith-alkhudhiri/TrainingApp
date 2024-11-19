const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs'], // Add 'mjs'
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
