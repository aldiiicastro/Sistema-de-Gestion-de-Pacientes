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
    /*Se puede clickear el recuperar contrseña*/
    it('login page recover password click', () => {
        cy.contains('¿Olvidaste tu contraseña?').click()
    })
    
    /*No se habilita el inicio de sesion*/
    it('login page cant press log in if have no password', () => {
        cy.get('[placeholder="Email"]').type('aldana@gmail.com')
        cy.get('[id=btnLogIn]').should('be.disabled');
    })
    it('login page cant press log in if have no email', () => {
        cy.get('[placeholder="Contraseña"]').type('aaaaa')
        cy.get('[id=btnLogIn]').should('be.disabled');
    })
    it('login page cant press log in if have nothing', () => {
        cy.get('[id=btnLogIn]').should('be.disabled');
    })
    /*Se puede cambiar la contraseña*/
    it('password can be recovered', () => {
        cy.get('[placeholder="Email"]').type('12345')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnEnviar]').click()
   
    })
})