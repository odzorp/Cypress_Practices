describe("Test Case: Add Recommended Product to Cart", () => {
  beforeEach(() => {
    // Launch browser and navigate to URL
    cy.visit("https://automationexercise.com");
  });

  it("Adds Recommended Product to Cart", () => {
    // Scroll to bottom of the page
    cy.scrollTo("bottom");

    // Verify 'RECOMMENDED ITEMS' are visible
    cy.contains("h2", "recommended items").should("be.visible");

   // Loop through each element with data-product-id attribute
    cy.get('a[data-product-id]').each(($product) => {
    cy.wrap($product).click({ force: true });
  });
  

    // Click on 'View Cart' button
    cy.contains('u', 'View Cart').eq(0).click();
    cy.contains("li", "Shopping Cart").should("be.visible");
    cy.get("tbody tr")
      .should("have.length.greaterThan", 0);

    // Verify that product is displayed in cart page
   // cy.contains(".cart_item", "Recommended Product Name").should("be.visible");
  });
});
