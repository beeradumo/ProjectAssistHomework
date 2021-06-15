
const pathCSV = 'E:/Automation Test/Cypress/cypress-framework/cypress/fixtures/AssistHomework-website.csv';

const inputNume = '#g2599-name';
const inputEmail = '#g2599-email';
const inputWeb = 'input[name="g2599-website"]';
const inputExperience = 'select[name="g2599-experienceinyears"]';
const inputComment = 'textarea[name="g2599-comment"]';

//Test Contact form with "Name and Email field" empty

describe('Test Contact form "Website field"', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "Website field" with "Name and Email field" empty', () => {

        it(`TC 1, Field Website can be empty ""`, () =>{
cy.writeFile(pathCSV, `1 ,Verify textbox Website with "Name and Email field" empty' ,Website field can be empty ,1)Click on Website field      2)Press Enter, '' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputWeb).should('have.class', 'url').and('have.attr', 'value')
            cy.get(inputWeb).should('have.attr', 'type', 'url')

            cy.get(inputWeb).clear().type('{enter}').should('have.value', '')
                cy.get(inputNume).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 2, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `2 ,Verify textbox Website with "Name and Email field" empty ,First character cannot be space ,1)Click on Website field      2)Press on space button      3)Press Enter , ' ' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})           

        cy.get(inputWeb).invoke('attr', 'type', 'text').should('have.attr', 'type', 'text')
            cy.get(inputWeb).clear().type(' {enter}').should('have.value', ' ')

            cy.get(inputNume).should('have.value', '').and('be.focus')
        cy.get(inputWeb).invoke('attr', 'type', 'url').should('have.attr', 'type', 'url')
    
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        })

        it(`TC 3, Test invalid URL address "testHomework.ro"`, () =>{
cy.writeFile(pathCSV, `3 ,Verify textbox Website with "Name and Email field" empty ,Test invalid URL address ,1)Click on Website field      2)Type testHomework.ro      3)Press Enter , 'testHomework.ro' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                

            cy.get(inputWeb).clear().type('testHomework.ro{enter}').should('have.value', 'testHomework.ro')
            cy.get(inputNume).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 4, Test invalid URL address "http://testHomework_ro"`, () =>{
cy.writeFile(pathCSV, `4 ,Verify textbox Website with "Name and Email field" empty ,Test invalid URL address ,1)Click on Website field      2)Type http://testHomework_ro      3)Press Enter , 'http://testHomework_ro' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                 

            cy.get(inputWeb).clear().type('http://testHomework_ro{enter}').should('have.value', 'http://testHomework_ro')
            cy.get(inputNume).should('have.value', '').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 5, Test valid data "http://www.testHomework.ro.com"`, () =>{
cy.writeFile(pathCSV, `5 ,Verify textbox Website with "Name and Email field" empty ,Test valid data ,1)Click on Website field      2)Type http://www.testHomework.ro.com      3)Press Enter , 'http://www.testHomework.ro.com' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                   

            cy.get(inputWeb).clear().type('http://www.testHomework.ro.com{enter}').should('have.value', 'http://www.testHomework.ro.com')
            cy.get(inputNume).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        }) 

    })

//Test Contact form with "Name field" filled and "Email field" empty

    context('Test scenario "Website field" with "Name field" filled and "Email field" empty', () => {

        before(() =>{
            cy.get(inputNume).clear().type("Radu Mihail")
        })

        it(`TC 6, Field Website can be empty ""`, () =>{
cy.writeFile(pathCSV, `6 ,Verify textbox Website with "Name field" filled and "Email field" empty' ,Website field can be empty ,1)Click on Website field      2)Press Enter, '' ,Email field should be focused and have require message -Please fill out this field ,Email field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputWeb).should('have.class', 'url').and('have.attr', 'value')
            cy.get(inputWeb).should('have.attr', 'type', 'url')

            cy.get(inputWeb).clear().type('{enter}').should('have.value', '')
                cy.get(inputEmail).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 7, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `7 ,Verify textbox Website with "Name field" filled and "Email field" empty ,First character cannot be space ,1)Click on Website field      2)Press on space button      3)Press Enter , ' ' ,Email field should be focused and have require message -Please fill out this field ,Email field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})           

        cy.get(inputWeb).invoke('attr', 'type', 'text').should('have.attr', 'type', 'text')
            cy.get(inputWeb).clear().type(' {enter}').should('have.value', ' ')

            cy.get(inputEmail).should('have.value', '').and('be.focus')
        cy.get(inputWeb).invoke('attr', 'type', 'url').should('have.attr', 'type', 'url')
    
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        })

        it(`TC 8, Test invalid URL address "testHomework.ro"`, () =>{
cy.writeFile(pathCSV, `8 ,Verify textbox Website with "Name field" filled and "Email field" empty ,Test invalid URL address ,1)Click on Website field      2)Type testHomework.ro      3)Press Enter , 'testHomework.ro' ,Email field should be focused and have require message -Please fill out this field ,Email field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                

            cy.get(inputWeb).clear().type('testHomework.ro{enter}').should('have.value', 'testHomework.ro')
            cy.get(inputEmail).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 9, Test invalid URL address "http://testHomework_ro"`, () =>{
cy.writeFile(pathCSV, `9 ,Verify textbox Website with "Name field" filled and "Email field" empty ,Test invalid URL address ,1)Click on Website field      2)Type http://testHomework_ro      3)Press Enter , 'http://testHomework_ro' ,Email field should be focused and have require message -Please fill out this field ,Email field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                 

            cy.get(inputWeb).clear().type('http://testHomework_ro{enter}').should('have.value', 'http://testHomework_ro')
            cy.get(inputEmail).should('have.value', '').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 10, Test valid data "http://www.testHomework.ro.com"`, () =>{
cy.writeFile(pathCSV, `10 ,Verify textbox Website with "Name field" filled and "Email field" empty ,Test valid data ,1)Click on Website field      2)Type http://www.testHomework.ro.com      3)Press Enter , 'http://www.testHomework.ro.com' ,Email field should be focused and have require message -Please fill out this field ,Email field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                   

            cy.get(inputWeb).clear().type('http://www.testHomework.ro.com{enter}').should('have.value', 'http://www.testHomework.ro.com')
            cy.get(inputEmail).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        }) 

    })

