const common = {
  rules: {
    // 'openreachtech/no-else-if': 'error',

    '@stylistic/max-statements-per-line': ['warn', { max: 3 }],
    '@stylistic/arrow-parens': ['warn', 'always'],
    '@stylistic/keyword-spacing': 'warn',
    '@stylistic/no-multiple-empty-lines': 'warn',
    '@stylistic/space-before-blocks': 'warn',
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@stylistic/quotes': 'warn', // 'consistent-as-needed',
    '@stylistic/quote-props': ['warn', 'as-needed'], // 'consistent-as-needed',
    '@stylistic/indent': ['warn', 2],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/comma-spacing': 'warn',
    '@stylistic/no-multi-spaces': 'warn',

    '@stylistic/object-curly-spacing': 'warn',
    '@stylistic/semi': 'warn',
    '@eslint-community/eslint-comments/no-restricted-disable': 'warn',

    '@stylistic/space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always'
    }],

    '@stylistic/no-trailing-spaces': ['warn', {
      ignoreComments: true // Custom highlighter needs the last space to draw better boxes
    }],

    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_+.*$',
        destructuredArrayIgnorePattern: '^_+$'
      }
    ],

    'prefer-const': ['warn', { destructuring: 'all' }],
    'prefer-template': 'warn',

    'sonarjs/cognitive-complexity': ['warn', 20],
    'sonarjs/no-duplicate-string': ['warn', { threshold: 6 }],
    'import-x/no-unresolved': 'error',
    'sonarjs/unused-import': 'warn',

    'no-empty': ['error', { allowEmptyCatch: true }],
    'n/no-unsupported-features/node-builtins': ['error', {
      ignores: ['crypto']
    }],

    'sonarjs/todo-tag': 'warn',
    'sonarjs/no-dead-store': 'warn',
    'sonarjs/new-cap': 'warn',
    'sonarjs/no-commented-code': 'warn',

    // TODO:  restore to 'error' when finalized all config 
    '@eslint-community/eslint-comments/require-description': 'warn'

    // 'no-else/no-else': 'error',
    // 'prefer-arrow/prefer-arrow-functions': ['warn','always'],

    // TODO:  Configuration for when prefer-arrow 
    /*
    'prefer-arrow/prefer-arrow-functions': ['off',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ],
    */

    // 'nested-if/nested-if-statements': ['warn', { max: 2 }],

  }
}

export default common
