describe('Test home page', () => {
    it('home page should ask for accept cookies', () => {
        cy.visit('/')
        cy.contains('Aceitar os cookies').click()
        cy.getCookie('cookiePortalOTempo').should('exist')
    })
})