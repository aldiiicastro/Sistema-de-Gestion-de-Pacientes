 /*global cy*/
describe('RecoverPassword',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:5000/recoverPassword')
    })
    /*Test dentro de la pagina de RecoverPassword*/
    /*Se puede abrir y contiene lo necesario*/
    it('RecoverPassword page can be open', () => {
        cy.get('[placeholder="Email"]')
        cy.get('[id=btn]')
        cy.get('[id=btnLog]')
    })
    /*Se puede clickear el reestablecer contraseña*/
    it('page recover password click', () => {
        cy.contains('Reestablecer contraseña').click()
    })
    /*Se puede clickear e ir a inicio de sesiion*/
    it('page recover password click', () => {
        cy.contains('Ir a Login').click()
        cy.contains('SGP')

    })
       /*Se puede recuperar la contraseña con un email previamente no registrado*/
    it('password can be recovered', () => {
    cy.get('[placeholder="Email"]').type('octaviojorge37@gmail.com')
    cy.get('[id=btn]').click().should('be.disabled');
  })
    /*Se puede recuperar la contraseña*/
    it('password can be recovered', () => {
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[id=btn]').click()
        cy.contains('SGP')
        cy.contains('Enviar').click()   
    })
})