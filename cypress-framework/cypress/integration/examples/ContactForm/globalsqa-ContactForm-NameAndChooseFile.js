
const inputNume = '#g2599-name';
const inputEmail = '#g2599-email';
const inputComment = 'textarea[name="g2599-comment"]';
const inputSubmit = 'button[type="submit"]';

const filePath = 'photoS.jpg'

const pathCSV = `cypress/fixtures/AssistHomework-namefile.csv`;

describe('Test Contact form "Name field"', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "textbox Name"', () => {

        it(`TC 1, Field Name cannot be empty ""`, () =>{
cy.writeFile(pathCSV, `1 ,Verify textbox Name ,Field Name cannot be empty ,1)Click on Name field      2)Press Enter, '' ,Should be focused and have require message -Please fill out this field ,Is focused and have require message -Please fill out this field ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputNume).should('have.class', 'name').and('have.attr', 'value')
            cy.get(inputNume).should('have.prop', 'ariaRequired', 'true').and('have.attr', 'required')
       
            cy.get(inputNume).type(`{enter}`).should('have.value', '').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 2, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `2 ,Verify textbox Name ,First character cannot be space ,1)Click on Name field      2)Press on space button      3)Press Enter , ' ' ,Should be focused and have require message -Please fill out this field ,Focused on Email field and no require message ,Cypress ,Fail\n`, {flag:'a+'})           

            cy.get(inputNume).clear().type(' {enter}').should('have.value', ' ').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        })

        it(`TC 3, Test minimum length 2 characters "R"`, () =>{
cy.writeFile(pathCSV, `3 ,Verify textbox Name ,Test minimum length 2 characters ,1)Click on Name field      2)Type R      3)Press Enter, 'R' ,Should be focused and have require message -Please fill out this field ,Focused on Email field and no require message ,Cypress ,Fail\n`, {flag:'a+'})                       

            cy.get(inputNume).clear().type('R{enter}').should('have.value', 'R').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            }) 
        })

        it(`TC 4, Numbers are not allowed "123456"`, () =>{
cy.writeFile(pathCSV, `4 ,Verify textbox Name ,Numbers are not allowed ,1)Click on Name field      2)Type 123456      3)Press Enter, '123456' ,Should be focused and have require message -Numbers are not allowed ,Focused on Email field and no require message ,Cypress ,Fail\n`, {flag:'a+'})                                

            cy.get(inputNume).clear().type('123456{enter}').should('have.value', '123456').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 5, Numbers are not allowed "R4du 3"`, () =>{
cy.writeFile(pathCSV, `5 ,Verify textbox Name ,Numbers are not allowed ,1)Click on Name field      2)Type R4du 3      3)Press Enter , 'R4du 3' ,Should be focused and have require message -Numbers are not allowed ,Focused on Email field and no require message ,Cypress ,Fail\n`, {flag:'a+'})                                 

            cy.get(inputNume).clear().type('R4du 3{enter}').should('have.value', 'R4du 3').and('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })  
        })

        it(`TC 6, Test valid data "Radu Mihail"`, () =>{
cy.writeFile(pathCSV, `6 ,Verify textbox Name ,Test valid data ,1)Click on Name field      2)Type Radu Mihail      3)Press Enter , 'Radu Mihail' ,Should be focused on Email field ,Focused on Email field ,Cypress ,Pass\n`, {flag:'a+'})                                   

            cy.get(inputNume).clear().type('Radu Mihail{enter}').should('have.value', 'Radu Mihail')
            cy.get(inputEmail).should('be.focus')
            
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
        }) 
    })

    context('Test scenario "Choose File" upload', () => {

        it('TC 7, Test Choose File validation', () => {
cy.writeFile(pathCSV, `7 ,Verify "Choose File" upload ,Test Choose File validation ,1)Click on Choose File      2)Select from fixtures photoS.jpg      3)Click Submit , 'photoS.jpg' ,Should upload file on click Submit ,File is not upload ,Cypress ,Fail\n`, {flag:'a+'})
           
            cy.get(inputNume).clear().type('Radu Mihail')
            cy.get(inputEmail).clear().type('test.Homework@gmail.com')
            cy.get(inputComment).clear().type('Lorem ipsum')

            cy.get('input[type="file"]').should('have.class', 'wpcf7-form-control wpcf7-file')
                .attachFile(filePath).should('contain.value','photoS.jpg')
            
            cy.get(inputSubmit).click()
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')

            cy.get('input[type="file"]').should('contain.value','photoS.jpg')          
        })
    })
})