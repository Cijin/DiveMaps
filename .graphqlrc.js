// point this to your schema
module.exports = {
  files: ['*.graphql'],
  parser: '@graphql-eslint/eslint-plugin',
  plugins: ['@graphql-eslint'],
  parserOptions: {
    schema: 'http://localhost:8000'
  }
}
