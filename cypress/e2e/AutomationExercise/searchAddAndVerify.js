describe("Test Case: Search and Add Products to Cart", () => {
  beforeEach(() => {
    cy.fixture('user').as('userData')
    // Launch browser and navigate to URL
    cy.visit("https://automationexercise.com");
    // Verify that home page is visible successfully
    cy.url().should("eq", "https://automationexercise.com/");
  });

  it("Searches and Adds Products to Cart", () => {
    // Click on 'Products' button
    cy.get("ul.nav a").eq(1).click();

    // Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should("eq", "https://automationexercise.com/products");

    // Enter product name in search input and click search button
    const text =  "shirt"
    cy.get("input#search_product").type(text);
    cy.get("button#submit_search").click();

    // Verify 'SEARCHED PRODUCTS' is visible
    cy.contains("h2", "Searched Products").should("be.visible");

    // Verify all the products related to search are visible
    cy.get("div.features_items").should("have.length.greaterThan", 0);

    // Add products to cart dynamically
    cy.get('div.product-overlay').each(($product) => {
      // Hover over the product
      cy.wrap($product).trigger("mouseover",{force: true});

      // Click on 'Add to Cart' button
      cy.wrap($product).find("div.overlay-content a").click({ force: true });

      // Verify that the product has been added to cart
      cy.contains("h4", "Added!").should("be.visible");
      cy.contains("p", "Your product has been added to cart.").should(
        "be.visible"
      );
      cy.contains("u", "View Cart").should("be.visible");
      cy.get('button[data-dismiss="modal"]').should("be.visible");
    });

    // Click 'Cart' button and verify that products are visible in cart
    cy.get('a[href="/view_cart"]').eq(0)
    .click({force:true});
    cy.contains("li", "Shopping Cart").should("be.visible");
    cy.get("tbody tr")
      .should("have.length.gt", 0)
      .should("have.length.greaterThan", 0);
  });

  it("Logs in with valid credentials", () => {
    cy.fixture("user").then((userData) => {
      // Click 'Signup / Login' button
      cy.get('a[href="/login"]').click();
      cy.contains("Login to your account").should("be.visible");

      // Enter login credentials and submit
      cy.get('input[data-qa="login-email"]').type(userData.email);
      cy.get('input[data-qa="login-password"]').type(userData.password);
      cy.get('[data-qa="login-button"]').click();

      // Verify successful login
      cy.contains(`Logged in as ${userData.name}`).should("be.visible");
    });
  });
});
