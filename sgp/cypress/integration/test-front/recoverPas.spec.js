describe('RecoverPassword',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
    })
    /*Test dentro de la pagina de RecoverPassword*/
    /*Se puede abrir y contiene lo necesario*/
    it('RecoverPassword page can be open', () => {
        cy.get('[placeholder="Email"]')
        cy.get('[placeholder="Contraseña"]')
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
    /*Se puede recuperar la contraseña*/
    it('password can be recovered', () => {
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[id=btn]').click()
        cy.contains('ingrese su nueva contraseña')
   
    })
})