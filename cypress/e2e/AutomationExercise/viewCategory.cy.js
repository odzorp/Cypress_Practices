describe("Test Case: Navigate through Categories", () => {
    beforeEach(() => {
      // Launch browser and navigate to URL
      cy.visit("https://automationexercise.com");
      // Verify that home page is visible successfully
      cy.url().should("eq", "https://automationexercise.com/");
    });
  
    it("Navigates through categories", () => {
      // Verify that categories are visible on the left sidebar
      cy.get('div#accordian').should('be.visible');
  
      // Click on 'Women' category
      cy.get('a[href="#Women"]').click();
      
      // Click on any category link under 'Women' category, for example: Dress
      cy.contains('a', 'Dress ').eq(0).click();
  
      // Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
      cy.contains('h2', 'Women - Dress Products').should('be.visible');
  
      // On left side bar, click on any sub-category link of 'Men' category
      cy.get('a[href="#Men"]').click();
      cy.contains('a', 'Jeans ').click();
  
      // Verify that user is navigated to that category page
      cy.contains('h2', 'Men - Jeans Products').should('be.visible')
        });
})