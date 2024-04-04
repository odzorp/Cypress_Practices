describe("Scrolling Test", () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com");
        cy.url().should("eq", "https://automationexercise.com/");
    });

    it("Scrolls to Bottom and Verifies Subscription", () => {
        // Scroll down to bottom of the page
        cy.scrollTo("bottom");
        cy.wait(3000)
        cy.contains('h2', 'Subscription').scrollIntoView().should("be.visible");
        cy.wait(3000)


        // Click on arrow at bottom right side to move upward
        cy.window().scrollTo('top');
        cy.wait(3000)


        // Verify that page is scrolled up and specific text is visible
        cy.get('h2').should("contain.text", "Full-Fledged practice website for Automation Engineers");
    })
});
