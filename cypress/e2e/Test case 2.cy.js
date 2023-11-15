describe('Test Skenario', () => {
    it('Test Case 2: Login User with correct email and password', () => {
        cy.visit('https://www.automationexercise.com/')

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

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
        cy.get('[data-qa="city"]').type('Batu');
        cy.get('[data-qa="zipcode"]').type('165321');
        cy.get('[data-qa="mobile_number"]').clear('0');
        cy.get('[data-qa="mobile_number"]').type('0891234567');
        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="continue-button"]').click();
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        // /* ==== Generated with Cypress Studio ==== */
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('mahsya@gmail.com');
        cy.get('[data-qa="login-password"]').type('mahsya');
        cy.get('[data-qa="login-button"]').click();
        // cy.get('.shop-menu > .nav > :nth-child(5)').click();
        // cy.get('[data-qa="continue-button"]').click();
        /* ==== End Cypress Studio ==== */
    });
});