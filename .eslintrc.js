/* eslint-disable strict */

"use strict";

module.exports = {
  root: true,
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
  },
  globals: {
    window: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      1,
      {
        printWidth: 120,
        singleQuote: false,
        trailingComma: "all",
      },
    ],
    // Possible Errors
    "no-await-in-loop": 0,
    "no-cond-assign": [2, "always"],
    "no-console": 0,
    "no-constant-condition": [1, { checkLoops: false }],
    "no-control-regex": 1,
    "no-debugger": 1,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 1,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 1,
    // 'no-extra-parens': 1,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": [2, { skipStrings: false }],
    "no-obj-calls": 2,
    "no-prototype-builtins": 0,
    "no-regex-spaces": 1,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 1,
    "no-unexpected-multiline": 2,
    "no-unreachable": 1,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,

    // Best Practices
    "accessor-pairs": 1,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "class-methods-use-this": 0, // TODO: make it 1 later - it can run, but we don't want it on production
    complexity: 1,
    "consistent-return": 0,
    curly: 1,
    "default-case": 0,
    // 'dot-notation': 1,
    eqeqeq: 2,
    "guard-for-in": 0,
    "no-alert": 0, // TODO: make it 1 later - we don't want this on production
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    // 'no-else-return': 1,
    // 'no-empty-function': 1,
    "no-empty-pattern": 1,
    "no-eq-null": 1,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 1,
    "no-extra-label": 1,
    "no-fallthrough": 1,
    "no-floating-decimal": 1,
    "no-global-assign": 2,
    "no-implicit-coercion": [1, { allow: ["!!", "+"] }],
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-labels": 1,
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-magic-numbers": 0,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    // 'no-new': 1,
    "no-octal-escape": 2,
    "no-octal": 2,
    // 'no-param-reassign': 1,
    "no-proto": 2,
    "no-redeclare": 2,
    // 'no-restricted-properties': 0,
    "no-return-assign": 2,
    "no-return-await": 1,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 1,
    "no-throw-literal": 1,
    "no-unmodified-loop-condition": 1,
    "no-unused-expressions": 1,
    "no-unused-labels": 1,
    "no-useless-call": 1,
    "no-useless-concat": 1,
    "no-useless-escape": 2,
    "no-useless-return": 1,
    "no-void": 1,
    "no-warning-comments": 0,
    "no-with": 2,
    radix: 2,
    "require-await": 1,
    "vars-on-top": 0,
    yoda: 1,

    // Strict Mode
    strict: 1,

    // Variables
    "init-declarations": 0,
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-restricted-globals": 0,
    "no-shadow-restricted-names": 2,
    "no-shadow": 0,
    "no-undef-init": 1,
    "no-undef": 2,
    // 'no-undefined': 1,
    "no-unused-vars": 1,
    "no-use-before-define": [2, "nofunc"],

    // Node.js and CommonJS
    "callback-return": 0,
    "global-require": 0,
    "handle-callback-err": 1,
    "no-mixed-requires": 0,
    "no-new-require": 2,
    "no-path-concat": 1,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-restricted-modules": 0,
    "no-sync": 0,

    // ECMAScript 6
    "arrow-body-style": 1,
    "constructor-super": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 1,
    "no-new-symbol": 2,
    "no-restricted-imports": 0,
    "no-this-before-super": 2,
    "no-useless-computed-key": 1,
    "no-useless-constructor": 1,
    "no-useless-rename": 1,
    "no-var": 1,
    "object-shorthand": 1,
    // 'prefer-arrow-callback': 1,
    "prefer-const": 1,
    // 'prefer-destructuring': 1, // maybe someday
    "prefer-numeric-literals": 1,
    "prefer-rest-params": 1,
    "prefer-spread": 1,
    // 'prefer-template': 1,
    "require-yield": 1,
    "sort-imports": 0,
    // 'symbol-description': 0,
  },
};
