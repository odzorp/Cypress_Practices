describe("Verify All Products and Product Detail Page", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      cy.log("Uncaught exception: " + err.message);
      return false;
    });
  
    beforeEach(() => {
      cy.fixture("user").as("userData");
      cy.visit("https://automationexercise.com");
      cy.url().should("contain", "https://automationexercise.com");
    });
  
    it("Navigate to All Products and Verify Product Detail Page", function () {
      cy.get('a[href="/login"]').click();
      cy.contains("Login to your account").should("be.visible");
      cy.get('input[data-qa="login-email"]').type(this.userData.email);
      cy.get('input[data-qa="login-password"]').type(this.userData.password);
      cy.get('[data-qa="login-button"]').click();
      cy.contains(`Logged in as ${this.userData.name}`).should("be.visible");
      cy.get('a[href="/products"]').click();
      cy.url().should("eq", "https://automationexercise.com/products");
      cy.contains("h2", "All Products").should("be.visible");
      cy.get("ul.nav-justified a").eq(0).click({ force: true });
      cy.url().should("contain", "/product_details/1");
      cy.get('img[src*="/get_product_picture/"]').should("exist");
      cy.get("h2").should("exist");
      cy.contains("p", "Category").should("be.visible");
      cy.contains("span", /^Rs\.\s*\d+$/).should("be.visible");
      cy.contains("b", "Availability").should("be.visible");
      cy.contains("b", "Condition:").should("be.visible");
      cy.contains("b", "Brand:").should("be.visible");
    });
  });
  