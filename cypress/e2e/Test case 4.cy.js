describe('Test Skenario', () => {
  it('Test Case 4 Logout', () => {
    cy.visit('https://www.automationexercise.com/');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('mahsya@gmail.com');
    cy.get('[data-qa="login-email"]').type('mahsya@gmail.com');
    cy.get('[data-qa="login-password"]').clear('m');
    cy.get('[data-qa="login-password"]').type('mahsya');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    /* ==== End Cypress Studio ==== */

  })
})