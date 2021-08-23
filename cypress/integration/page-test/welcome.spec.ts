
export default describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('to Algorithm test', () => {
    cy.get('[data-cy=to_Algorithm]').click()
    cy.location('pathname').should('include', 'algorithm')
  })
  it('to daily test', () => {
    cy.get('[data-cy=to_Daily]').click()
    cy.location('pathname').should('include', 'daily')
  })
  it('text input test', () => {
    
  })
})
