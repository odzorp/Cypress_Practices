import "cypress-file-upload";

describe("Contact Us Form Test Case", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    cy.log("Uncaught exception: " + err.message);
    return false;
  });

  beforeEach(() => {
    cy.fixture("user").as("userData");
    cy.visit("https://automationexercise.com");
    cy.url().should("contain", "https://automationexercise.com");
  });

  it("Contact Us Form Submission", function () {
    cy.get('a[href="/contact_us"]').click();

    cy.contains("h2", "Get In Touch").should("be.visible");

    cy.get('input[data-qa="name"]').type(this.userData.name);
    cy.get('input[data-qa="email"]').type(this.userData.email);
    cy.get('input[data-qa="subject"]').type("Test Subject");
    cy.get('textarea[data-qa="message"]');

    const filePath = "God.png";
    cy.get('input[name="upload_file"]').attachFile(filePath);

    cy.get('input[data-qa="submit-button"]').click({ force: true });

    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Press OK to proceed!");
    });

    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should("be.visible");

    cy.get('div[id="form-section"] span').click();
    cy.url().should("eq", "https://automationexercise.com/");
  });
});
