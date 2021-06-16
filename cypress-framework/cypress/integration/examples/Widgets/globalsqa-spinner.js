const gitPathProject = 'C:/Users/Radu/Documents/GitHub/ProjectAssistHomework/cypress-framework/cypress';

const pathCSV = `${gitPathProject}/integration/examples/Widgets/Spinner.csv`;

describe('Test the WIDGETS menu', () => {
    beforeEach(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')

        cy.get('div[id="nav_menu-8"]').find('li[id="menu-item-2813"]')
            .should('have.text', 'Spinner').find('a[href="https://www.globalsqa.com/demo-site/spinner/"]').click({force: true})
        cy.url().should('be.eq', 'https://www.globalsqa.com/demo-site/spinner/')

        Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, callback = () => {}) => {
            // For more info on targeting inside iframes refer to this GitHub issue:
            // https://github.com/cypress-io/cypress/issues/136
            cy.log('Getting iframe body')
        
            return cy
                .wrap($iframe)
                .should(iframe => expect(iframe.contents().find('body')).to.exist)
                .then(iframe => cy.wrap(iframe.contents().find('body')))
                .within({}, callback)
        })
    })

    

    it('SPINNER :: Currency', () => {
        cy.get('li#Currency').should('have.class', 'resp-tab-item resp-tab-active')
            .should('have.text', 'Currency').and('have.attr', 'aria-controls', 'tab_item-0').click({force: true})
            cy.url().should('contain', '#Currency')
cy.writeFile(pathCSV, `1 ,Verify "Currency" tab active ,Testing "Currency" tab to have blue line ,1)Click on Currency tab , 'https://www.globalsqa.com/demo-site/spinner/#Currency' ,Currency tab should have a blue line and show iframe for currency ,Currency tab have a blue line and show iframe for currency ,Cypress ,Pass\n`, {flag:'a+'})

        cy.get('iframe.demo-frame.lazyloaded', {timeout: 10 * 1000}).iframe(() => {

            cy.get('p').eq(0).find('input#spinner')
                .should('have.value', '$5.00').should('have.class', 'ui-spinner-input')
                .should('have.attr', 'aria-valuemin', 5).should('have.attr', 'aria-valuenow', 5).and('have.attr','aria-valuemax', 2500)
cy.writeFile(pathCSV, `2 ,Verify "Amount to donate" field ,Default amount need to be $5.00 ,1)Click on Currency tab ,  ,Amount to donate field shoud have default $5.00 ,Amount to donate field have default $5.00 ,Cypress ,Pass\n`, {flag:'a+'})
                    
                cy.get('p').eq(1).find('select#currency').select('en-US').should('contain.text', 'US $')
cy.writeFile(pathCSV, `3 ,Verify "Currency to donate" field ,Default value need to be US $ ,1)Click on Currency tab ,  ,Currency to donate field shoud have default US $ ,Currency to donate field have default US $ ,Cypress ,Pass\n`, {flag:'a+'})

                cy.get('a[class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only"]')
                .should('have.class', 'ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only').click({force: true})
cy.writeFile(pathCSV, `4 ,Verify "Increase arrow" field ,Up arrow need to increase by 25.00 ,1)Click on Up arrow ,  ,Amount to donate field shoud be increased by 25 ,Amount to donate field is increased by 25 ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(1).find('select#currency').select('de-DE').should('contain.text', 'EUR €')
cy.writeFile(pathCSV, `5 ,Verify "Currency to donate" field ,Select de-DE need to have value EUR € ,1)Click on Currency select       2)Click on EUR € ,  ,Currency to donate field shoud have value EUR € ,Currency to donate field have value EUR € ,Cypress ,Pass\n`, {flag:'a+'})

                cy.get('p').eq(0).find('input#spinner')
                    .should('have.value', '30,00 €').should('have.class', 'ui-spinner-input')
                    .should('have.attr', 'aria-valuemin', 5).should('have.attr', 'aria-valuenow', 30).and('have.attr','aria-valuemax', 2500)
cy.writeFile(pathCSV, `6 ,Verify "Amount to donate" field ,Amount value need to be 30.00 € ,1)Click on Currency select       2)Click on EUR € ,  ,Amount to donate field shoud have value 30.00 € ,Amount to donate field have value 30.00 € ,Cypress ,Pass\n`, {flag:'a+'})
 
                cy.get('a[class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only"]')
                .should('have.class', 'ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only').click({force: true})
cy.writeFile(pathCSV, `7 ,Verify "Increase arrow" field ,Up arrow need to increase by 25.00 ,1)Click on Up arrow ,  ,Amount to donate field shoud be increased by 25 ,Amount to donate field is increased by 25 ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(1).find('select#currency').select('ja-JP').should('contain.text', 'YEN ¥')
cy.writeFile(pathCSV, `8 ,Verify "Currency to donate" field ,Select ja-JP need to have value YEN ¥ ,1)Click on Currency select       2)Click on YEN ¥ ,  ,Currency to donate field shoud have value YEN ¥ ,Currency to donate field have value YEN ¥ ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(0).find('input#spinner')
                    .should('have.value', '¥55').should('have.class', 'ui-spinner-input')
                    .should('have.attr', 'aria-valuemin', 5).should('have.attr', 'aria-valuenow', 55).and('have.attr','aria-valuemax', 2500)
cy.writeFile(pathCSV, `9 ,Verify "Amount to donate" field ,Amount value need to be ¥55 ,1)Click on Currency select       2)Click on YEN ¥ ,  ,Amount to donate field shoud have value ¥55 ,Amount to donate field have value ¥55 ,Cypress ,Pass\n`, {flag:'a+'})
 
                cy.get('a[class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only"]')
                .should('have.class', 'ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only').click({force: true})
cy.writeFile(pathCSV, `10 ,Verify "Decrease arrow" field ,Down arrow need to Decrease by 25.00 ,1)Click on Down arrow ,  ,Amount to donate field shoud decrease by 25 ,Amount to donate field is ecreased by 25 ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(1).find('select#currency').select('en-US').should('contain.text', 'US $')
cy.writeFile(pathCSV, `11 ,Verify "Currency to donate" field ,Select en-US need to have value US $ ,1)Click on Currency select       2)Click on US $ ,  ,Currency to donate field shoud have value US $ ,Currency to donate field have value US $ ,Cypress ,Pass\n`, {flag:'a+'})

                cy.get('p').eq(0).find('input#spinner')
                    .should('have.value', '$30.00').should('have.class', 'ui-spinner-input')
                    .should('have.attr', 'aria-valuemin', 5).should('have.attr', 'aria-valuenow', 30).and('have.attr','aria-valuemax', 2500)
