module.exports = {
    env: {
      browser: true,
      node: true,
      mocha: true,     // Pour les fonctions globales comme describe, it
      'cypress/globals': true, // Pour les variables globales de Cypress
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:cypress/recommended', // Active les règles spécifiques à Cypress
    ],
    plugins: ['cypress'],
    rules: {
      'no-unused-vars': 'off', // Désactiver les erreurs pour les variables non utilisées
      'no-undef': 'off',       // Désactiver les erreurs de variables non définies
    },
  };
  