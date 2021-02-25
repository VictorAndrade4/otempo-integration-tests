Cypress.Commands.add('login', (user) => {
    cy.visit('/login')
    cy.get('#input-name').type(user.email)
    cy.get('#input-pass').type(user.password)
    cy.get('#bt-login').click()
})

Cypress.Commands.add('visitOpenArticle', () => {
    cy.fixture('article').then((article) => {
        cy.visit(article.open)
    })
})

Cypress.Commands.add('visitPaidArticle', () => {
    cy.fixture('article').then((article) => {
        cy.visit(article.paid)
    })
})

Cypress.Commands.add('visitPaidArticleWithImage', () => {
    cy.fixture('article').then((article) => {
        cy.visit(article.withImage)
    })
})