const gitPathProject = 'C:/Users/Radu/Documents/GitHub/ProjectAssistHomework/cypress-framework/cypress';

const inputNume = '#g2599-name';
const inputEmail = '#g2599-email';
const inputAlert = 'button[onclick="myFunction()"]';
const inputComment = 'textarea[name="g2599-comment"]';
const inputSubmit = 'button[type="submit"]';

const pathCSV = `${gitPathProject}/fixtures/AssistHomework-ACS.csv`;

describe('Test Contact form "ALERT BOX : CLICK HERE" button', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "ALERT BOX : CLICK HERE" button validation', () => {

        it(`TC 1, All required fields are empty`, () =>{
cy.writeFile(pathCSV, `1 ,Verify "ALERT BOX : CLICK HERE" validation ,All required fields are empty ,1)Click on ALERT BOX : CLICK HERE ,  ,Alert and confirm message should be visible and name field should be focused ,Alert and confirm message is visible and name field is focused ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputAlert).click()

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
           
            cy.get(inputNume).should('be.focus')
        })

        it(`TC 2, Color button and hover color`, () =>{
cy.writeFile(pathCSV, `2 ,Verify "ALERT BOX : CLICK HERE" validation ,Color button and hover color ,1)hover ALERT BOX : CLICK HERE ,  ,Should have color rgb(68; 68; 68) and hover color rgb(7; 190; 229) ,Have color rgb(68; 68; 68) and hover color rgb(7; 190; 229) ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputAlert).should('have.css','background-color', 'rgb(68, 68, 68)')
                .and('contain.text', 'Alert Box : Click Here')
            cy.get(inputAlert).invoke('css', 'background-color', 'rgb(7, 190, 229)').trigger('mousedown')
                .should('have.css','background-color', 'rgb(7, 190, 229)').trigger('mouseleave')
        })
        
        it(`TC 3, All required fields are filled`, () =>{
cy.writeFile(pathCSV, `3 ,Verify "ALERT BOX : CLICK HERE" validation ,All required fields are filled ,1)Click on ALERT BOX : CLICK HERE ,  ,Alert and confirm message should be visible and new page should load ,Alert and confirm message is visible and new page is load ,Cypress ,Pass\n`, {flag:'a+'})         
      
            cy.get(inputNume).clear().type('Radu Mihail')
            cy.get(inputEmail).clear().type('test.Homework@gmail.com')
            cy.get(inputComment).clear().type('Lorem ipsum')
            
            cy.get(inputAlert).click()

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Good Luck. Go for it')
            })
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')
            })
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')

                cy.get('.contact-form-submission').find('p').eq(0).should('have.text', 'Name: Radu Mihail')
                cy.get('.contact-form-submission').find('p').eq(1).should('have.text', 'Email: test.Homework@gmail.com')
                cy.get('.contact-form-submission').find('p').eq(3).should('have.text', 'Experience (In Years): 0-1')
                cy.get('.contact-form-submission').find('p').eq(6).should('have.text', 'Comment: Lorem ipsum')
        })
    })
})

