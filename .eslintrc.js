module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },

  plugins: [
    'vue'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [2, 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'error',
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 2,
    // 要求在注释周围有空行( 要求在块级注释之前有一空行)
    "lines-around-comment": [1, {
      "beforeBlockComment": true
    }],
    // 强制 generator 函数中 * 号周围使用一致的空格
    "generator-star-spacing": [2, {
      "before": true,
      "after": true
    }],
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [0, "always"],
    // 允许构造函数首字母非大写
    "new-cap": 0,
    // 允许开发过程使用debugger
    "no-new": 0,
    "no-unused-vars": 0
  },

  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript'
  ]
}
