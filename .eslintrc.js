/* eslint-env node*/

const disabledImportRules = {
  "import/default": "off",
  "import/dynamic-import-chunkname": "off",
  "import/export": "off",
  "import/exports-last": "off",
  "import/extensions": "off",
  "import/first": "off",
  "import/group-exports": "off",
  "import/imports-first": "off",
  "import/max-dependencies": "off",
  "import/named": "off",
  "import/namespace": "off",
  // 'import/newline-after-import': 'off',
  "import/no-absolute-path": "off",
  "import/no-amd": "off",
  "import/no-anonymous-default-export": "off",
  // 'import/no-commonjs': 'off',
  "import/no-cycle": "off",
  "import/no-default-export": "off",
  "import/no-deprecated": "off",
  "import/no-duplicates": "off",
  // 'import/no-dynamic-require': 'off',
  "import/no-extraneous-dependencies": "off",
  "import/no-import-module-exports": "off",
  "import/no-internal-modules": "off",
  "import/no-mutable-exports": "off",
  "import/no-named-as-default": "off",
  "import/no-named-as-default-member": "off",
  "import/no-named-default": "off",
  "import/no-named-export": "off",
  "import/no-namespace": "off",
  "import/no-nodejs-modules": "off",
  "import/no-relative-packages": "off",
  "import/no-relative-parent-imports": "off",
  "import/no-restricted-paths": "off",
  "import/no-self-import": "off",
  "import/no-unassigned-import": "off",
  "import/no-unresolved": "off",
  // 'import/no-unused-modules': 'off',
  // 'import/no-useless-path-segments': 'off',
  "import/no-webpack-loader-syntax": "off",
  // 'import/order': 'off',
  "import/prefer-default-export": "off",
  "import/unambiguous": "off"
}

const typescriptRules = {
  ...disabledImportRules,
  "@typescript-eslint/member-delimiter-style": [
    "error",
    {
      multiline: {
        delimiter: "none",
        requireLast: false
      }
    }
  ],
  "@typescript-eslint/naming-convention": "warn",
  "@typescript-eslint/no-base-to-string": "off",
  "@typescript-eslint/no-confusing-void-expression": "off",
  "@typescript-eslint/no-floating-promises": "off",
  "@typescript-eslint/no-misused-promises": "off",
  "@typescript-eslint/no-unnecessary-condition": "warn",
  "@typescript-eslint/semi": ["error", "never"],
  "unicorn/prevent-abbreviations": "warn"
}

const reactRules = {
  ...typescriptRules,
  // allows useEffect to be at the top
  "@typescript-eslint/no-use-before-define": "off",

  // allows className and style as component props
  "react/forbid-component-props": "off",

  "react/forbid-elements": [
    "warn",
    {
      forbid: ["dl", "dd", "dt", "br"]
    }
  ],

  // missing deps in hooks will display a warning instead of an error
  "react-hooks/exhaustive-deps": "warn"
}

module.exports = {
  extends: [
    "canonical",
    "plugin:you-dont-need-lodash-underscore/compatible",
    "plugin:you-dont-need-momentjs/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended"
  ],
  overrides: [
    {
      extends: ["canonical/typescript", "plugin:prettier/recommended"],
      files: "*.ts",
      parserOptions: {
        project: "./tsconfig.json"
      },
      rules: typescriptRules
    },
    {
      extends: ["canonical/react", "canonical/typescript", "plugin:prettier/recommended"],
      files: "*.tsx",
      parserOptions: {
        project: "./tsconfig.json"
      },
      rules: reactRules
    },
    {
      extends: ["canonical/jest"],
      files: "*.test.{ts,tsx}",
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    {
      extends: ["canonical/json", "plugin:jsonc/prettier"],
      files: "*.{json,jsonc,json5}"
    },
    {
      extends: ["canonical/yaml"],
      files: "*.yaml"
    },
    {
      extends: ["canonical/graphql"],
      files: "*.graphql"
    }
  ],
  plugins: ["security"],
  rules: {
    // conflict with prettier
    "canonical/destructuring-property-newline": "off",

    // conflict with prettier
    "canonical/export-specifier-newline": "off",

    // conflict with prettier
    "canonical/import-specifier-newline": "off",
    // allows todo and fixme comments
    "no-warning-comments": "off",
    // automatically creates template string literals
    "prefer-template": "warn",
    semi: ["error", "never"]
  },
  settings: {
    react: {
      version: "17.0.1"
    }
  }
}