cy.writeFile(pathCSV, `12 ,Verify "Amount to donate" field ,Amount value need to be $30.00 ,1)Click on Currency select       2)Click on US $ ,  ,Amount to donate field shoud have value $30.00 ,Amount to donate field have value $30.00 ,Cypress ,Pass\n`, {flag:'a+'})

        })
    }) 

    it('SPINNER :: Simple Spinner', () => {

        cy.get('li[id="Simple Spinner"]').click({force: true}).should('have.class', 'resp-tab-item resp-tab-active')
            .and('have.attr', 'aria-controls', 'tab_item-1')
            cy.url().should('contain', '#Simple%20Spinner')
cy.writeFile(pathCSV, `13 ,Verify "Simple Spinner" tab active ,Testing "Simple Spinner" tab to have blue line ,1)Click on Simple Spinner tab , 'https://www.globalsqa.com/demo-site/spinner/#Simple%20Spinner' ,Simple Spinner tab should have a blue line and show iframe for Simple Spinner ,Simple Spinner tab have a blue line and show iframe for Simple Spinner ,Cypress ,Pass\n`, {flag:'a+'})

        cy.get('div[aria-labelledby="tab_item-1"]').should('have.class', 'single_tab_div resp-tab-content resp-tab-content-active')
            .and('have.attr', 'rel-title', 'Simple Spinner')
            
        cy.get('iframe.demo-frame.lazyloaded', {timeout: 10 * 1000}).iframe(() => {
            cy.wait(2000)
            cy.get('input#spinner[name="value"]')
                .should('have.attr', 'name', 'value')
                .should('have.class', 'ui-spinner-input')
                .and('have.value', '')

cy.writeFile(pathCSV, `14 ,Verify "Select a value" field ,Testing "Select a value" to be default '' ,1)Click on Simple Spinner tab , 'https://www.globalsqa.com/demo-site/spinner/#Simple%20Spinner' ,Select a value field should have default value '' ,Select a value field have default value '' ,Cypress ,Pass\n`, {flag:'a+'})
            
                cy.get('a[class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only"]')
                .should('have.class', 'ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only').click({force: true})

            cy.get('p').eq(0).find('input#spinner.ui-spinner-input')
                .should('have.class', 'ui-spinner-input').should('have.value', 1)
                .and('have.attr', 'aria-valuenow', 1)
cy.writeFile(pathCSV, `15 ,Verify "Increase arrow" field ,Up arrow need to increase "Select a value" field by 1 ,1)Click on Up arrow ,  ,Select a value field shoud be increase by 1 ,Select a value field is increased by 1 ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(1).find('button#disable').contains('Toggle disable/enable')
                .should('have.class', 'ui-button ui-corner-all ui-widget')
                .and('have.text', 'Toggle disable/enable').click({force: true})

                cy.get('p').eq(0).find('input#spinner.ui-spinner-input').should('be.disabled')
                    .and('have.attr', 'disabled')

            cy.get('p').eq(1).find('button#disable').contains('Toggle disable/enable').click({force: true})
                cy.get('input#spinner.ui-spinner-input').should('not.have.attr', 'disabled')
cy.writeFile(pathCSV, `16 ,Verify "Toggle disable/enable" button ,Need to disable or enable "Select a value" field ,1)Click on Toggle disable/enable button         2)Click on Toggle disable/enable button,  ,Select a value field shoud be disable and after enable ,Select a value field is disable and after enable ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(1).find('button#destroy').contains('Toggle widget')
                .should('have.class', 'ui-button ui-corner-all ui-widget')
                .and('have.text', 'Toggle widget').click({force: true})

                cy.get('p').eq(0).find('input#spinner').should('have.value', 1).clear().type('7').should('have.value', 7)
                    .should('have.attr', 'name', 'value')
                    .should('not.have.class', 'ui-spinner-input' )
                    .and('not.have.attr', 'aria-valuenow')
cy.writeFile(pathCSV, `17 ,Verify "Toggle widget" button ,Toggle "Select a value" field to a textbox field ,1)Click on Toggle widget button         2)Type 7, '7' ,Select a value field should be a textbox with value '7' ,Select a value field is a textbox with value '7' ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(1).find('button#destroy').contains('Toggle widget')
                .should('have.class', 'ui-button ui-corner-all ui-widget')
                .and('have.text', 'Toggle widget').click({force: true})

                cy.get('p').eq(0).find('input#spinner.ui-spinner-input')
                    .should('have.class', 'ui-spinner-input').should('have.value', 7)
                    .and('have.attr', 'aria-valuenow', 7)
cy.writeFile(pathCSV, `18 ,Verify "Toggle widget" button ,Toggle "Select a value" field from textbox field ,1)Click on Toggle widget button ,  ,Select a value field should toggle from textbox ,Select a value field is toggle from textbox ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(2).find('button#setvalue').contains('Set value to 5')
                .should('have.class', 'ui-button ui-corner-all ui-widget')
                .and('have.text', 'Set value to 5').click()

                cy.get('p').eq(0).find('input#spinner.ui-spinner-input')
                    .should('have.class', 'ui-spinner-input').should('have.value', 5)
                    .and('have.attr', 'aria-valuenow', 5)
cy.writeFile(pathCSV, `19 ,Verify "Set value to 5" button ,"Select a value" field need to set value to 5 ,1)Click on Set value to 5 button , '5' ,Select a value field should have set value to 5 ,Select a value field have set value to 5 ,Cypress ,Pass\n`, {flag:'a+'})

                cy.get('a[class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only"]')
                .should('have.class', 'ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only').dblclick({force: true})

            cy.get('p').eq(0).find('input#spinner.ui-spinner-input')
                .should('have.class', 'ui-spinner-input').should('have.value', 3)
                .and('have.attr', 'aria-valuenow', 3)
cy.writeFile(pathCSV, `20 ,Verify "Decrease arrow" field ,Down arrow need to decrease "Select a value" field by 1 ,1)Click on Down arrow         2)Click on Down arrow , '3' ,Select a value field shoud be decrease by 1 ,Select a value field is decreased by 1 ,Cypress ,Pass\n`, {flag:'a+'})

            cy.get('p').eq(2).find('button#getvalue').contains('Get value')
                .should('have.class', 'ui-button ui-corner-all ui-widget')
                .and('have.text', 'Get value').click()    
            })

            cy.on('window:alert', (str) => {
                expect(str).to.be.equal('3')
            })
cy.writeFile(pathCSV, `21 ,Verify "Get value" button ,Window alert with value from "Select a value" field ,1)Click on Get value button , '3' ,Window alert with value from Select a value field shoud be visible ,Window alert with value from Select a value field is be visible ,Cypress ,Pass\n`, {flag:'a+'})
           
        })
    }) 

