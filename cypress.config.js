const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false

    // fixturesFolder: "cypress/fixtures",
    // supportFile: "cypress/support/index.js",
    // specPattern: "cypress/integration/**/*.spec.js", // Update this with your specific spec pattern
    // html: "cypress/support/index.html"
  }
});
