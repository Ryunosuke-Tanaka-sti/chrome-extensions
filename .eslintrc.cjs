module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'tailwindcss',
    'import',
    'unused-imports',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      config: './tailwind.config.cjs',
    },
  },
};
