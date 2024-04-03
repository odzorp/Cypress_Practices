describe("Write Review Test", function() {
    beforeEach(function() {
      cy.fixture("user").as("userData");
      cy.visit("https://automationexercise.com");
      cy.url().should("contain", "https://automationexercise.com");
    });
  
    it("Writes a review for a product", function() {
      // Click on 'Products' button
      cy.get('a[href="/products"]').click();
  
      // Verify user is navigated to ALL PRODUCTS page successfully
      cy.url().should("eq","https://automationexercise.com/products" );
  
      // Click on 'View Product' button
      cy.get('ul.nav-justified a').eq(0).click();
  
      // Verify 'Write Your Review' is visible
      cy.contains('a', 'Write Your Review')
        .should("be.visible");
  
      // Enter name, email, and review
      const reviewText = 'This is  REVIEW text, Noting serious!!!';
      cy.get('input#name').type(this.userData.name);
      cy.get('input#email').type(this.userData.email);
      cy.get('textarea#review').type(reviewText);
  
      // Click 'Submit' button
      cy.get('button#button-review').click();
  
      // Verify success message 'Thank you for your review.'
      cy.contains("Thank you for your review.").should("be.visible");
    });
  });
  