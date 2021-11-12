  /*global Cypress*/
 /*global cy*/

 describe('RestabContraseña',()=> {
    it( 'visit recover password', () => {
        cy.visit('http://localhost:5000/recoverPassword')
    })
    /*Test dentro de la pagina de reestablecercontraseña*/
    /*Se puede abrir y contiene lo necesario*/
    it('RecoverPassword page can be open', () => {
        cy.get('[placeholder="Email"]').type("aldana@gmail.com");
        cy.get('[id=btnReestablecer]').click();
    })
})