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
    // moduleNameMapper: {
    //     // '^redux-persist-transform-encrypt$': path.resolve(
    //     //     __dirname,
    //     //     './node_modules/redux-persist-transform-encrypt'
    //     // ),
    //     'redux-persist-transform-encrypt': require.resolve('redux-persist-transform-encrypt'),
    //     // '^redux-persist-transform-encrypt$': 'redux-persist-transform-encrypt',
    //     // 'redux-persist-transform-encrypt': require.resolve('redux-persist-transform-encrypt'),
    // },
    // transformIgnorePatterns: ['node_modules/(?!redux-persist-transform-encrypt/)'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
        // 'redux-persist-transform-encrypt': './transformer.js',
    },
}

// 解決 Jest 測試時 redux-persist-transform-encrypt SyntaxError: Unexpected token 'export' 的問題。
// 解決方式是在 package.json 加入 "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!redux-persist-transform-encrypt)/\"",
// 參考來源：https://stackoverflow.com/questions/49263429/jest-gives-an-error-syntaxerror-unexpected-token-export
