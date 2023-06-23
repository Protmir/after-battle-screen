module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "linebreak-style": [
      "error",
      "unix"
    ],
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".ts",
          ".tsx"
        ]
      }
    ],
    "indent": [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ],
    "react/jsx-indent": [
      "error",
      4
    ],
    "react/jsx-indent-props": [
      "error",
      4
    ],
    "react/destructuring-assignment": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "no-plusplus": "off",
    "no-console": "off",
    "no-shadow": "off",
    "no-alert": "off",
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "off",
    'react-refresh/only-export-components': 'warn',
    "consistent-return": "off",
    "default-param-last": 0,
    "prefer-const": "off",
    "max-len": [
      "error",
      {
        "code": 200,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-cycle":  "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": [
      2,
      {
        "caseSensitive": false
      }
    ],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": 0,
    "react/no-unused-prop-types": 0
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".mjs",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
}
