module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Reglas recomendadas para TypeScript
    'plugin:prettier/recommended', // Integración con Prettier
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'], // Archivos que no deben ser analizados
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // No requiere prefijo en interfaces
    '@typescript-eslint/explicit-function-return-type': 'off', // No obliga a definir tipos de retorno explícitos
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Permite funciones sin tipos explícitos en las exportaciones
    '@typescript-eslint/no-explicit-any': 'off', // Permite el uso de `any`
    '@typescript-eslint/no-inferrable-types': 'off', // Permite tipos inferidos en propiedades y variables
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignora variables no usadas que empiezan con _
    '@typescript-eslint/no-parameter-properties': 'off', // Permite definir propiedades directamente en el constructor
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Maneja los saltos de línea de manera automática
        singleQuote: true, // Usa comillas simples
        semi: true, // Usa punto y coma al final de las líneas
        trailingComma: 'es5', // Coma final en objetos y arreglos donde sea necesario
      },
    ],
    'no-console': 'off', // Permite usar console.log sin advertencias ni errores
    'no-debugger': 'off', // Permite usar debugger sin advertencias
    'no-multiple-empty-lines': ['error', { max: 1 }], // Evita múltiples líneas vacías
  },
};
