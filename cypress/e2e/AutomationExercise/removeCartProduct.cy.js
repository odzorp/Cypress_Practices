describe("Test Case: Remove Product from Cart", () => {
    beforeEach(() => {
      // Launch browser and navigate to URL
      cy.visit("https://automationexercise.com");
      // Verify that home page is visible successfully
      cy.url().should("eq", "https://automationexercise.com/");
    });
  
    it("Removes product from cart", () => {
      // Add products to cart
      cy.get('a[href="/products"]').click();
      cy.get('div.productinfo').eq(0).trigger("mouseover");
      cy.get('div.overlay-content a').eq(0).click({ force: true });
      cy.contains('h4', 'Added!').should('be.visible');
      cy.contains('button', 'Continue Shopping').click();
      
      // Click 'Cart' button
      cy.get('ul.nav a').eq(2).click({ force: true }, {multiple: true });
      // Verify that cart page is displayed
      cy.url().should("include", "/view_cart");
  
      // Click 'X' button corresponding to particular product
      cy.get('.cart_delete a').eq(0).click();
      
      // Verify that product is removed from the cart
      cy.get('tbody').should('not.contain', 'Blue Top');
    });
  });
  