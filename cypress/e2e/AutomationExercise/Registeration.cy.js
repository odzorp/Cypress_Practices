describe("Automation Exercise Test Suite", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    cy.log("Uncaught exception: " + err.message);
    return false;
  });

  beforeEach(() => {
    cy.fixture("user").as("userData");
    cy.visit("https://automationexercise.com");
    cy.url().should("contain", "https://automationexercise.com");
  });

  it("User Registration", function () {
    cy.get('a[href="/login"]').click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get('input[data-qa="signup-name"]').type(this.userData.name);
    cy.get('input[data-qa="signup-name"]').should(
      "have.value",
      this.userData.name
    );
    cy.get('input[data-qa="signup-email"]').type(this.userData.email);
    cy.get('input[data-qa="signup-email"]').should(
      "have.value",
      this.userData.email
    );
    cy.get('[data-qa="signup-button"]').click();
    cy.get('input[name="title"]').eq(0).check({ force: true });
    cy.get('input[data-qa="name"]').type(this.userData.name);
    cy.get('input[data-qa="email"]').type(this.userData.email, { force: true });
    cy.get('input[data-qa="password"]').type(this.userData.password);
    cy.get('select[data-qa="days"]').select(this.userData.dob_day, {
      force: true,
    });
    cy.get('select[data-qa="months"]').select(this.userData.dob_month, {
      force: true,
    });
    cy.get('select[data-qa="years"]').select(this.userData.dob_year, {
      force: true,
    });
    if (this.userData.newsletter) cy.get("input#newsletter").check();
    if (this.userData.optin) cy.get("input#optin").check();
    cy.get('input[data-qa="first_name"]').type(this.userData.first_name);
    cy.get('input[data-qa="last_name"]').type(this.userData.last_name);
    cy.get('input[data-qa="company"]').type(this.userData.company);
    cy.get('input[data-qa="address"]').type(this.userData.address);
    cy.get('input[type="text"]').eq(6).type(this.userData.address2);
    cy.get('select[data-qa="country"]').select(this.userData.country, {
      force: true,
    });
    cy.get('input[data-qa="state"]').type(this.userData.state);
    cy.get('input[data-qa="city"]').type(this.userData.city);
    cy.get('input[data-qa="zipcode"]').type(this.userData.zipcode);
    cy.get('input[data-qa="mobile_number"]').type(this.userData.mobile_number);
    cy.get('button[data-qa="create-account"]').click();
    cy.contains("b", "Account Created!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click({ force: true });
    cy.contains(`Logged in as ${this.userData.name}`).should("be.visible");
    cy.get('a[href="/delete_account"]').click({ force: true });
    cy.contains("b", "Account Deleted!").should("be.visible");
    cy.contains("Continue").click();
  });

  it("Throws an error if user details already exist", function () {
    cy.get('a[href="/login"]').click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get('input[data-qa="signup-name"]').type(this.userData.name);
    cy.get('input[data-qa="signup-name"]').should(
      "have.value",
      this.userData.name
    );
    cy.get('input[data-qa="signup-email"]').type(this.userData.email);
    cy.get('input[data-qa="signup-email"]').should(
      "have.value",
      this.userData.email
    );
    cy.get('[data-qa="signup-button"]').click();
    cy.get('input[name="title"]').eq(0).check({ force: true });
    cy.get('input[data-qa="name"]').type(this.userData.name);
    cy.get('input[data-qa="email"]').type(this.userData.email, { force: true });
    cy.get('input[data-qa="password"]').type(this.userData.password);
    cy.get('select[data-qa="days"]').select(this.userData.dob_day, {
      force: true,
    });
    cy.get('select[data-qa="months"]').select(this.userData.dob_month, {
      force: true,
    });
    cy.get('select[data-qa="years"]').select(this.userData.dob_year, {
      force: true,
    });
    if (this.userData.newsletter) cy.get("input#newsletter").check();
    if (this.userData.optin) cy.get("input#optin").check();
    cy.get('input[data-qa="first_name"]').type(this.userData.first_name);
    cy.get('input[data-qa="last_name"]').type(this.userData.last_name);
    cy.get('input[data-qa="company"]').type(this.userData.company);
    cy.get('input[data-qa="address"]').type(this.userData.address);
    cy.get('input[type="text"]').eq(6).type(this.userData.address2);
    cy.get('select[data-qa="country"]').select(this.userData.country, {
      force: true,
    });
    cy.get('input[data-qa="state"]').type(this.userData.state);
    cy.get('input[data-qa="city"]').type(this.userData.city);
    cy.get('input[data-qa="zipcode"]').type(this.userData.zipcode);
    cy.get('input[data-qa="mobile_number"]').type(this.userData.mobile_number);
    cy.get('button[data-qa="create-account"]').click();
    cy.contains("b", "Account Created!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click({ force: true });
    cy.contains(`Logged in as ${this.userData.name}`).should("be.visible");
    cy.get('a[href="/logout"]').click({ force: true });
    cy.contains("New User Signup!").should("be.visible");
    cy.get('input[data-qa="signup-name"]').type(this.userData.name);
    cy.get('input[data-qa="signup-name"]').should(
      "have.value",
      this.userData.name
    );
    cy.get('input[data-qa="signup-email"]').type(this.userData.email);
    cy.get('input[data-qa="signup-email"]').should(
      "have.value",
      this.userData.email
    );
    cy.get('[data-qa="signup-button"]').click({ force: true });
    cy.contains("Email Address already exist!").should("be.visible");
  });
});
