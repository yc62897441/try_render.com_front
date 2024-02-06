const path = require('path')
module.exports = {
    // 其他 Jest 配置...
    // moduleNameMapper: {
    //     // '^redux-persist-transform-encrypt$': path.resolve(
    //     //     __dirname,
    //     //     'path-to-your-redux-persist-transform-encrypt-file'
    //     // ),
    //     // 'redux-persist-transform-encrypt': require.resolve('redux-persist-transform-encrypt'),
    //     // // 其他 moduleNameMapper 設定...
    //     // uuid: require.resolve('uuid'),
    //     // '^uuid$': 'uuid',
    //     // '^redux-persist-transform-encrypt$': 'redux-persist-transform-encrypt',
    //     // 'redux-persist-transform-encrypt': require.resolve('redux-persist-transform-encrypt'),
    // },
    moduleNameMapper: {
        // '^redux-persist-transform-encrypt$': path.resolve(
        //     __dirname,
        //     './node_modules/redux-persist-transform-encrypt'
        // ),
        'redux-persist-transform-encrypt': require.resolve('redux-persist-transform-encrypt'),
        // '^redux-persist-transform-encrypt$': 'redux-persist-transform-encrypt',
        // 'redux-persist-transform-encrypt': require.resolve('redux-persist-transform-encrypt'),
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        'redux-persist-transform-encrypt': './transformer.js',
    },
}

// /** @type {import('jest').Config} */
// const config = {
//     verbose: true,
//     transform: { '\\.[jt]sx?$': 'babel-jest' },
//     transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
// }
// module.exports = config

// jest.config.js
// module.exports = {
//     transform: {
//         '\\.m?jsx?$': 'babel-jest',
//     },
//     transformIgnorePatterns: [
//         // for cross platform
//         `node_modules\\${require('path').sep}(?!(pupa|escape-goat))`,
//     ],
// }

// // jest.config.js
// const path = require('path')
// module.exports = {
//     preset: 'ts-jest',
//     globals: {
//         'ts-jest': {
//             tsconfig: path.join(__dirname, 'tsconfig-test.json'),
//         },
//     },
//     transform: {
//         '\\.m?jsx?$': [
//             'babel-jest',
//             {
//                 plugins: ['@babel/plugin-transform-modules-commonjs'],
//             },
//         ],
//         '\\.tsx?$': 'ts-jest',
//     },
//     transformIgnorePatterns: [
//         // for cross platform
//         `node_modules\\${path.sep}(?!(pupa|escape-goat))`,
//     ],
// }
