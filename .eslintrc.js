// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:vue/vue3-essential",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "parser": 'vue-eslint-parser',
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "parser": "@typescript-eslint/parser",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "vue",
//         "@typescript-eslint"
//     ],

//     "rules": {
//         "vue/multi-word-component-names": [
//             "error",
//             {
//                 ignores: ["index"], //需要忽略的组件名
//             },
//         ]
//     }
// }

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        //这里是添加的代码
        {
            files: ['src/views/index.vue', 'src/views/**/index.vue'],   // 匹配views和二级目录中的index.vue
            rules: {
                'vue/multi-word-component-names': "off",
            } //给上面匹配的文件指定规则
        },
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
