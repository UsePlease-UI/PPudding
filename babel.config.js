module.exports = {
    presets: [
        ['@babel/preset-react', { runtime: 'automatic' }],
        [
            '@babel/preset-env',
            {
                modules: 'commonjs',
                useBuiltIns: 'usage',
                corejs: 3
            }
        ],
        '@babel/preset-typescript'
    ]
};