//Test Contact form with "Name and Email field" filled

    context('Test scenario "Website field" with "Name and Email field" filled', () => {

        before(() =>{
            cy.get(inputNume).clear().type("Radu Mihail")
            cy.get(inputEmail).clear().type("test.Homework@gmail.com")
        })

        it(`TC 11, Field Website can be empty ""`, () =>{
cy.writeFile(pathCSV, `11 ,Verify textbox Website with "Name and Email field" filled' ,Field Website can be empty ,1)Click on Website field      2)Press Enter, '' ,Experience select field should be focused ,Comment field is focused and have require message -Please fill out this field. ,Cypress ,Fail\n`, {flag:'a+'})         

            cy.get(inputWeb).should('have.class', 'url').and('have.attr', 'value')
            cy.get(inputWeb).should('have.attr', 'type', 'url')

            cy.get(inputWeb).clear().type('{enter}').should('have.value', '')
                cy.get(inputExperience).should('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 12, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `12 ,Verify textbox Website with "Name and Email field" filled ,First character cannot be space ,1)Click on Website field      2)Press on space button      3)Press Enter , ' ' ,Website field should be focused and have require message -Please enter a URL. ,Comment field is focused and have require message -Please fill out this field. ,Cypress ,Fail\n`, {flag:'a+'})           
cy.writeFile(pathCSV, `12' ,Verify textbox Website with "Name and Email field" filled ,First character cannot be space ,1)Click on Website field      2)Press on space button      3)Press Enter , ' ' ,Website field should be focused and have require message -Please enter a URL. ,Website field is focused and have require message -Please enter a URL. ,Manual ,Pass\n`, {flag:'a+'})  

        cy.get(inputWeb).invoke('attr', 'type', 'text').should('have.attr', 'type', 'text')
            cy.get(inputWeb).clear().type(' ').should('have.value', ' ')

        cy.get(inputWeb).invoke('attr', 'type', 'url').should('have.attr', 'type', 'url')
            cy.get(inputWeb).clear().type(' {enter}').should('be.focus')
    
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        })

        it(`TC 13, Test invalid URL address "testHomework.ro"`, () =>{
cy.writeFile(pathCSV, `13 ,Verify textbox Website with "Name and Email field" filled ,Test invalid URL address ,1)Click on Website field      2)Type testHomework.ro      3)Press Enter , 'testHomework.ro' ,Website field should be focused and have require message -Please enter a URL. ,Website field is focused and have require message -Please enter a URL. ,Cypress ,Pass\n`, {flag:'a+'})                                

            cy.get(inputWeb).clear().type('testHomework.ro{enter}').should('have.value', 'testHomework.ro')
            .and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 14, Test invalid URL address "http://testHomework_ro"`, () =>{
cy.writeFile(pathCSV, `14 ,Verify textbox Website with "Name and Email field" filled ,Test invalid URL address ,1)Click on Website field      2)Type http://testHomework_ro      3)Press Enter , 'http://testHomework_ro' ,Website field should be focused and have require message -Please enter a URL. ,Comment field is focused and have require message -Please fill out this field. ,Cypress ,Fail\n`, {flag:'a+'})                                 

            cy.get(inputWeb).clear().type('http://testHomework_ro{enter}').should('have.value', 'http://testHomework_ro')
            .and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 15, Test valid data "http://www.testHomework.ro.com"`, () =>{
cy.writeFile(pathCSV, `15 ,Verify textbox Website with "Name and Email field" filled ,Test valid data ,1)Click on Website field      2)Type http://www.testHomework.ro.com      3)Press Enter , 'http://www.testHomework.ro.com' ,Experience select field should be focused ,Comment field is focused and have require message -Please fill out this field. ,Cypress ,Fail\n`, {flag:'a+'})                                   

            cy.get(inputWeb).clear().type('http://www.testHomework.ro.com{enter}').should('have.value', 'http://www.testHomework.ro.com')
            cy.get(inputExperience).should('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        }) 

    })
})