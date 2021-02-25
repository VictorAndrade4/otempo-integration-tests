describe('Test comments', () => {
    before(() => {
        cy.visitOpenArticle()
    })

    it('comment form should show up', () => {
        cy.contains('Comentar a matéria').click()
        cy.get('#commentBlogPostForm-283').should('be.visible')
    })

    it('logged user should be able to post a comment', () => {
        cy.fixture('user').then((user) => {
            cy.login(user.valid_user)
            cy.visitOpenArticle()
            cy.contains('Comentar a matéria').click()
            cy.get('#campo').should('be.visible')
            cy.get('#campo').type('Este é um comentário de teste...')
            cy.get('#submitRegister283').click()
        })
    })
})