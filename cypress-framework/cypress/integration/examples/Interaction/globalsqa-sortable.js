
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

    it('Sortable :: PORTLETS', () => {
        
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

        cy.get('li[id="Multiple Lists"]')
        .contains('Multiple Lists').click({force: true})
        .should('have.class', 'resp-tab-item resp-tab-active')
        .and('have.attr', 'aria-controls', 'tab_item-1')

        cy.url().should('contain', '#Multiple%20Lists')

            cy.get('iframe.demo-frame.lazyloaded', {timeout: 10 * 1000}).iframe(() => {
                cy.wait(2000)
                cy.get('ul#sortable1').should('have.class', 'connectedSortable ui-sortable').as('sortable1')
                
                cy.get('@sortable1').find('li').should('have.class', 'ui-state-default ui-sortable-handle').should('have.length', 5)

                cy.get('@sortable1').find('li').contains('Item 1').as('item11')
                cy.get('@sortable1').find('li').contains('Item 2').as('item21')
                cy.get('@sortable1').find('li').contains('Item 3').as('item31')
                cy.get('@sortable1').find('li').contains('Item 4').as('item41')
                cy.get('@sortable1').find('li').contains('Item 5').as('item51')

                cy.get('ul#sortable2').should('have.class', 'connectedSortable ui-sortable').as('sortable2')

                cy.get('@sortable2').find('li').should('have.class', 'ui-state-highlight ui-sortable-handle').and('have.length', 5)

                cy.get('@sortable2').find('li').contains('Item 1').as('item12')
                cy.get('@sortable2').find('li').contains('Item 2').as('item22')
                cy.get('@sortable2').find('li').contains('Item 3').as('item32')
                cy.get('@sortable2').find('li').contains('Item 4').as('item42')
                cy.get('@sortable2').find('li').contains('Item 5').as('item52')

                cy.get('@item11')
                    .trigger('mousedown', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mousemove', { which: 1, pageX: 163, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 4)
                        cy.get('@sortable2').find('li').should('have.length', 6)
                cy.get('@item21')
                    .trigger('mousedown', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mousemove', { which: 1, pageX: 163, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 3)
                        cy.get('@sortable2').find('li').should('have.length', 7)
                cy.get('@item31')
                    .trigger('mousedown', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mousemove', { which: 1, pageX: 163, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 2)
                        cy.get('@sortable2').find('li').should('have.length', 8)
                cy.get('@item41')
                    .trigger('mousedown', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mousemove', { which: 1, pageX: 163, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 1)
                        cy.get('@sortable2').find('li').should('have.length', 9)
                cy.get('@item51')
                    .trigger('mousedown', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mousemove', { which: 1, pageX: 163, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 0)
                        cy.get('@sortable2').find('li').should('have.length', 10)


                cy.get('@item12')
                    .trigger('mousedown', { which: 1, pageX: 163, pageY: 209 })
                    .trigger('mousemove', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 1)
                        cy.get('@sortable2').find('li').should('have.length', 9)
                cy.get('@item22')
                    .trigger('mousedown', { which: 1, pageX: 163, pageY: 209 })
                    .trigger('mousemove', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 2)
                        cy.get('@sortable2').find('li').should('have.length', 8)
                cy.get('@item32')
                    .trigger('mousedown', { which: 1, pageX: 163, pageY: 209 })
                    .trigger('mousemove', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 3)
                        cy.get('@sortable2').find('li').should('have.length', 7)
                cy.get('@item42')
                    .trigger('mousedown', { which: 1, pageX: 163, pageY: 209 })
                    .trigger('mousemove', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 4)
                        cy.get('@sortable2').find('li').should('have.length', 6)
                cy.get('@item52')
                    .trigger('mousedown', { which: 1, pageX: 163, pageY: 209 })
                    .trigger('mousemove', { which: 1, pageX: 9, pageY: 14 })
                    .trigger('mouseup')
                        cy.get('@sortable1').find('li').should('have.length', 5)
                        cy.get('@sortable2').find('li').should('have.length', 5)

                cy.get('@sortable1').find('li').should('have.attr', 'style')
            })
    }) 

    it.only('Sortable :: SIMPLE LIST', () => {

        cy.get('li[id="Simple List"]')
        .contains('Simple List').click({force: true})
        .should('have.class', 'resp-tab-item resp-tab-active')
        .and('have.attr', 'aria-controls', 'tab_item-2')

        cy.url().should('contain', '#Simple%20List')

            cy.get('iframe.demo-frame.lazyloaded', {timeout: 10 * 1000}).iframe(() => {
                cy.wait(2000)

                cy.get('ul#sortable').should('have.class', 'ui-sortable').as('sortable')

                cy.get('@sortable').find('li').should('have.class', 'ui-state-default ui-sortable-handle').and('have.length', 7)

                cy.get('li').eq(0).contains('Item 1').as('itemS1')
                cy.get('li').eq(1).contains('Item 2').as('itemS2')
                cy.get('li').eq(2).contains('Item 3').as('itemS3')
                cy.get('li').eq(3).contains('Item 4').as('itemS4')
                cy.get('li').eq(4).contains('Item 5').as('itemS5')
                cy.get('li').eq(5).contains('Item 6').as('itemS6')
                cy.get('li').eq(6).contains('Item 7').as('itemS7')

                cy.get('@itemS1')
                    .trigger('mousedown', { which: 1, pageX: 8, pageY: 8 })
                    .trigger('mousemove', { which: 1, pageX: 8, pageY: 236})
                    .trigger('mouseup')
                        cy.get('@sortable').find('li').eq(6).should('contain','Item 1')
            })
    }) 

    it('Sortable :: GRID SORTING', () => {

        
    }) 
})