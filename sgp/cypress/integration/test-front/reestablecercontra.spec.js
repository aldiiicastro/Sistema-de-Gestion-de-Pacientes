  /*global Cypress*/
 /*global cy*/

 describe('RestabContraseña',()=> {
    it( 'visit recover password', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('http://localhost:5000/recoverPassword')
    })
    /*Test dentro de la pagina de reestablecercontraseña*/
    /*Se puede abrir y contiene lo necesario*/
    it('RecoverPassword page can be open', () => {
        cy.get('[placeholder="Email"]').type("leanperez18@gmail.com");
        cy.get('[id=btnReestablecer]').click();
    })
    /*Se puede cambiar la contraseña*/
    it('password can be recovered', () => {
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[placeholder="Repertir Contraseña"]').type('12345')
        cy.get('[id=btnEnviar]').click()
   
    })
})