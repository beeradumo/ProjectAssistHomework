
describe('Test the INTERACTION menu', () => {
    beforeEach(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')

        cy.get('div[id="nav_menu-6"]').find('li[id="menu-item-2806"]')
            .should('have.text', 'Sortable').find('a[href="https://www.globalsqa.com/demo-site/sorting/"]').click()
        cy.url().should('be.eq', 'https://www.globalsqa.com/demo-site/sorting/')

        Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, callback = () => {}) => {

            cy.log('Getting iframe body')
        
            return cy
                .wrap($iframe)
                .should(iframe => expect(iframe.contents().find('body')).to.exist)
                .then(iframe => cy.wrap(iframe.contents().find('body')))
                .within({}, callback)
    })
    })

    it.only('Sortable :: PORTLETS', () => {
        
        cy.get('li#Portlets').should('have.class', 'resp-tab-item resp-tab-active')
        .should('have.text', 'Portlets').and('have.attr', 'aria-controls', 'tab_item-0').click({force: true})
        cy.url().should('contain', '#Portlets')

        cy.get('iframe.demo-frame.lazyloaded', {timeout: 10 * 1000}).iframe(() => {
        
            cy.get('div[class="column ui-sortable"]').eq(0).as('firstList')

            cy.get('@firstList').should('contain', 'Feeds').and('contain', 'News')

                cy.get('div[class="portlet-header ui-sortable-handle ui-widget-header ui-corner-all"]').contains('Feeds')
                .should('have.text', 'Feeds').as('Feeds')
            
                cy.get('@Feeds')
                    .trigger('mousedown', { which: 1, pageX: 8, pageY: 8 })
                    .trigger('mousemove', { which: 1, pageX: 178, pageY: 8 })
                    .trigger('mouseup')

            cy.get('@firstList').should('not.contain', 'Feeds').and('contain', 'News')
            
            cy.get('div[class="column ui-sortable"]').eq(1).as('secondList') 

                cy.get('@secondList').should('contain', 'Feeds').and('contain', 'Shopping')

            cy.get('div[class="portlet-header ui-sortable-handle ui-widget-header ui-corner-all"]').contains('Shopping')
                .should('have.text', 'Shopping').as('Shopping')

                cy.get('@Shopping')
                    .trigger('mousedown', { which: 1, pageX: 178, pageY: 153 })
                    .trigger('mousemove', { which: 1, pageX: 8, pageY: 8 })
                    .trigger('mouseup')

            cy.get('@firstList').should('contain', 'Shopping').and('contain', 'News')
            cy.get('@secondList').should('contain', 'Feeds').and('not.contain', 'Shopping')
        })
        
    }) 

    it('Sortable :: MULTIPLE LISTS', () => {

        
    }) 

    it('Sortable :: SIMPLE LIST', () => {

        
    }) 

    it('Sortable :: GRID SORTING', () => {

        
    }) 
})