const gitPathProject = 'C:/Users/Radu/Documents/GitHub/ProjectAssistHomework/cypress-framework/cypress';

const inputNume = '#g2599-name';
const inputEmail = '#g2599-email';
const inputExperience = 'select[name="g2599-experienceinyears"]';
const inputExpertise = 'label[class="grunion-checkbox-multiple-label checkbox-multiple"]';
const inputEducation = 'label[class="grunion-radio-label radio"]';
const inputComment = 'textarea[name="g2599-comment"]';
const inputSubmit = 'button[type="submit"]';

const pathCSV = `${gitPathProject}/fixtures/AssistHomework-EEE.csv`;

describe('Test Contact form "Experience select"', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "Experience select" focus', () => {

        it(`TC 1, All required fields are empty`, () =>{
cy.writeFile(pathCSV, `1 ,Verify Experience select focus on Name field ,All required fields are empty ,1)Click on Experience field      2)Select 1-3      3)Click on Submit, '1-3' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get(inputExperience).should('have.class', 'select')
                .should('have.prop', 'ariaRequired', 'true').should('have.attr', 'required')

            cy.get(inputExperience).select('1-3').should('have.value', '1-3')
            cy.get(inputSubmit).click()
            cy.get(inputNume).should('be.focus')

        })

        it(`TC 2, Verify option text to be equal with option value`, () =>{

            cy.get(inputExperience).should('have.class', 'select')
            .should('have.prop', 'ariaRequired', 'true').should('have.attr', 'required')
            
            cy.get(inputExperience).find('option').then(options => {
                const actual = [...options].map(o => o.value)
                expect(actual).to.deep.eq(['0-1', '1-3', '3-5', '5-7', '7-10', '10+'])
                console.log(actual)  
                    const actualCSV = actual.join('; ')

cy.writeFile(pathCSV, `2 ,Verify Experience select values, Verify option text to be equal with option value ,1)Click on Experience field      2)Automatic verification , '${actualCSV}' ,All options text should be equal with option values ,All options text are equal with option values ,Cypress ,Pass\n`, {flag:'a+'})                       
            })
        })
        
        it(`TC 3, All required fields are filled`, () =>{
cy.writeFile(pathCSV, `3 ,Verify Experience select validation ,All required fields are filled ,1)Click on Experience field      2)Select 5-7      3)Click on Submit, '5-7' ,New page should be load with required data filled ,New page is load with required data filled ,Cypress ,Pass\n`, {flag:'a+'})         
                        
            cy.get(inputExperience).should('have.class', 'select')
                .should('have.prop', 'ariaRequired', 'true').should('have.attr', 'required')
                        
            cy.get(inputNume).clear().type('Radu Mihail')
            cy.get(inputEmail).clear().type('test.Homework@gmail.com')
            cy.get(inputComment).clear().type('Lorem ipsum')
            
            cy.get(inputExperience).select('5-7').should('have.value', '5-7')
            cy.get(inputSubmit).click()
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')
            
            cy.get('.contact-form-submission').find('p').eq(3).should('have.text', 'Experience (In Years): 5-7')
        })
    })
})

describe('Test Contact form "Expertise checkbox"', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "Expertise checkbox" focus', () => {

        it(`TC 4, All required fields are empty`, () =>{
cy.writeFile(pathCSV, `4 ,Verify Expertise checkbox focus on Name field ,All required fields are empty ,1)Check Functional Testing      2)Check Manual Testing      3)Click on Submit, 'Functional Testing'; 'Manual Testing' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get('input[type="checkbox"]').should('have.class', 'checkbox-multiple')
                .check('Functional Testing')
                .should('have.value', 'Functional Testing').uncheck()

            cy.get(inputSubmit).click()
            cy.get(inputNume).should('be.focus')

        })

        it(`TC 5, Verify checkbox text to be equal with checkbox value`, () =>{

            cy.get('input[type="checkbox"]').should('have.class', 'checkbox-multiple')

            cy.get(inputExpertise).find('input[type="checkbox"]').then(check => {
                const actual = [...check].map(o => o.value)
                expect(actual).to.deep.eq(['Functional Testing', 'Automation Testing', 'Manual Testing'])
                console.log(actual)
                    const actualCSV = actual.join("; ")

cy.writeFile(pathCSV, `5 ,Verify Expertise checkbox values, Verify checkbox text to be equal with checkbox value ,1)Automatic verification , '${actualCSV}' ,All checkbox text should be equal with checkbox values ,All checkbox text are equal with checkbox values ,Cypress ,Pass\n`, {flag:'a+'})                       
            })
        }) 

        it(`TC 6, All required fields are filled`, () =>{
cy.writeFile(pathCSV, `6 ,Verify Expertise checkbox validation ,All required fields are filled ,1)Check Manual Testing      2)Click on Submit , 'Manual Testing' ,New page should be load with required data filled ,New page is load with required data filled ,Cypress ,Pass\n`, {flag:'a+'})         
            
            cy.get(inputExpertise).should('have.class', 'checkbox-multiple')
    
            cy.get(inputNume).clear().type('Radu Mihail')
            cy.get(inputEmail).clear().type('test.Homework@gmail.com')
            cy.get(inputComment).clear().type('Lorem ipsum')
            
            cy.get(inputExpertise).find('input[type="checkbox"]').check('Manual Testing')
                .should('have.value', 'Manual Testing')
            cy.get(inputExpertise).find('input[type="checkbox"]').check('Automation Testing')
                .should('have.value', 'Automation Testing')

            cy.get(inputSubmit).click()
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')

                cy.get('.contact-form-submission').find('p').eq(4).should('have.text', 'Expertise :: Automation Testing, Manual Testing')
        })    
    })
})

