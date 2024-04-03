import AutomationExercisePage from '../../../support/AE_PageObject/PageObject.cj';

const page = new AutomationExercisePage();

describe("Logout User Test Case", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    cy.log("Uncaught exception: " + err.message);
    return false;
  });

  beforeEach(() => {
    cy.fixture("user").as("userData");
    page.visitHomePage();
  });

  it("Logout User", function () {
    page.loginUser(this.userData.email, this.userData.password);
    page.verifyLoggedIn(this.userData.name);
    page.logoutUser();
  });
});
