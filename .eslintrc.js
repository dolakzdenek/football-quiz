module.exports = {
  'extends': [
    //'eslint:recommended',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'
  ],
  'plugins': ['react', 'react-native', 'unused-imports', '@calm/react-intl', 'import', 'prettier'],
  'env': {
    'react-native/react-native': true,
    'jest': true,
    'es6': true,
    'node': true
  },
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'ecmaVersion': 8,
    'sourceType': 'module'
  },
  'rules': {
    'react-hooks/exhaustive-deps': ['off'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn'],
    'no-var': ['error'],
    'no-undef': ['error', {'typeof': true}],
    'no-unused-vars': ['off'],
    'func-style': ['error', 'declaration', {'allowArrowFunctions': true}],
    'no-use-before-define': ['error', {'functions': false}],
    'arrow-body-style': ['error'],
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/prop-types': ['warn'],
    'comma-dangle': ['warn', 'never'],
    'react/jsx-uses-react': ['error'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-closing-bracket-location': ['warn'],
    'react/jsx-curly-spacing': ['warn'],
    'react/jsx-equals-spacing': ['warn'],
    'eqeqeq': ['warn', 'smart'],
    'react/jsx-first-prop-new-line': ['warn'],
    'react-native/no-unused-styles': ['warn'],
    'react-native/split-platform-components': ['warn'],
    'react-native/no-inline-styles': ['off'], //preferred 'on'
    'react-native/no-color-literals': ['error'],
    'react-native/no-raw-text': ['warn'],
    'react-native/no-single-element-style-arrays': ['warn'],
    'react-native/sort-styles': [
      'off',
      'asc',
      {
        'ignoreClassNames': false,
        'ignoreStyleProperties': false
      }
    ],
    'import/order': [
      'warn',
      {
        'alphabetize': {
          'caseInsensitive': true,
          'order': 'asc'
        },
        'groups': ['builtin', 'external', 'index', 'sibling', 'parent', 'internal']
      }
    ],
    'unused-imports/no-unused-imports': ['error'],
    '@calm/react-intl/missing-formatted-message': [
      'warn',
      {
        'noTrailingWhitespace': true,
        'ignoreLinks': true,
        'enforceLabels': false,
        'enforceImageAlts': false,
        'enforceInputProps': true
      }
    ],
    '@calm/react-intl/missing-attribute': [
      'warn',
      {
        'noTrailingWhitespace': true,
        'noSpreadOperator': true,
        'requireDescription': false,
        'formatDefineMessages': false,
        'requireIdAsString': true,
        'requireDefaultMessage': true
      }
    ],
    '@calm/react-intl/missing-values': ['warn']
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
