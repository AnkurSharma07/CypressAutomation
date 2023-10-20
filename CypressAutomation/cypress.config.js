const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n4dvzr',
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  retries: {
    runMode: 1
  },
  env: {
    url : 'https://rahulshettyacademy.com'
  },
  e2e: {    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
  "reporter" : "mochawesome",
  "reporterOptions" : {
      "reportDir" : "cypress/results",
      "overwrite" : true,
      "html" : true,
      "json" : true
  }
});
