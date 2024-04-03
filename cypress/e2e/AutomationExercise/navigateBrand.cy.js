describe("Test Case: Navigate through Brands", () => {
    beforeEach(() => {
      // Launch browser and navigate to URL
      cy.visit("https://automationexercise.com");
      // Verify that home page is visible successfully
      cy.url().should("eq", "https://automationexercise.com/");
    });
  
    it("Navigates through brands", () => {
      // Click on 'Products' button
      cy.get('a[href="/products"]').eq(0).click();
      
      // Verify that Brands are visible on the left sidebar
      cy.contains('h2', 'Brands').should('be.visible');
  
      // Click on any brand name
      cy.get('a[href="/brand_products/Polo"]').click();
  
      // Verify that user is navigated to brand page and brand products are displayed
      cy.url().should('include', '/brand_products/Polo');
      cy.contains('h2', 'Brand - Polo Products').should('be.visible');
  
      // On left side bar, click on any other brand link
      cy.get('a[href="/brand_products/Madame"]').click();
  
      // Verify that user is navigated to that brand page and can see products
      cy.url().should('include', '/brand_products/Madame');
      cy.contains('h2', 'Brand - Madame Products').should('be.visible');
    });
  });
  