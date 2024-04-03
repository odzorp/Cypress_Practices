describe("Automation Exercise Test Suite", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        cy.log("Uncaught exception: " + err.message);
        return false;
    });

    beforeEach(() => {
        // Load both fixtures
        cy.fixture("userData").as("data"); // product details
        cy.fixture("user").as("userData"); // user data
        cy.visit("https://automationexercise.com");
        cy.url().should("contain", "https://automationexercise.com");
    });

    it("Adds products to cart and verifies cart contents", function () {
        const userData = this.userData;

        cy.get('a[href="/login"]').click({force: true});
        cy.contains("Login to your account").should("be.visible");
        cy.get('input[data-qa="login-email"]').type(userData.email);
        cy.get('input[data-qa="login-password"]').type(userData.password);
        cy.get('[data-qa="login-button"]').click({force:true});
        cy.contains(`Logged in as ${userData.name}`).should("be.visible");

        // Click on 'Products' button
        cy.get('a[href="/products"]').click({ force: true });

        // Hover over first product and click 'Add to cart'
        cy.get("div.productinfo").eq(0).trigger("mouseover");
        cy.get("div.overlay-content a").eq(0).click({ force: true });

        cy.contains("h4", "Added!").should("be.visible");
        cy.contains("p", "Your product has been added to cart.").should(
            "be.visible"
        );
        cy.contains("u", "View Cart").should("be.visible");
        cy.get('button[data-dismiss="modal"]').should("be.visible");

        // Click 'Continue Shopping' button
        cy.get('button[data-dismiss="modal"]').click({ force: true });

        // Hover over second product and click 'Add to cart'
        cy.get("div.productinfo").eq(1).trigger("mouseover");
        cy.get("div.overlay-content a").eq(1).click({ force: true });

        cy.contains("h4", "Added!").should("be.visible");
        cy.contains("p", "Your product has been added to cart.").should(
            "be.visible"
        );
        cy.contains("u", "View Cart").should("be.visible");

        // Click 'View Cart' button
        cy.contains("u", "View Cart").click({ force: true });

        // Iterate over each product row in the cart table




   // Iterate over each product row in the cart table  [will be working on the assertions later]

  // cy.get('tbody tr').each(($row, index) => {
 //     // Extract product details from the current row
//     const productName = $row.find('.cart_description h4 a').text().trim();
//     const price = $row.find('.cart_price p').text().trim();
//    // const quantity = $row.find('.cart_quantity button').text().trim(); // Trim whitespace
//     const totalPrice = $row.find.text().trim();

//     // Assert the product details
//     expect(this.data.products[productName].price).to.equal(price);
//     expect(this.data.products[productName].quantity).to.equal(quantity);
//     expect(this.data.products[productName].totalPrice).to.equal(totalPrice);
// });





        // Click 'Proceed To Checkout' button
        cy.contains('a', 'Proceed To Checkout').click();

        // Verify Address Details and Review Your Order (assuming there are specific elements to verify)
        // Replace the selectors with appropriate ones
        cy.contains('h2', 'Address Details').should("be.visible");
        cy.contains('h2', 'Review Your Order').should("be.visible");

        // Enter description in comment text area
        cy.get('textarea[name="message"]').type("Test comment for order");

        // Click 'Place Order' button
        cy.get('a[href="/payment"]').click();
        cy.contains('h2', 'Payment').should('be.visible');

        // Replace the selectors and values with appropriate ones
        cy.get('[data-qa="name-on-card"]').type(userData.name);
        cy.get('input[name="card_number"]').type("1234567890123456");
        cy.get('[data-qa="cvc"]').type("123");
        cy.get('[data-qa="expiry-month"]').type('05');
        cy.get('[data-qa="expiry-year"]').type('10');
        // Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click();

        // Verify success message 'Your order has been placed successfully!'
        cy.contains('p', 'Congratulations! Your order has been confirmed!').should("be.visible");

        cy.contains('a', 'Download Invoice').click();
        cy.get('a[data-qa="continue-button"]').click();
    });
});
