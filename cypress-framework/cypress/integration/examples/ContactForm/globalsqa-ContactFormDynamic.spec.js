
let InvalidDataN = require('E:/Automation Test/Cypress/cypress-framework/cypress/fixtures/dataName.json');
let InvalidDataC = require('E:/Automation Test/Cypress/cypress-framework/cypress/fixtures/dataComm.json');
let InvalidDataE = require('E:/Automation Test/Cypress/cypress-framework/cypress/fixtures/dataEmail.json');
let InvalidDataW = require('E:/Automation Test/Cypress/cypress-framework/cypress/fixtures/dataWebsite.json');

const pathCSV = 'E:/Automation Test/Cypress/cypress-framework/cypress/fixtures/AssistHomework-Dynamic.csv';
const filePath = 'photoS.jpg'

const inputNume = '#g2599-name';
const inputEmail = '#g2599-email';
const inputWeb = 'input[name="g2599-website"]';
const inputExperience = 'select[name="g2599-experienceinyears"]';
const inputExpertise = 'label[class="grunion-checkbox-multiple-label checkbox-multiple"]';
const inputEducation = 'label[class="grunion-radio-label radio"]';
const inputAlert = 'button[onclick="myFunction()"]';
const inputComment = 'textarea[name="g2599-comment"]';
const inputSubmit = 'button[type="submit"]';

const tooltipAlert = '.use-floating-validation-tip';


