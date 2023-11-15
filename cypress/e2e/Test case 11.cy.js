describe('Test Skenario', () => {
  it('Test Case 11: Verify Subscription in Cart page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#susbscribe_email').clear('zetadhana@gmail.com');
    cy.get('#susbscribe_email').type('zetadhana@gmail.com');
    cy.get('#subscribe > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})