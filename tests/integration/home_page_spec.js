describe('Testing links on the home page', () => {
  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL
  });
  it('site navigation works', () => {
    cy.contains('Getting Started').click();
    cy.url().should('include', '/starting');

    cy.get('[data-cy=go-home-button]').click();
    cy.url().should('eq', Cypress.config().baseUrl);
  });
});