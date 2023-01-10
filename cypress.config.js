const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  
  projectId: 'ucfgep',
   "reporter": "mochawesome",
    "reporterOptions": {
      "mochaFile": 'results/my-test-output.xml',
      "toConsole": true,
     "charts": true,
     "overwrite": false,
     "html": false,
     "json": true,
      "reportDir": "D:\Cypress\Parts Unlimited\cypress\Report",

      "compilerOptions": {
        "allowJs": true,
        "baseUrl": "./",
        "types": ["@shelex/cypress-allure-plugin"],
        "noEmit": true
    },
      defaultCommandTimeout: 100000,
     pageLoadTimeout:100000
      
    },
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
       allureWriter(on, config);
      return config;  
  },
  
}
  
}

//}
);
