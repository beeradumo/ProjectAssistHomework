# ProjectAssistHomework
 
Necesita instalate urmatoarele pachete de cypress frame-work

npx cypress open

npm install csvdata cvs cypress-file-upload cypress-real-events --save-dev

cypress/support/commands.js

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
Cypress.Commands.overwrite('type', (originalFn, subject, str, options) => { 
    if (str !== '') {
      return originalFn(subject, str, options)
    }
    return subject
})

Pentru a rula testele cypress folosesc

npm run cy:open

