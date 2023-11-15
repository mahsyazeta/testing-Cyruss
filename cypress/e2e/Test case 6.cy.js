describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('div.contact-form > .title').should('have.text', 'Get In Touch');
    cy.get('[data-qa="name"]').clear('mahsya');
    cy.get('[data-qa="name"]').type('mahsya');
    cy.get('[data-qa="email"]').clear('mahsya@gmail.com');
    cy.get('[data-qa="email"]').type('mahsya@gmail.com');
    cy.get('[data-qa="subject"]').clear('mahsya');
    cy.get('[data-qa="subject"]').type('mahsya zeta aradhana');
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    cy.get('span').click();
    /* ==== End Cypress Studio ==== */
  })
})