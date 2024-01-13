const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        setupNodeEvents() {
          this.baseUrl = "http://127.0.0.1:5500/52-Testing-Cypress";
          this.viewportHeight = 1500;
          this.viewportWidth = 1200;
        },
        testIsolation: false,
      },
    });