describe('Test Contact form', () => {
    before(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    })

   context('Test scenario "textbox Name"',() =>{
        InvalidDataN.forEach((testCases) => {
                const data = {
                    id: testCases.id,
                    nume: testCases.nume,
                    testCase: testCases.testCase,
                    expected: testCases.expected
                };
                const ValidateName = (names) => {
                    var re = /^[a-zA-Z]+(([-][a-zA-Z\s])?[a-zA-Z\s]*)*\b$/;
                    return re.test(names)
                };
                const NameState = ValidateName(data.nume)

            it(`TC ${data.id}, Test values "${data.nume}" - ${NameState}`, () => {   
                
                cy.get(inputNume).should('have.class', 'name').should('have.attr', 'value')
                cy.get(inputNume).should('have.prop', 'ariaRequired', 'true').should('have.attr', 'required')

                cy.get(inputNume).clear().type(`${data.nume}{enter}`)
                .should('have.value', data.nume)

                //  cy.window().then(win => {
                //  const tooltip = win.wpcf7.notValidTip()
                //  cy.get(tooltip).should('be.visible')
                // }) 
             
                //cy.window().get(tooltipAlert).find('span[role="alert"]').should('be.visible')

    cy.writeFile(pathCSV, `${data.id}, Verify textbox Name, ${data.testCase},1)Click on Name field      2)Type values automatic     3)Press Enter, '${data.nume}', ${data.expected}, Is ${NameState}, Cypress,  \n`, {flag:'a+'})

            })
        })
    })

     context('Test scenario "textbox Email"',() =>{

        InvalidDataE.forEach((testCases) => {
                const data = {
                    id: testCases.id+10,
                    email: testCases.email,
                    testCase: testCases.testCase,
                    expected: testCases.expected
                };                 
                const validateEmail = (emails) => {
                    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})\b$/;
                    return re.test(emails);
                };  

                const EmailState = validateEmail(data.email)

            it(`TC ${data.id}, Test values "${data.email}" - ${EmailState}`, () => {                  

                cy.get(inputEmail)
                    .invoke('attr', 'type', 'text')
                    .should('have.attr', 'type', 'text') 

                cy.get(inputEmail).should('have.class', 'email')
                .and('have.prop', 'ariaRequired', 'true').and('have.attr', 'required')

                cy.get(inputEmail).clear().type(`${data.email}{enter}`)
                    .should('have.value', data.email)   

                  //cy.get('.contact-form').find('input').eq(1).should('be.focus')  
                    
                  cy.writeFile(pathCSV, `${data.id}, Verify textbox Email, ${data.testCase},1)Click on Email field      2)Type values automatic     3)Press Enter, '${data.email}', ${!!data.expected}, Is ${EmailState}, Cypress,  \n`, {flag:'a+'})
            })
        })
    })

    context('Test scenario "textbox Website"',() =>{
        InvalidDataW.forEach((testCases) => {
                const data = {
                    id: testCases.id+23,
                    website: testCases.website,
                    testCase: testCases.testCase,
                    expected: testCases.expected
                };  
                const validateURL = (urls) => {
                    var re = /(https?:\/\/)(www\.)([a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,3})(\/[a-zA-Z0-9@:%_\/+.~#?&=]*)?/;
                    return re.test(urls);
                };
                const WebState = validateURL(data.website)

            it(`Test case ${data.id}, Test values "${data.website}" to be true - ${WebState}`, () => {                  

                cy.get(inputWeb)
                    .invoke('attr', 'type', 'text')
                    .should('have.attr', 'type', 'text')

                cy.get(inputWeb).should('have.class', 'url').should('have.attr', 'value')
                cy.get(inputWeb).clear().type(`${data.website}{enter}`)
                .should('have.value', data.website)

    cy.writeFile(pathCSV, `${data.id}, Verify textbox Website, ${data.testCase},1)Click on Website field      2)Type values automatic     3)Press Enter, '${data.website}', ${data.expected}, Is ${WebState}, Cypress,  \n`, {flag:'a+'})            
            })
        })
    })

    context('Test scenario Select "Experence in year"',() =>{

            it(`Test case 36, Test values in select option to be true `, () => {                  

                cy.get(inputExperience).should('have.class', 'select')
                .should('have.prop', 'ariaRequired', 'true').should('have.attr', 'required')
               
                cy.get(inputExperience).find('option').then(options => {
                    const actual = [...options].map(o => o.value)
                    expect(actual).to.deep.eq(['0-1', '1-3', '3-5', '5-7', '7-10', '10+'])
                    console.log(actual)  
                        const actualCSV = actual.join('; ')

    cy.writeFile(pathCSV, `36, Select "Experence in year", Values in select option to be equals ,1)Click on select option automatic, '${actualCSV}', Values should be equal, Values are equal, Cypress, pass \n`, {flag:'a+'})
                            
                })

        })   
    })

    context('Test scenario "checkbox Expertise"',() =>{

        it('Test case 37, Test values in checkbox to be true', () => {                  

            cy.get('input[type="checkbox"]').should('have.class', 'checkbox-multiple')
            .check(['Manual Testing','Automation Testing', 'Functional Testing']).uncheck('Automation Testing')

            cy.get(inputExpertise).find('input[type="checkbox"]').then(check => {
                const actual = [...check].map(o => o.value)
                expect(actual).to.deep.eq(['Functional Testing', 'Automation Testing', 'Manual Testing'])
                console.log(actual)
                    const actualCSV = actual.join("; ")

    cy.writeFile(pathCSV, `37, Verify checkbox "Expertise", Values in checkbox option to be equals ,1)Click on checkbox option automatic, '${actualCSV}', Values should be equal, Values are equal, Cypress, pass \n`, {flag:'a+'})            
            })
        })   
    })

    context('Test scenario "radio label Education"',() =>{

        it('Test case 38, Test values in radio label to be true', () => {                  

            cy.get('input[type="radio"]').should('have.class', 'radio')
            .check(['Graduate', 'Post Graduate', 'Other']).check('Post Graduate')

            cy.get(inputEducation).find('input[type="radio"]').then(radio => {
                const actual = [...radio].map(o => o.value)
                expect(actual).to.deep.eq(['Graduate', 'Post Graduate', 'Other'])
                console.log(actual)
                    const actualCSV = actual.join("; ")

    cy.writeFile(pathCSV, `38, Verify radio label "Expertise", Values in radio label option to be equals ,1)Click on radio label option automatic, '${actualCSV}', Values should be equal, Values are equal, Cypress, pass \n`, {flag:'a+'})
            })
        })   
    })

    context('Test scenario "button ALERT BOX : CLICK HERE"',() =>{

        it('Test case 39, Test functionality button ALERT BOX : grey button', () => {                  
            cy.get(inputAlert).should('have.css','background-color', 'rgb(68, 68, 68)')
                .should('contain.text', 'Alert Box : Click Here')

    cy.writeFile(pathCSV, `39, Verify button ALERT BOX, Verify color grey on button ALERT BOX,1)Open the webpage ,  , The button color should be rgb(68; 68; 68), The button color is rgb(68; 68; 68), Cypress, pass  \n`, {flag:'a+'})                 
        })
        
        it('Test case 40, Test functionality button ALERT BOX : hover color', () => {
            cy.get(inputAlert).invoke('css', 'background-color', 'rgb(7, 190, 229)').trigger('mouseover')
                .should('have.css','background-color', 'rgb(7, 190, 229)').trigger('mouseleave')
    
    cy.writeFile(pathCSV, `40, Verify button ALERT BOX, Verify hover color on button ALERT BOX,1)Open the webpage        2)Hover mouse on,  , The hover color should be rgb(7; 190; 229), The hover color is rgb(7; 190; 229), Cypress, pass \n`, {flag:'a+'})            
        })

        it('Test case 41, Test functionality button ALERT BOX : Confirm message', () => { 
            cy.get(inputAlert).click()
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Do you really fill rest of the form?')

    cy.writeFile(pathCSV, `41, Verify button ALERT BOX, Verify confirm on button ALERT BOX,1)Open the webpage        2)Click on button,  ,The confirm message -${str} should be visible, The confirm message -${str} is visible, Cypress, pass \n`, {flag:'a+'})               
            })
        }) 
           
        it('Test case 42, Test functionality button ALERT BOX : Alert message', () => { 
            cy.get(inputAlert).click()
            cy.on('window:alert', (str) => {
                 expect(str).to.equal('Good Luck. Go for it')

    cy.writeFile(pathCSV, `42, Verify button ALERT BOX, Verify alert on button ALERT BOX,1)Open the webpage        2)Click on button,  ,The alert message -${str} should be visible, The message alert -${str} is visible, Cypress, pass \n`, {flag:'a+'})            
             })
        })
               
    })

    context('Test scenario "textbox Comment"',() =>{
        InvalidDataC.forEach((testCases) => {
                const data = {
                    id: testCases.id+42,
                    comment: testCases.comment,
                    testCase: testCases.testCase,
                    expected: testCases.expected
                };
                const ValidateComm = (comments) => {
                    var re = /(?!\W*$)(?=[ .\w]\w*\W*$).*$/;
                    return re.test(comments)
                };
                const CommentState = ValidateComm(data.comment)

            it(`Test case ${data.id}, Test values "${data.comment}" to be true - ${CommentState}`, () => {   
                
                cy.get(inputComment).should('have.class', 'textarea')
                cy.get(inputComment).should('have.prop', 'ariaRequired', 'true').and('have.attr', 'required')

                cy.get(inputComment).clear().type(data.comment)
                .should('have.value', data.comment)   
                
    cy.writeFile(pathCSV, `${data.id}, Verify textbox Comment, ${data.testCase},1)Click on Comment field     2)Type values automatic     3)Press Enter, '${data.comment}', ${data.expected}, Is ${CommentState}, Cypress,  \n`, {flag:'a+'})
            })
        })
    })

    context('Test scenario "button SUBMIT"',() =>{

        it('Test case 47, Test functionality button SUBMIT grey color', () => {                               
            cy.get(inputSubmit).should('have.css','background-color', 'rgb(68, 68, 68)')
                .should('contain.text', 'Submit')
    
    cy.writeFile(pathCSV, `47, Verify button SUBMIT, Verify color grey on button Submit ,1)Open the webpage ,  , The button color should be rgb(68; 68; 68), The button color is rgb(68; 68; 68), Cypress, pass  \n`, {flag:'a+'})                 
        })
            
        it('Test case 48, Test functionality button SUBMIT hover color', () => {
            cy.get(inputSubmit).invoke('css', 'background-color', 'rgb(7, 190, 229)').trigger('mouseover')
                .should('have.css','background-color', 'rgb(7, 190, 229)').trigger('mouseleave')
        
    cy.writeFile(pathCSV, `48, Verify button SUBMIT, Verify hover color on button Submit ,1)Open the webpage        2)Hover mouse on,  , The hover color should be rgb(7; 190; 229), The hover color is rgb(7; 190; 229), Cypress, pass \n`, {flag:'a+'})            
        })

        it('Test case 49, Test functionality button SUBMIT contact form', () => {
            cy.get(inputSubmit).click()
                cy.url().should('contain', 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b')
   
    cy.writeFile(pathCSV, `49, Verify button SUBMIT, Verify Submit link for form ,1)Open the webpage        2)Click on Submit,  ,The link should contain 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b', The link contain 'contact-form-hash=7451d6322607909818ec6641508a0315d590839b', Cypress, pass \n`, {flag:'a+'})            
        }) 

        it('Test case 50, Test functionality button SUBMIT hover color', () => {
                cy.get('a[href*="/samplepagetest/?contact-form-hash=7451d6322607909818ec6641508a0315d590839b"]').click()
                cy.url().should('be.eq','https://www.globalsqa.com/samplepagetest/?contact-form-hash=7451d6322607909818ec6641508a0315d590839b')        
    
    cy.writeFile(pathCSV, `50, Verify button back to form, Verify the link for back to form ,1)Open the webpage        2)Click on Submit      3)Click on link Back,  ,The link should be 'https://www.globalsqa.com/samplepagetest/?contact-form-hash=7451d6322607909818ec6641508a0315d590839b', The link is 'https://www.globalsqa.com/samplepagetest/?contact-form-hash=7451d6322607909818ec6641508a0315d590839b', Cypress, pass \n`, {flag:'a+'})                    
        }) 
    })

    context('Test scenario "Choose File" upload',() =>{
        
        it(`TC 51, Test values "upload photo"`, () => {

    cy.writeFile(pathCSV, `51, Verify Choose File upload, Choose File validation ,1)Click on Choose File      2)Select from fixtures photoS.jpg      3)Click Submit , 'photoS.jpg' ,Should upload file on click Submit ,File is not upload ,Cypress ,Fail\n`, {flag:'a+'})

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


