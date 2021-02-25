describe('Test login action', () => {
    it('user should be able to log in', () => {
        cy.fixture('user').then((user) => {
            cy.login(user.valid_user)
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/')
            })
        })
    })
})