describe("Logout User Test Case", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      cy.log("Uncaught exception: " + err.message);
      return false;
    });
  
    beforeEach(() => {
      cy.fixture("user").as("userData");
      cy.visit("https://automationexercise.com");
      cy.url().should("contain", "https://automationexercise.com");
    });
  
    it("Logout User", function () {
      cy.get('a[href="/login"]').click();
      cy.contains("Login to your account").should("be.visible");
      cy.get('input[data-qa="login-email"]').type(this.userData.email);
      cy.get('input[data-qa="login-password"]').type(this.userData.password);
      cy.get('[data-qa="login-button"]').click();
      cy.contains(`Logged in as ${this.userData.name}`).should("be.visible");
      cy.get('a[href="/logout"]').click();
      cy.contains("Login to your account").should("be.visible");
    });
  });
  