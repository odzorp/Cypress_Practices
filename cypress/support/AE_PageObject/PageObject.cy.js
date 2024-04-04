class AutomationExercisePage {
    visitHomePage() {
      cy.visit("https://automationexercise.com");
      cy.url().should("contain", "https://automationexercise.com");
    }
  
    clickLoginLink() {
      cy.get('a[href="/login"]').click();
    }
  
    fillEmail(email) {
      cy.get('input[data-qa="login-email"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('input[data-qa="login-password"]').type(password);
    }
  
    clickLoginButton() {
      cy.get('[data-qa="login-button"]').click();
    }
  
    verifyLoggedIn(userName) {
      cy.contains(`Logged in as ${userName}`).should("be.visible");
    }
  
    clickLogoutLink() {
      cy.get('a[href="/logout"]').click();
    }
  
    verifyLoginPrompt() {
      cy.contains("Login to your account").should("be.visible");
    }

    
  verifyLoginErrorMessage(errorMessage) {
    cy.contains(errorMessage).should("be.visible");
}
  
    loginUser(email, password) {
      this.clickLoginLink();
      this.fillEmail(email);
      this.fillPassword(password);
      this.clickLoginButton();
    }
  
    logoutUser() {
      this.clickLogoutLink();
      this.verifyLoginPrompt();
    }
  }
  
  export default AutomationExercisePage;
  