 /*global cy*/
describe('RestabContraseña',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:5000/restabContraseña')
    })
    /*Test dentro de la pagina de reestablecercontraseña*/
    /*Se puede abrir y contiene lo necesario*/
    it('RecoverPassword page can be open', () => {
        cy.get('[placeholder="Contraseña"]')
        cy.get('[placeholder="Repertir Contraseña"]')
        cy.get('[id=btnEnviar]')
    })

    
    /*No se habilita el inicio de sesion*/
 /*    it('login page cant press log in if have no password', () => {
        cy.get('[placeholder="Email"]').type('aldana@gmail.com')
        cy.get('[id=btnLogIn]').should('be.disabled');
    }) */
    /* it('login page cant press log in if have no email', () => {
        cy.get('[placeholder="Contraseña"]').type('aaaaa')
        cy.get('[id=btnLogIn]').should('be.disabled');
    }) */
 /*    it('login page cant press log in if have nothing', () => {
    cy.get('[id=btn]').click().should('be.disabled');
    })
 */ 
      /*No se puede tener menos de 5 caracteres en la contraseña*/
      it('password not can be recovered', () => {
        cy.get('[placeholder="Contraseña"]').type('1234')
        cy.get('[placeholder="Repertir Contraseña"]').type('1234')
        cy.get('[id=btnEnviar]').click();
        cy.get('[title:"Las contraseñas no son identicas!"]')

      //  Las contraseñas no son identicas!

   
    })
    /*Se puede cambiar la contraseña*/
    it('password can be recovered', () => {
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[placeholder="Repertir Contraseña"]').type('12345')
        cy.get('[id=btnEnviar]').click()
   
    })
})