describe('Web Postman Vue - Tests Complet', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  beforeEach(() => {
    // Visite l'application avant chaque test
    cy.visit('http://localhost:8080');
  });

  // ✅ Test 1 : Vérifier la présence des éléments de base
  it('Vérifie que les éléments principaux sont affichés', () => {
    cy.get('input[placeholder="https://example.com/api"]').should('be.visible');
    cy.get('button').contains('Envoyer').should('be.visible');
    cy.get('[data-cy="toggle-theme"]').should('be.visible');
  });

  // ✅ Test 2 : Tester la requête GET
  it('Envoie une requête GET et affiche la réponse', () => {
    cy.get('input[placeholder="https://example.com/api"]').type(`${apiUrl}/1`);
    cy.get('button').contains('Envoyer').click();
    cy.wait(1000);
    cy.get('pre').should('contain', '"id": 1');
  });

  // ✅ Test 3 : Tester la requête POST
  it('Envoie une requête POST et reçoit une réponse', () => {
    cy.get('input[placeholder="https://example.com/api"]').type(apiUrl);
    cy.get('select').eq(0).select('POST');
    cy.get('select').eq(1).select('json');
    cy.get('textarea').type(
      JSON.stringify({
        title: 'Test Title',
        body: 'Test Body',
        userId: 1,
      }), { parseSpecialCharSequences: false }
        
      
    );
    cy.get('button').contains('Envoyer').click();
    cy.wait(1000);
    cy.get('pre').should('contain', '"id":');
  });

  // ✅ Test 4 : Tester la requête PUT
  it('Envoie une requête PUT et vérifie la mise à jour', () => {
    cy.get('input[placeholder="https://example.com/api"]').type(`${apiUrl}/1`);
    cy.get('select').eq(0).select('PUT');
    cy.get('textarea').type(
      JSON.stringify({
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1,
      }), { parseSpecialCharSequences: false }
      
    );
    cy.get('button').contains('Envoyer').click();
    cy.wait(1000);
    cy.get('pre').should('contain', '"title": "Updated Title"');
  });

  // ✅ Test 5 : Tester la requête DELETE
  it('Envoie une requête DELETE et reçoit une réponse vide', () => {
    cy.get('input[placeholder="https://example.com/api"]').type(`${apiUrl}/1`);
    cy.get('select').eq(0).select('DELETE');
    cy.get('button').contains('Envoyer').click();
    cy.wait(1000);
    cy.get('pre').should('contain', '{}');
  });

  // ✅ Test 6 : Tester les paramètres personnalisés
  it('Ajoute des paramètres personnalisés et vérifie la réponse', () => {
    cy.get('input[placeholder="https://example.com/api"]').type('https://jsonplaceholder.typicode.com/comments');
    cy.get('select').eq(0).select('GET');
    cy.get('select').eq(1).select('params');

    // Ajouter le paramètre postId=1
    cy.get('input[placeholder="Clé"]').type('postId');
    cy.get('input[placeholder="Valeur"]').type('1');
    cy.get('button').contains('+ Ajouter').click();

    cy.get('button').contains('Envoyer').click();
    cy.wait(1000);
    cy.get('pre').should('contain', '"postId": 1');
  });

  // ✅ Test 7 : Tester le Mode Sombre
  it('Bascule en mode sombre et vérifie le changement', () => {
    cy.get('[data-cy="toggle-theme"]').click();
    cy.get('body').should('have.class', 'dark-mode');
  });

  // ✅ Test 8 : Vérifier que le mode sombre persiste après un rechargement
  it('Vérifie la persistance du mode sombre après rechargement', () => {
    cy.get('[data-cy="toggle-theme"]').click();
    cy.reload();
    cy.get('body').should('have.class', 'dark-mode');
  });

});
