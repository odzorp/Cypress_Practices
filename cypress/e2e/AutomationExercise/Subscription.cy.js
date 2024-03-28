describe("Test Case 10: Verify Subscription in home page", () => {
    beforeEach(() => {
        cy.fixture("user").as("userData");
        cy.visit("https://automationexercise.com");
        cy.url().should("contain", "https://automationexercise.com");
    });
  
    it("Scrolls down to footer and verifies 'SUBSCRIPTION' text", () => {
        cy.contains('h2', 'Subscription').should("be.visible");
    });
  
    it("Subscribes with valid email address", function () {
        const email = this.userData.email;
        cy.get('#footer').scrollIntoView();
        cy.get('#susbscribe_email').type(email);
        cy.get('#subscribe').click({force: true});
        cy.contains("You have been successfully subscribed!").should("be.visible");
    });
    it("Subscribes with invalid email address", () => {
        cy.get('#footer').scrollIntoView();
        cy.get('#susbscribe_email').type("invalidemail@gmail.com");
        cy.get('#subscribe').click({force: true});
        cy.contains("You have been successfully subscribed!").should("not.be.visible");
    });

    it("Does not submit with empty email", () => {
        cy.get('#footer').scrollIntoView();
        cy.get('#susbscribe_email').clear(); 
        cy.get('#subscribe').click({ force: true });
        cy.contains("You have been successfully subscribed!").should("not.be.visible");
      });
      
});
