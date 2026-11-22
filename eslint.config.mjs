import next from '@next/eslint-plugin-next'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { '@next/next': next, 'react-hooks': reactHooks },
    rules: {
      ...next.configs['core-web-vitals'].rules,
      ...reactHooks.configs.flat.recommended.rules,
    },
  },
]
