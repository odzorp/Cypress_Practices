import "cypress-file-upload";

describe("CherCher.Tech", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("https://chercher.tech/practice/popups");
  });

  it("alert handling", () => {
    cy.get('input[name="alert"]').click();
    cy.on("window:alert", (alertText) => {
      const actualText = alertText.trim().toLowerCase();
      const expectedText = "i am alert";
      expect(actualText).to.equal(expectedText);
    });
  });

  it("corfirmation  handling", () => {
    cy.get('[name="confirmation"]').click();
    cy.on("window:confirm", (alertText) => {
      const actualText = alertText.trim().toLowerCase();
      const expectedText = "i am confirm";
      expect(actualText).to.equal(expectedText);
    });
  });

  it("prompt handling", () => {
    cy.get('[name="prompt"]').click();
    cy.on("window:confirm", (confirmText) => {
      const actualText = confirmText.trim().toLowerCase();
      const expectedText = "i am confirm";
      expect(actualText).to.equal(expectedText);
      cy.window().then((win) => {
        cy.stub(win, "confirm").returns(true);
      });
    });
  });

  it("Uploads a file", () => {
    const fileName = "God.png";
    cy.fixture(fileName).then((fileContent) => {
      cy.get('[type="file"]').attachFile(fileName);
      cy.get('input[type="file"]').should(($input) => {
        expect($input.val()).to.contain(fileName);
      });
    });
  });

  it("Downloads a file", () => {
    cy.intercept("GET", "./../files/playwright-pom.zip").as("download");

    cy.get('a[href="./../files/playwright-pom.zip"]').click();
    cy.wait(5000);
  });



  it.only('Clicks on a hidden item', () => {
    cy.contains('a', 'CherCher Tech').click({ force: true });
    cy.go('back');
    cy.get('a[href="https://google.com"]').click({ force: true });
    cy.go('back');
    cy.get('a[href="https://bing.com"]').click({ force: true });
    cy.go('back');
})

  it("Double clicks on an element", () => {
    cy.get("#double-click").dblclick();
    cy.on("window:confirm", (confirmText) => {
      if (confirmText.includes("You double clicked me!!!")) {
        expect(confirmText).to.equal("You double clicked me!!!");
      } else if (confirmText.includes("You got to be kidding me")) {
        expect(confirmText).to.equal("You got to be kidding me");
      } else {
        throw new Error("Unexpected confirmation message: " + confirmText);
      }
    });
  });

  it("Opens a link in the same browser window", () => {
    cy.get("#two-window").invoke("removeAttr", "target").click();
    cy.url().should("include", "https://www.google.com/");
    cy.go("back");
  });

  it("open each link in the same tab", () => {
    cy.get("#three-window input").invoke("removeAttr", "onclick").click();
    cy.visit("https://www.bing.com/");
    cy.wait(5000);
    cy.visit("https://www.yahoo.com/");
    cy.wait(5000);
    cy.visit("https://www.google.com/");
    cy.wait(5000);
    cy.visit("https://chercher.tech/practice/popups");
  });

  it("Types something in each input field", () => {
    cy.get("input#textbar").each(($input, index) => {
      switch (index) {
        case 0:
          cy.wrap($input).type("Text for first input");
          break;
        case 1:
          cy.wrap($input).type("Text for second input");
          break;
        case 2:
          cy.wrap($input).type("Text for third input");
          break;
        default:
          break;
      }
    });
  });

  it("Can select all items from the dropdown", () => {
    cy.get("select#first")
      .select("Microsoft")
      .should("have.value", "Microsoft");
    cy.get("select#first").select("Google").should("have.value", "Google");
    cy.get("select#first").select("Apple").should("have.value", "Apple");
    cy.get("select#first").select("Yahoo").should("have.value", "Yahoo");
  });

  it("Can interact with radio buttons", () => {
    cy.get("#radio").check().should("be.checked");
  });

  it("Can interact with checkboxes", () => {
    cy.get('input[type="checkbox"]')
      .should("exist")
      .check()
      .wait(3000)
      .should("be.checked");
    cy.get('input[type="checkbox"]')
      .uncheck()
      .wait(3000)
      .should("not.be.checked");
  });
});
