module.exports = {
    extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true, // Adicionar ponto e vírgula no final das linhas
          singleQuote: true, // Usar aspas simples
          trailingComma: 'es5', // Adicionar vírgula no final de listas de objetos
          printWidth: 80, // Largura máxima da linha
          tabWidth: 2, // Tamanho do tab
        },
      ],
    },
  };
  