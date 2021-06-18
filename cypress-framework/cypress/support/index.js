// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import "cypress-real-events/support";
import 'cypress-file-upload';

Cypress.Server.defaults({
    ignore: xhr => true
})

Cypress.on('uncaught:exception', (err,runnable) => {
    return false;
})

Cypress.Commands.overwrite('type', (originalFn, subject, str, options) => { 
    if (str !== '') {
      return originalFn(subject, str, options)
    }
    return subject
  })
// Alternatively you can use CommonJS syntax:
// require('./commands')
