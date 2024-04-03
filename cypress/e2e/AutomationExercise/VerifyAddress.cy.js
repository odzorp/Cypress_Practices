describe("Account Creation and Checkout Test", () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com");
        cy.contains("Home").should("be.visible");
    });

    it("Signs up, Adds Products to Cart, and Proceeds to Checkout", () => {
        // Click 'Signup / Login' button
        cy.contains("Signup / Login").click();

        // Fill out signup form
        cy.fixture('user').then((userData) => {
            cy.get('a[href="/login"]').click();
            cy.contains("Login to your account").should("be.visible");
            cy.get('input[data-qa="login-email"]').type(userData.email);
            cy.get('input[data-qa="login-password"]').type(userData.password);
            cy.get('[data-qa="login-button"]').click();
            cy.contains(`Logged in as ${userData.name}`).should("be.visible");
        });

        
               // Hover over second product and click 'Add to cart'
               cy.get('div.productinfo').eq(1).trigger("mouseover");
               cy.get('div.overlay-content a').eq(1).click({force:true});
       
               cy.contains('h4', 'Added!').should('be.visible');
               cy.contains('p', 'Your product has been added to cart.').should('be.visible');
               cy.contains('u', 'View Cart').should('be.visible');
               
               // Click 'View Cart' button
               cy.contains('u', 'View Cart').click({ force:true });

        // Click Proceed To Checkout
        cy.contains("Proceed To Checkout").click();

        // Verify Address details Page
        cy.contains('h2', 'Address Details').should('be.visible');

        // Verify delivery address
        cy.get('ul#address_delivery').as("deliveryAddress");
        cy.get("@deliveryAddress").contains("Your delivery address").should("be.visible");
        cy.get("@deliveryAddress").contains("Mr. fuye sundey").should("be.visible");
        cy.get("@deliveryAddress").contains("Amalitech").should("be.visible");
        cy.get("@deliveryAddress").contains("12345 street").should("be.visible");
        cy.get("@deliveryAddress").contains("Apt 101").should("be.visible");
        cy.get("@deliveryAddress").contains("Boston Ottawa 00233").should("be.visible");
        cy.get("@deliveryAddress").contains("Canada").should("be.visible");
        cy.get("@deliveryAddress").contains("+2331234567890").should("be.visible");

        // Verify billing address
        cy.get('ul#address_invoice').as("billingAddress");
        cy.get("@billingAddress").contains("Your billing address").should("be.visible");
        cy.get("@billingAddress").contains("Mr. fuye sundey").should("be.visible");
        cy.get("@billingAddress").contains("Amalitech").should("be.visible");
        cy.get("@billingAddress").contains("12345 street").should("be.visible");
        cy.get("@billingAddress").contains("Apt 101").should("be.visible");
        cy.get("@billingAddress").contains("Boston Ottawa 00233").should("be.visible");
        cy.get("@billingAddress").contains("Canada").should("be.visible");
        cy.get("@billingAddress").contains("+2331234567890").should("be.visible");
    });
});
