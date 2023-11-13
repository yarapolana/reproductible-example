module.exports = {
  extends: ['custom', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@next/next/no-img-element': 'off',
    '@next/next/no-head-element': 'off'
  }
}
