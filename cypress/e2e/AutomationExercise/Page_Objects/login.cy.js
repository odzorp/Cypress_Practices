import AutomationExercisePage from '../../../support/AE_PageObject/PageObject.cy.js';
const page = new AutomationExercisePage();

describe("Automation Exercise Test Suite", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    cy.log("Uncaught exception: " + err.message);
    return false;
  });

  beforeEach(() => {
    cy.fixture("user").as("userData");
    page.visitHomePage();
  });

  it("Login User with correct email and correct password", function () {
    page.clickLoginLink();
    cy.contains("Login to your account").should("be.visible");
    page.fillEmail(this.userData.email);
    page.fillPassword(this.userData.password);
    page.clickLoginButton();
    page.verifyLoggedIn(this.userData.name);
    page.clickLogoutLink();
  });

  it("Login User with correct email and incorrect password", function () {
    page.clickLoginLink();
    cy.contains("Login to your account").should("be.visible");
    page.fillEmail(this.userData.email);
    page.fillPassword("incorrectpassword");
    page.clickLoginButton();
    page.verifyLoginErrorMessage("Your email or password is incorrect!");
  });

  it("Login User with incorrect email and correct password", function () {
    page.clickLoginLink();
    cy.contains("Login to your account").should("be.visible");
    page.fillEmail("incorrectemail@example.com");
    page.fillPassword(this.userData.password);
    page.clickLoginButton();
    page.verifyLoginErrorMessage("Your email or password is incorrect!");
  });

  it("Login User with incorrect email and incorrect password", function () {
    page.clickLoginLink();
    cy.contains("Login to your account").should("be.visible");
    page.fillEmail("incorrectemail@example.com");
    page.fillPassword("incorrectpassword");
    page.clickLoginButton();
    page.verifyLoginErrorMessage("Your email or password is incorrect!");
  });
});
