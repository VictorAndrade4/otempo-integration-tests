describe('Test infinite scroll', () => {
    before(() => {
        cy.visitOpenArticle()
    })

    it('open article should load more articles when scrolling', () => {
        cy.contains('Recomendadas').scrollIntoView().should('be.visible')

        cy.get(`.artigo-conteudo-article0`)
            .scrollIntoView({ duration: 2000 }).should('be.visible')
    })
})