
describe('Test the WIDGETS menu', () => {
    beforeEach(() =>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')

        cy.get('div[id="nav_menu-8"]').find('li[id="menu-item-2807"]')
            .should('have.text', 'Tooltip').find('a[href="https://www.globalsqa.com/demo-site/tooltip/"]').click({force: true})
        cy.url().should('be.eq', 'https://www.globalsqa.com/demo-site/tooltip/')

        Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, callback = () => {}) => {

            cy.log('Getting iframe body')
        
            return cy
                .wrap($iframe)
                .should(iframe => expect(iframe.contents().find('body')).to.exist)
                .then(iframe => cy.wrap(iframe.contents().find('body')))
                .within({}, callback)
        })
    })

    it('TOOLTIP :: Image Based', () => {

        cy.get('li[id="Image Based"]').should('have.class', 'resp-tab-item resp-tab-active').and('have.attr', 'aria-controls', 'tab_item-0')

        const viena = 'a[href="https://maps.google.com/maps?q=vienna,+austria&z=11"]';
        const londra ='a[href="https://maps.google.com/maps?q=london,+england&z=11"]';

        cy.get('iframe.demo-frame.lazyloaded', { timeout: 10 * 1000 })
            .should('have.attr', 'data-src', '../../demoSite/practice/tooltip/custom-content.html').iframe(() => {

            cy.get('h3').find(viena)
                .should('have.text', 'Vienna, Austria').and('have.attr', 'data-geo')
            cy.get('h3').find(viena).trigger('mouseover').should('have.attr', 'aria-describedby')

            cy.get('a').find('img[src="images/st-stephens.jpg"]').should('have.attr', 'alt', `St. Stephen's Cathedral`)
                .trigger('mouseover').should('have.attr', 'aria-describedby')

            cy.get('h3').find(londra)
                .should('have.text', 'London, England').and('have.attr', 'data-geo')
            cy.get('h3').find(londra).trigger('mouseover').should('have.attr', 'aria-describedby')

            cy.get('a').find('img[src="images/tower-bridge.jpg"]').should('have.attr', 'alt', `Tower Bridge`)
                .trigger('mouseover').should('have.attr', 'aria-describedby')
        })
    }) 

    it('TOOLTIP :: Video Based', () => {

        cy.get('li[id="Video Based"]').click({force: true}).should('have.class', 'resp-tab-item resp-tab-active').and('have.attr', 'aria-controls', 'tab_item-1')
        
        cy.get('iframe.demo-frame.lazyloaded', {timeout: 10 * 1000})
            .should('have.attr', 'data-src', '../../demoSite/practice/tooltip/video-player.html').iframe(() => {

            cy.get('button').eq(0).contains('Like')
                .should('have.prop', 'title', 'I like this').and('have.class', 'ui-widget ui-controlgroup-item ui-button ui-corner-left')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-5')
                cy.get('div#ui-id-5').contains('I like this').should('be.visible')

            cy.get('button').eq(1).contains('I dislike this')
                .should('have.prop', 'title', 'I dislike this').and('have.class', 'ui-widget ui-button-icon-only ui-controlgroup-item ui-button ui-corner-right')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-6')
                cy.get('div#ui-id-6').contains('I dislike this').should('be.visible')

            cy.get('button').eq(2).contains('Add to')
                .should('have.prop', 'title', 'Add to Watch Later').and('have.class', 'ui-widget ui-controlgroup-item ui-button ui-corner-left')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-7')
                cy.get('div#ui-id-7').contains('Add to Watch Later').should('be.visible')

            cy.get('button').eq(3).contains('Add to favorites or playlist')
                .should('have.prop', 'title', 'Add to favorites or playlist').and('have.class', 'menu ui-widget ui-button-icon-only ui-controlgroup-item ui-button ui-corner-right')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-8')
                cy.get('div#ui-id-8').contains('Add to favorites or playlist').should('be.visible')

            cy.get('button').eq(4).contains('Share')
                .should('have.prop', 'title', 'Share this video').and('have.class', 'ui-button ui-corner-all ui-widget')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-9')
                cy.get('div#ui-id-9').contains('Share this video').should('be.visible')
            
            cy.get('button').eq(5).contains('Flag as inappropriate')
                .should('have.prop', 'title', 'Flag as inappropriate').and('have.class', 'ui-button ui-corner-all ui-widget ui-button-icon-only')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-10')
                cy.get('div#ui-id-10').contains('Flag as inappropriate').should('be.visible')
        })
        
    }) 

    it('TOOLTIP :: Forms Based', () => {

        cy.get('li[id="Forms Based"]').click({force: true}).should('have.class', 'resp-tab-item resp-tab-active').and('have.attr', 'aria-controls', 'tab_item-2')

        cy.get('iframe.demo-frame.lazyloaded', { timeout: 10 * 1000 })
            .should('have.attr', 'data-src', '../../demoSite/practice/tooltip/forms.html').iframe(() => {

            cy.get('input#firstname').should('have.prop', 'title', 'Please provide your firstname.')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-1')

                cy.get('div#ui-id-1').contains('Please provide your firstname.').should('be.visible')
                
            cy.get('input#lastname').should('have.prop', 'title', 'Please provide also your lastname.')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-2')

                cy.get('div#ui-id-2').contains('Please provide also your lastname.').should('be.visible')

            cy.get('input#address').should('have.prop', 'title', 'Your home or work address.')
                .trigger('mouseover').should('have.attr', 'aria-describedby', 'ui-id-3')

                cy.get('div#ui-id-3').contains('Your home or work address.').should('be.visible')
        })
    }) 

})