// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "prettier/prettier": ["error", {
      // "singleQuote": true, // 强制单引号
      // "camelcase": true, // 强制驼峰法命名
      // // "semi": false, // 语句强制分号结尾
      // "strict": true, // 使用严格模式
      // "no-spaced-func": false, // 函数调用时 函数名与()之间不能有空格
      // "space-before-function-paren": false, // 函数定义时括号前面要不要有空格
      // "trailingComma": "none",
      // "bracketSpacing": true,
      // "jsxBracketSameLine": true
      // 'no-tabs': ["error", { allowIndentationTabs: true }]
    // }],
    // "indent": ["error", "tab"],
    "indent": [0],
    "space-before-function-paren": 'off',
    "disallowTabs": false
  }
}
