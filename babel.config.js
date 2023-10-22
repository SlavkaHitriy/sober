module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            '@babel/plugin-proposal-export-namespace-from',
            'react-native-reanimated/plugin',
            require.resolve('expo-router/babel'),
            [
                'module-resolver',
                {
                    alias: {
                        '@assets': ['./assets'],
                        '@components': ['./components'],
                        '@constants': ['./constants'],
                        '@helpers': ['./helpers'],
                        '@store': ['./store'],
                        '@styles': ['./styles'],
                        '@app': ['./app'],
                        '@mocks': ['./mocks'],
                        '@libs': ['./libs'],
                    },
                },
            ],
        ],
    };
};
