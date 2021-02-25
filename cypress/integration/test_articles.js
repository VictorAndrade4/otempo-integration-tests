describe('Test articles', () => {
    it('paid article should have paywall enabled for non subscriber users', () => {
        cy.visitPaidArticle()
        cy.get('#div-paywall-element').scrollIntoView().should('be.visible');
    })

    it('subscriber should be able to disable paywall', () => {
        cy.fixture('user').then((user) => {
            cy.login(user.subscriber)
            cy.wait(2000)
            cy.visitPaidArticle()
            cy.contains('Comentar a matéria').scrollIntoView().should('be.visible');
        })
    })

    it('open articles should be enable to everyone', () => {
        cy.fixture('user').then((user) => {
            cy.visitOpenArticle()
            cy.contains('Comentar a matéria').scrollIntoView().should('be.visible');
        })
    })

    it('article with image should display it', () => {
        cy.visitPaidArticleWithImage()
        cy.get('.responsive-loading-image').should('be.visible');
    })

})