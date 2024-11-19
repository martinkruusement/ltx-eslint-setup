const disabled = {
  rules: {
    '@eslint-community/eslint-comments/no-restricted-disable': [
      'error',
      '*',
      '!eslint-enable',
      '!@typescript-eslint/no-require-imports',
      '!sonarjs/no-duplicate-string',
      '!sonarjs/cognitive-complexity',
      '!sonarjs/no-unused-vars',
      '!vue/max-len',
      '!no-undef',
      '!no-var',
      '!sonarjs/no-var'
    ],

    'sonarjs/new-cap': 'off',
    'import-x/no-nodejs-modules': 'off',
    'jsdoc/require-jsdoc': 'off',
    '@typescript-eslint/no-implicit-any': 'off',
    'no-unused-vars': 'off',
    'sonarjs/no-collapsible-if': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/prefer-single-boolean-return': 'off',
    'n/no-missing-import': 'off',
    'no-debugger': 'off',
    '@stylistic/spaced-comment': 'off',

    'no-misleading-character-class': 'error',
    'import-x/namespace': 'off',
    'import-x/default': 'off',
    'import-x/no-named-as-default': 'off',
    'import-x/no-named-as-default-member': 'off'
  }
}

export default disabled
