 const { data } = require("../support/generator.js");
// import {data} from "../support/generator.js";

describe("Automation Exercise Test Suite", () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    cy.log('Uncaught exception: ' + err.message);
    return false;
  });

  let userData; // Declare userData variable

  before(() => {
    
    // Load the fixture data before running the tests
    cy.fixture("user.json").then((userDataFixture) => {
      userData = data; 
    });
  });
    
  it("User Registration", function () {
    // Ensure userData is loaded before continuing
    cy.wrap(null).should(() => {
      expect(userData).to.exist;
    });

    cy.visit("https://automationexercise.com");
    cy.url().should("contain", "https://automationexercise.com");
    cy.get('a[href="/login"]').click();

    cy.contains("New User Signup!").should("be.visible");

    // Use userData in test
    cy.get('input[data-qa="signup-name"]').type(userData.name);
    cy.get('input[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('input[name="title"]').eq(0).check({ force: true });
    cy.get('input[data-qa="name"]').type(userData.name);
    cy.get('input[data-qa="email"]').type(userData.email, { force: true });
    cy.get('input[data-qa="password"]').type(userData.password);
    cy.get('select[data-qa="days"]').select(userData.dob_day, { force: true });
    cy.get('select[data-qa="months"]').select(userData.dob_month, { force: true });
    cy.get('select[data-qa="years"]').select(userData.dob_year, { force: true });
    if (userData.newsletter) cy.get("input#newsletter").check();
    if (userData.optin) cy.get("input#optin").check();
    cy.get('input[data-qa="first_name"]').type(userData.first_name);
    cy.get('input[data-qa="last_name"]').type(userData.last_name);
    cy.get('input[data-qa="company"]').type(userData.company);
    cy.get('input[data-qa="address"]').type(userData.address);
    cy.get('input[type="text"]').eq(6).type(userData.address2);
    cy.get('select[data-qa="country"]').select(userData.country, { force: true });
    cy.get('input[data-qa="state"]').type(userData.state);
    cy.get('input[data-qa="city"]').type(userData.city);
    cy.get('input[data-qa="zipcode"]').type(userData.zipcode);
    cy.get('input[data-qa="mobile_number"]').type(userData.mobile_number);
    cy.get('button[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click({ force: true });
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click({ force: true });
    cy.contains("Continue").click();
  });
});
