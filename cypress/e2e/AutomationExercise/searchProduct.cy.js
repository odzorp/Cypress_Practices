describe("Test Case 9: Search Product", () => {
    beforeEach(() => {
      cy.visit("https://automationexercise.com");
      cy.url().should("contain", "https://automationexercise.com");
    });
  
    it("Searches for a product", () => {
      cy.contains("Products").click({ force: true });
      cy.contains("h2", "All Products").should("be.visible");
  
      const productName = "Blue Top";
      cy.get('input#search_product').type(productName);
      cy.get('i.fa-search').click({ force: true });
  
      cy.contains('h2', 'Searched Products').should("be.visible");
      cy.contains("p", productName).should("be.visible");
    });
  });
  