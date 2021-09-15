describe('Site Loads and displays content', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected that it displays a Headers', () => {
    cy.get('#header').should('be.visible')
  });
})
