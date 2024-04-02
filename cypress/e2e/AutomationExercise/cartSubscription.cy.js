describe("Test Case 11: Verify Subscription in Cart page", () => {
    beforeEach(() => {
        cy.fixture("user").as("userData").then(userData => {
            const { email, password } = userData;
            cy.visit("https://automationexercise.com");
            cy.url().should("contain", "https://automationexercise.com");
            cy.get('a[href="/login"]').click();
            cy.contains("Login to your account").should("be.visible");
            cy.get('input[data-qa="login-email"]').type(email);
            cy.get('input[data-qa="login-password"]').type(password);
            cy.get('[data-qa="login-button"]').click();
        });
    });

    it("Navigates to Cart page and verifies 'SUBSCRIPTION' text", () => {
        cy.get('ul.nav a').eq(2).click();
        cy.get('#footer').scrollIntoView();
        cy.contains('h2', 'Subscription').should("be.visible");
    });

    it("Subscribes with valid email address in Cart page", () => {
        cy.get('ul.nav a').eq(2).click();
        cy.get('#footer').scrollIntoView();
        cy.get('#susbscribe_email').type(email);
        cy.get('#subscribe').click({force: true});
        cy.contains("You have been successfully subscribed!").should("be.not.visible");
    });

    it("Subscribes with valid email address in Cart page", () => {
        cy.get('ul.nav a').eq(2).click();
        cy.get('#footer').scrollIntoView();
        cy.get('#susbscribe_email').type('examples@gmail.com');
        cy.get('#subscribe').click({force: true});
        cy.contains("You have been successfully subscribed!").should("be.not.visible");
    });
});
