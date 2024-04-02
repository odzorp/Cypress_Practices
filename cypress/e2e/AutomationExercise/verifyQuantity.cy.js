describe("Test Case 13: Verify Product quantity in Cart", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com");
    cy.url().should("contain", "https://automationexercise.com");
  });

  it("Verifies product quantity in Cart", () => {
    const expectedQuantity = 50; 
    cy.get('a[href*="/product_details"]').first().click({ force: true });
    cy.url().should("include", "/product_details");
    cy.get("input#quantity").clear().type(expectedQuantity.toString());
    cy.get('button[type="button"]').click({ force: true });
    cy.contains("h4", "Added!").should("be.visible");
    cy.contains("u", "View Cart").click({ force: true });
    cy.get(".cart_quantity button.disabled").should(
      "contain",
      expectedQuantity.toString()
    );
  });
});
