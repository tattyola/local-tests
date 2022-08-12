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

    it('should sign in with invalid password', () => {
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('Astrouskaya@yahoo.com');
        cy.get('#normal_login_password')
            .type('invalidPassword')
        cy.get('.login-form-button')
            .click()
        cy.get('.ant-notification-notice-message')
            .should('have.text', 'Auth failed')
    });

    it('should validate credentials', () => {
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('test');
        cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
            .should('have.text', '\'email\' is not a valid email')
        cy.get('#normal_login_email')
            .clear()
        cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
            .should('have.text', 'Required')

        cy.get('#normal_login_password')
            .type('test')
            .clear()

        cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]')
            .should('have.text', 'Required')

    });
});