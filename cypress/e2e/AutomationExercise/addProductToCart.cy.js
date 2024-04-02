describe("Test Case: Add Products to Cart and Verify Cart Contents", () => {
    let userData;

    beforeEach(() => {
        cy.fixture("userData").then((data) => {
            userData = data;
        });
         
        cy.visit("https://automationexercise.com");
        cy.url().should("contain", "https://automationexercise.com");
    });

    it("Adds products to cart and verifies cart contents", () => {
        // Click on 'Products' button
        cy.get('a[href="/products"]').click({ force: true });

        // Hover over first product and click 'Add to cart'
        cy.get('div.productinfo').eq(0).trigger("mouseover");
        cy.get('div.overlay-content a').eq(0).click({force:true});

        cy.contains('h4', 'Added!').should('be.visible');
        cy.contains('p', 'Your product has been added to cart.').should('be.visible');
        cy.contains('u', 'View Cart').should('be.visible');
        cy.get('button[data-dismiss="modal"]').should('be.visible');

        // Click 'Continue Shopping' button
        cy.get('button[data-dismiss="modal"]').click({force:true});

        // Hover over second product and click 'Add to cart'
        cy.get('div.productinfo').eq(1).trigger("mouseover");
        cy.get('div.overlay-content a').eq(1).click({force:true});

        cy.contains('h4', 'Added!').should('be.visible');
        cy.contains('p', 'Your product has been added to cart.').should('be.visible');
        cy.contains('u', 'View Cart').should('be.visible');
        
        // Click 'View Cart' button
        cy.contains('u', 'View Cart').click({ force:true });

        // Iterate over each product row in the cart table
        cy.get('tbody tr').each(($row, index) => {
            // Extract product details from the current row
            const productName = $row.find('.cart_description h4 a').text();
            const price = $row.find('.cart_price p').text();
            const quantity = $row.find('.cart_quantity button').text();
            const totalPrice = $row.find('.cart_total p.cart_total_price').text();

            // Assert the product details
            expect(userData.products[productName].price).to.equal(price);
            expect(userData.products[productName].quantity).to.equal(quantity);
            expect(userData.products[productName].totalPrice).to.equal(totalPrice);
        });
    });
});
