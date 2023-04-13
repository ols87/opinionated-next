describe('Main', () => {
  it('render page and get title', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('Hello World');
  });
});
