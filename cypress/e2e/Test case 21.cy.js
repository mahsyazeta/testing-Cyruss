describe('template spec', () => {
  it('Test Case 21: Add review on product', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.title').should('be.visible');
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.active > a').should('be.visible');
    cy.get('#name').clear('mahsya');
    cy.get('#name').type('mahsya');
    cy.get('#email').clear('mahsya@gmail.com');
    cy.get('#email').type('mahsya@gmail.com');
    cy.get('#review').click();
    cy.get('#button-review').click();
    /* ==== End Cypress Studio ==== */
  })
})