describe('Test Contact form "Comment field"', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "Comment" field with required fields empty', () => {

        it(`TC 4, Comment field cannot be empty ""`, () =>{
cy.writeFile(pathCSV, `4 ,Verify "Comment" field with required fields empty ,Comment field cannot be empty ,1)Click on Comment field      2)Click Submit , '' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputComment).clear().type('').should('have.value', '')
            cy.get(inputSubmit).click()
            cy.get(inputNume).should('have.value', '').and('be.focus')
        })

        it(`TC 5, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `5 ,Verify "Comment" field with required fields empty ,First character cannot be space ,1)Click on Comment field        2)Press space button       3)Click Submit , ' ' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputComment).clear().type(' ').should('have.value', ' ')
            cy.get(inputSubmit).click()
            cy.get(inputNume).should('have.value', '').and('be.focus')

        }) 

        it(`TC 6, Test valid data "Lorem ipsum"`, () =>{
cy.writeFile(pathCSV, `6 ,Verify "Comment" field with required fields empty ,Test valid data ,1)Click on Comment field       2)Type Lorem ipsum      3)Click on Submit , 'Lorem ipsum' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         
            
            cy.get(inputComment).clear().type('Lorem ipsum').should('have.value', 'Lorem ipsum')
            cy.get(inputSubmit).click()
            cy.get(inputNume).should('have.value', '').and('be.focus')
        })  
          
    })

    context('Test scenario "Comment" field with required fields filled', () => {
        before(() =>{
            cy.get(inputNume).clear().type("Radu Mihail")
            cy.get(inputEmail).clear().type("test.Homework@gmail.com")
        })

        it(`TC 7, Comment field to have required "true"`, () =>{
cy.writeFile(pathCSV, `7 ,Verify "Comment" field with required fields filled ,Comment field to have required true ,1)Automatic verification , ,Comment field should have "required aria true" ,Comment field have "required aria true" ,Cypress ,Pass\n`, {flag:'a+'})         
                        
            cy.get(inputComment).should('have.class', 'textarea')
            cy.get(inputComment).should('have.prop', 'ariaRequired', 'true').and('have.attr', 'required')
        })  

        it(`TC 8, Comment field cannot be empty ""`, () =>{
cy.writeFile(pathCSV, `8 ,Verify "Comment" field with required fields filled ,Comment field cannot be empty ,1)Click on Comment field      2)Click Submit , '' ,comment field should be focused and have require message -Please fill out this field ,Comment field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputComment).clear().type('').should('have.value', '')
            cy.get(inputSubmit).click()
            cy.get(inputComment).should('be.focus')
        })

        it(`TC 9, First character cannot be space " "`, () =>{
cy.writeFile(pathCSV, `9 ,Verify "Comment" field with required fields filled ,First character cannot be space ,1)Click on Comment field        2)Press space button       3)Click Submit , ' ' ,Error message should be visible -Comment is required ,Error message should be visible -Comment is required ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputComment).clear().type(' ').should('have.value', ' ')
            cy.get(inputSubmit).click()
            cy.get('div[class="form-error"]').should('be.visible')
        }) 

        it(`TC 10, Test valid comment "Lorem ipsum"`, () =>{
cy.writeFile(pathCSV, `10 ,Verify "Comment" field with required fields filled ,Test valid data ,1)Click on Comment field       2)Type Lorem ipsum      3)Click on Submit , 'Lorem ipsum' ,New page should be load with all required data filled ,New page is load with all required data filled ,Cypress ,Pass\n`, {flag:'a+'})         
            
            cy.get(inputComment).clear().type('Lorem ipsum').should('have.value', 'Lorem ipsum')
            cy.get(inputSubmit).click()
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')
                cy.get('.contact-form-submission').find('p').eq(6).should('have.text', 'Comment: Lorem ipsum')
        })      
    })
})

describe('Test Contact form "Submit" button', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "Submit" button validation', () => {

        it(`TC 11, All required fields are empty`, () =>{
cy.writeFile(pathCSV, `11 ,Verify "Submit" button validation ,All required fields are empty ,1)Click on Submit button ,  ,Name field should be focus and have require message -Please fill out this field ,Name field is focus and have require message -Please fill out this field ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputSubmit).click()

            cy.get(inputNume).should('be.focus')
        })

        it(`TC 12, Color button and hover color`, () =>{
cy.writeFile(pathCSV, `12 ,Verify "Submit" button validation ,Color button and hover color ,1)hover Submit button ,  ,Should have color rgb(68; 68; 68) and hover color rgb(7; 190; 229) ,Have color rgb(68; 68; 68) and hover color rgb(7; 190; 229) ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputSubmit).should('have.css','background-color', 'rgb(68, 68, 68)')
                .and('contain.text', 'Submit')
            cy.get(inputSubmit).invoke('css', 'background-color', 'rgb(7, 190, 229)').trigger('mouseover')
                .should('have.css','background-color', 'rgb(7, 190, 229)').trigger('mouseleave')
        })
        
        it(`TC 13, All required fields are filled`, () =>{
cy.writeFile(pathCSV, `13 ,Verify "Submit" button validation ,All required fields are filled ,1)Click on Submit button ,  ,New page should load with all required data filled ,New page is load with all required data filled ,Cypress ,Pass\n`, {flag:'a+'})         
      
            cy.get(inputNume).clear().type('Radu Mihail')
            cy.get(inputEmail).clear().type('test.Homework@gmail.com')
            cy.get(inputComment).clear().type('Lorem ipsum')
            
            cy.get(inputSubmit).click()
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')
                
                cy.get('.contact-form-submission').find('p').eq(0).should('have.text', 'Name: Radu Mihail')
                cy.get('.contact-form-submission').find('p').eq(1).should('have.text', 'Email: test.Homework@gmail.com')
                cy.get('.contact-form-submission').find('p').eq(3).should('have.text', 'Experience (In Years): 0-1')
                cy.get('.contact-form-submission').find('p').eq(6).should('have.text', 'Comment: Lorem ipsum')
        })
    })
})