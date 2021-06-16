const gitPathProject = 'C:/Users/Radu/Documents/GitHub/ProjectAssistHomework/cypress-framework/cypress';

const inputNume = '#g2599-name';
const inputEmail = '#g2599-email';
const inputExperience = 'select[name="g2599-experienceinyears"]';

const pathCSV = `${gitPathProject}/fixtures/AssistHomework-email.csv`;



describe('Test Contact form "Email field"', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    //Test Contact form with "Name field" empty
    context('Test scenario "Email field" with "Name field" empty', () => {

        it(`TC 1, Field Email cannot be empty ""`, () =>{
cy.writeFile(pathCSV, `1 ,Verify textbox email with "Name field" empty' ,Email field cannot be empty ,1)Click on Email field      2)Press Enter, '' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputEmail).should('have.class', 'email').and('have.attr', 'value')
            cy.get(inputEmail).should('have.prop', 'ariaRequired', 'true').and('have.attr', 'required')
       
            cy.get(inputEmail).type('{enter}').should('have.value', '')
                cy.get(inputNume).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 2, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `2 ,Verify textbox Email with "Name field" empty ,First character cannot be space ,1)Click on Email field      2)Press on space button      3)Press Enter , ' ' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Manual ,Pass\n`, {flag:'a+'})           

        // cy.get(inputEmail).invoke('attr', 'type', 'text').should('have.attr', 'type', 'text')
        //     cy.get(inputEmail).clear().type(' {enter}').should('have.value', ' ')
        cy.log('pentru ca atributul type este email, nu ma lasa sa scriu doar spatiu, va returna valoare null')

        cy.get(inputEmail).should('have.attr', 'type', 'email')
            cy.get(inputEmail).clear().type(' {enter}').should('have.value', ' ')
            cy.get(inputNume).should('have.value', '').and('be.focus')
        
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        })

        it(`TC 3, Test invalid email address "test@Homework..ru"`, () =>{
cy.writeFile(pathCSV, `3 ,Verify textbox Email with "Name field" empty, Test invalid email address ,1)Click on Email field      2)Type test@Homework..ru      3)Press Enter , 'test@Homework..ru' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                       

            cy.get(inputEmail).clear().type('test@Homework..ru{enter}').should('have.value', 'test@Homework..ru')
            cy.get(inputNume).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            }) 
        })

        it(`TC 4, Test invalid email address "@testHomework@gmail."`, () =>{
cy.writeFile(pathCSV, `4 ,Verify textbox Email with "Name field" empty ,Test invalid email address ,1)Click on Email field      2)Type @testHomework@gmail.      3)Press Enter , '@testHomework@gmail.' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                

            cy.get(inputEmail).clear().type('@testHomework@gmail.{enter}').should('have.value', '@testHomework@gmail.')
            cy.get(inputNume).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 5, Test invalid email address ".testHomeworkgmail.ro"`, () =>{
cy.writeFile(pathCSV, `5 ,Verify textbox Email with "Name field" empty ,Test invalid email address ,1)Click on Email field      2)Type .testHomeworkgmail.ro      3)Press Enter , '.testHomeworkgmail.ro' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                 

            cy.get(inputEmail).clear().type('.testHomeworkgmail.ro{enter}').should('have.value', '.testHomeworkgmail.ro')
            cy.get(inputNume).should('have.value', '').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 6, Test valid data "test.Homework@gmail.com"`, () =>{
cy.writeFile(pathCSV, `6 ,Verify textbox Email with "Name field" empty ,Test valid data ,1)Click on Email field      2)Type test.Homework@gmail.com      3)Press Enter , 'test.Homework@gmail.com' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})                                   

            cy.get(inputEmail).clear().type('test.Homework@gmail.com{enter}').should('have.value', 'test.Homework@gmail.com')
            cy.get(inputNume).should('have.value', '').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        }) 

    })

//Test Contact form with "Name field" filled

    context('Test scenario "Email field" with "Name field" filled', () => {

        before(() =>{
            cy.get(inputNume).clear().type("Radu Mihail")
        })

        it(`TC 7, Field Email cannot be empty ""`, () =>{
cy.writeFile(pathCSV, `7 ,Verify textbox email with "Name field" filled ,Email field cannot be empty ,1)Click on Email field      2)Press Enter , '' ,Should be focused and have require message -Please fill out this field ,Is focused and have require message -Please fill out this field ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputEmail).should('have.class', 'email').and('have.attr', 'value')
            cy.get(inputEmail).should('have.prop', 'ariaRequired', 'true').and('have.attr', 'required')
       
            cy.get(inputEmail).clear().type('{enter}').should('have.value', '').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 8, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `8 ,Verify textbox Email with "Name field" filled ,First character cannot be space ,1)Click on Email field      2)Press on space button      3)Press Enter , ' ' ,Should be focused and have require message -Please fill out this field ,Is focused and have require message -Please fill out this field ,Manual ,Pass\n`, {flag:'a+'})           

        //cy.get(inputEmail).invoke('attr', 'type', 'text').should('have.attr', 'type', 'text')
            //cy.get(inputEmail).clear().type(' ').should('have.value', ' ')
    cy.log('pentru ca atributul type este email, nu ma lasa sa scriu doar spatiu, va returna valoare null')

        cy.get(inputEmail).should('have.attr', 'type', 'email')
            cy.get(inputEmail).clear().type(' {enter}').should('have.value', ' ').and('be.focus')

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        })

        it(`TC 9, Test invalid email address "test@Homework..ru"`, () =>{
cy.writeFile(pathCSV, `9 ,Verify textbox Email with "Name field" filled ,Test invalid email address ,1)Click on Email field      2)Type test@Homework..ru      3)Press Enter , 'test@Homework..ru' ,Should be focused and have require message -'.' is used at a wrong position in 'Homework..ru'. ,Is focused and have require message -'.' is used at a wrong position in 'Homework..ru'. ,Cypress ,Pass\n`, {flag:'a+'})                       

            cy.get(inputEmail).clear().type('test@Homework..ru{enter}').should('have.value', 'test@Homework..ru').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            }) 
        })

        it(`TC 10, Test invalid email address "@testHomework@gmail."`, () =>{
cy.writeFile(pathCSV, `10 ,Verify textbox Email with "Name field" filled ,Test invalid email address ,1)Click on Email field      2)Type @testHomework@gmail.      3)Press Enter , '@testHomework@gmail.' ,Should be focused and have require message -Please enter a part followed by '@'. '@testHomework@gmail.' is incomplete. ,Is focused and have require message -Please enter a part followed by '@'. '@testHomework@gmail.' is incomplete. ,Cypress ,Pass\n`, {flag:'a+'})                                

            cy.get(inputEmail).clear().type('@testHomework@gmail.{enter}').should('have.value', '@testHomework@gmail.').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 11, Test invalid email address ".testHomeworkgmail.ro"`, () =>{
cy.writeFile(pathCSV, `11 ,Verify textbox Email with "Name field" filled ,Test invalid email address ,1)Click on Email field      2)Type .testHomeworkgmail.ro      3)Press Enter , '.testHomeworkgmail.ro' ,Should be focused and have require message -Please include an '@' in the email address. '.testHomeworkgmail.ro' is missing an '@'. ,Is focused and have require message -Please include an '@' in the email address. '.testHomeworkgmail.ro' is missing an '@'. ,Cypress ,Pass\n`, {flag:'a+'})                                 

            cy.get(inputEmail).clear().type('.testHomeworkgmail.ro{enter}').should('have.value', '.testHomeworkgmail.ro').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 12, Test valid data "test.Homework@gmail.com"`, () =>{
cy.writeFile(pathCSV, `12 ,Verify textbox Email with "Name field" filled ,Test valid data ,1)Click on Email field      2)Type test.Homework@gmail.com      3)Press Enter , 'test.Homework@gmail.com' ,Should be focused on Experience select field, Focused on comment field ,Cypress ,Fail\n`, {flag:'a+'})                                   

            cy.get(inputEmail).clear().type('test.Homework@gmail.com{enter}').should('have.value', 'test.Homework@gmail.com')
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