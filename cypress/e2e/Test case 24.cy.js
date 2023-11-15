describe('template spec', () => {
  it('Test Case 24: Download Invoice after purchase order', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').type('mahsya');
    cy.get('[data-qa="signup-email"]').type('mahsya@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('mahsya');
    cy.get('[data-qa="days"]').select('26');
    cy.get('[data-qa="months"]').select('12');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('#newsletter').check();
    cy.get('[data-qa="first_name"]').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Mahsya');
    cy.get('[data-qa="first_name"]').type('Zeta');
    cy.get('[data-qa="last_name"]').type('Aradhana');
    cy.get('[data-qa="company"]').type('Indonesia');
    cy.get('[data-qa="address"]').type('Batu');
    cy.get('[data-qa="address2"]').type('Batu');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="company"]').type('Zelixir');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').click();
    cy.get('[data-qa="state"]').click();
    cy.get('[data-qa="state"]').type('indo');
    cy.get('[data-qa="city"]').type('batu');
    cy.get('[data-qa="zipcode"]').type('65321');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('0891234567');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(10) > a').should('have.text', ' Logged in as mahsya');
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#address_delivery').should('be.visible');
    cy.get('#address_invoice').should('be.visible');
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('mahsya');
    cy.get('[data-qa="name-on-card"]').type('mahsyazeta');
    cy.get('[data-qa="card-number"]').clear('1');
    cy.get('[data-qa="card-number"]').type('12345678');
    cy.get('[data-qa="cvc"]').clear('12');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').clear('12');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').clear('12');
    cy.get('[data-qa="expiry-year"]').type('1234');
    cy.get('[data-qa="pay-button"]').click();

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-sm-9 > .btn-default',{timeout: 3000}).click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})