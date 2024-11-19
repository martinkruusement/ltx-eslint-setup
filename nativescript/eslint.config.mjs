// eslint-disable  sonarjs/no-duplicate-string -- flat/recommended

// import openreachtech from 'eslint-plugin-openreachtech'
// import noElse from 'eslint-plugin-no-else'
// import sortKeysFix from 'eslint-plugin-sort-keys-fix'
// import nestedIf from 'eslint-plugin-nested-if' // Doesn't work
// import oxlint from 'eslint-plugin-oxlint' // Disable rules that OXLint has implemented (if linting from cli)

import js from '@eslint/js'
import sonarjs from 'eslint-plugin-sonarjs'
import vue from 'eslint-plugin-vue'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import preferArrow from 'eslint-plugin-prefer-arrow'
import vueParser from 'vue-eslint-parser'
import yml from 'eslint-plugin-yml'
import jsonc from 'eslint-plugin-jsonc'
import node from 'eslint-plugin-n'
import importX from 'eslint-plugin-import-x'
import regExp from 'eslint-plugin-regexp'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import jsDoc from 'eslint-plugin-jsdoc'
import tsEslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import commonConf from './eslint/eslint.rules.common.mjs'
import vueConf from './eslint/eslint.rules.vue.mjs'
import disabledConf from './eslint/eslint.rules.disabled.mjs'
import diagnosticsConf from './eslint/eslint.rules.diagnostics.mjs'

const customRules = {
  common: commonConf.rules,
  vue: vueConf.rules,
  diagnostics: diagnosticsConf.rules,
  disabled: disabledConf.rules
}

const configuration = [
  ...vue.configs['flat/recommended'],
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  jsDoc.configs['flat/recommended'],
  {
    ignores: [
      'node_modules/**/*',
      'rxdb-premium/**/*',
      '.gitignore',
      'platforms/**/*',
      'vscode/**/*',
      '.migration_backup/**/*'
      // '*.ts',
      // 'package-lock.json'
    ]
  },

  {
    files: ['**/*.{js,mjs|ts}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    }
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script'
    }
  },

  // comments.recommended,
  {
    plugins: {
      // '@typescript-eslint': tsEslint,
      'import-x': importX,
      n: node,
      // sonarjs,
      // openreachtech: fixupConfigRules(openreachtech),
      // 'no-else': fixupPluginRules(noElse),
      // 'no-else': fixupPluginRules(noElse),
      // 'nested-if': {...nestedIf, rules: fixupPluginRules(nestedIf.rules),
      'prefer-arrow': preferArrow
      // '@stylistic/typescript': stylistic.configs['flat/recommended'],
      //'@stylistic': stylistic
    },

    settings: {
      node: {
        version: '>=22.6.0'
      },
      'import-x/resolver': {
        alias: {
          map: [
            ['@', './src']
          ],
          extensions: ['.*']
        }
      },
      'vue-i18n': {
        localeDir: './src/i18n/locales/*.yml',
        messageSyntaxVersion: '^9.0.0'
      }
    },

    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.es2021,
        ...globals.node,
        ...globals.nodeBuiltin,
        'vue/setup-compiler-macros': true
      },
      ecmaVersion: 'latest',
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser,
        project: path.resolve(__dirname, 'tsconfig.json'),
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue', '.json', '.yml']
      }
    }
  },

  ...vueI18n.configs['flat/recommended'],

  node.configs['flat/recommended-module'],

  stylistic.configs['disable-legacy'],
  stylistic.configs['recommended-flat'],

  ...yml.configs['flat/recommended'],
  ...jsonc.configs['flat/recommended-with-jsonc'],

  regExp.configs['flat/recommended'],
  sonarjs.configs.recommended,
  comments.recommended,

  {
    rules: {
      ...importX.configs.recommended.rules,
      ...importX.configs.typescript.rules,

      ...customRules.common,
      ...customRules.vue,
      ...customRules.disabled,
      ...customRules.diagnostics
    }
  }

]

export default configuration