describe('Test Contact form "Education radio button"', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

    context('Test scenario "Education radio label" focus', () => {

        it(`TC 7, All required fields are empty`, () =>{
cy.writeFile(pathCSV, `7 ,Verify Education radio label focus on Name field ,All required fields are empty ,1)Click on radio label Graduate      2)Click on Submit, 'Graduate' ,Name field should be focused and have require message -Please fill out this field ,Name field is focused and have require message -Please fill out this field. ,Cypress ,Pass\n`, {flag:'a+'})         

            cy.get('input[type="radio"]').should('have.class', 'radio')
            .check('Graduate').should('have.value', 'Graduate')

            cy.get(inputSubmit).click()
            cy.get(inputNume).should('be.focus')

        })

        it(`TC 8, Verify radio text to be equal with radio label value`, () =>{

            cy.get('input[type="radio"]').should('have.class', 'radio')
            cy.get(inputEducation).find('input[type="radio"]').then(radio => {
                const actual = [...radio].map(o => o.value)
                expect(actual).to.deep.eq(['Graduate', 'Post Graduate', 'Other'])
                console.log(actual)
                    const actualCSV = actual.join("; ")

cy.writeFile(pathCSV, `8 ,Verify Education radio label values, Verify radio text to be equal with radio label value ,1)Automatic verification , '${actualCSV}' ,All radio text should be equal with radio label values ,All radio text are equal with radio label values ,Cypress ,Pass\n`, {flag:'a+'})                       
            })
        })
        
        it(`TC 9, All required fields are filled`, () =>{
cy.writeFile(pathCSV, `9 ,Verify Education radio label validation ,All required fields are filled ,1)Select Post Graduate      2)Click on Submit, 'Post Graduate' ,New page should be load with required data filled ,New page is load with required data filled ,Cypress ,Pass\n`, {flag:'a+'})         
                                  
            cy.get(inputNume).clear().type('Radu Mihail')
            cy.get(inputEmail).clear().type('test.Homework@gmail.com')
            cy.get(inputComment).clear().type('Lorem ipsum')
            
            cy.get('input[type="radio"]').should('have.class', 'radio')
            .check('Post Graduate').should('have.value', 'Post Graduate')

            cy.get(inputSubmit).click()
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')
            
            cy.get('.contact-form-submission').find('p').eq(5).should('have.text', 'Education: Post Graduate')
        })
    })
})