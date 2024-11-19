const vue = {
  rules: {
    'vue/attribute-hyphenation': 'off', // breaks NativeScript
    'vue/v-on-event-hyphenation': 'off', // breaks NativeScript
    'vue/valid-v-for': 'off', // breaks NativeScript, not needed for ListView
    'vue/no-v-html': 'error',
    'vue/valid-v-bind': 'off',
    'vue/html-end-tags': 'error',

    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue', 'js'],
        shouldMatchCase: true
      }
    ],

    'vue/multi-word-component-names': 'off',

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 7 },
        multiline: { max: 1 }
      }
    ],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'any',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    'vue/max-len': [
      'warn',
      {
        code: 180,
        template: 180,
        ignoreComments: true
      }
    ],

    '@intlify/vue-i18n/no-raw-text': ['error', {
      attributes: {
        ignoreText: [':', '%', '(', ')', '%)', '.', ',', ', ', '"', '+', ' | ', '© ', '×', '#', '*']
      }
    }],

    'vue/order-in-components': ['warn', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['props', 'propsData'],
        ['delimiters', 'comments'], // delimiters: {{ and }}
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware', // nuxt
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        'emits',
        'setup',
        ['components', 'directives', 'filters'],
        'asyncData', // nuxt
        'data',
        'fetch', // nuxt
        'head',
        'computed',
        'watch',
        'watchQuery', // nuxt
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }]
  }
}

export default vue
