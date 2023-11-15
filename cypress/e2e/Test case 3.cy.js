describe('Test Skenario', () => {
  it('Test Case 3: Login User with incorrect email and password', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('mahsya@gmail.com');
    cy.get('[data-qa="login-email"]').type('mahsya1@gmail.com');
    cy.get('[data-qa="login-password"]').clear('m');
    cy.get('[data-qa="login-password"]').type('mahsya');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.login-form > form > p').should('be.visible').contains('Your email or password is incorrect!');
    /* ==== End Cypress Studio ==== */
  })
})