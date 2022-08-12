describe('Authentication', () => {
    it('should sign in with valid credentials', () => {
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('Astrouskaya@yahoo.com');
        cy.get('#normal_login_password')
            .type('Greencard2021')
        cy.get('.login-form-button')
            .click()

        cy.get('.ant-avatar-square')
            .should('be.visible')
        cy.location('pathname')
            .should('include', 'profile')
    });
});