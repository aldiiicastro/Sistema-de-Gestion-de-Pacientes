 /*global cy*/
describe('Login',()=> {
    beforeEach(() => {
        cy.visit('https://sistema-gestion-paciente.herokuapp.com')
    })
    /*Test dentro de la pagina de login*/
    /*Se puede abrir y contiene lo necesario*/
    it('login page can be open', () => {
        cy.contains('SGP')
        cy.get('[placeholder="Email"]')
        cy.get('[placeholder="Contraseña"]')
        cy.get('[id=btnLogIn]')
        cy.get('[id=btnRegister]')
        cy.contains('¿Olvidaste tu contraseña?')
    })
    /*Se puede clickear el recuperar contrseña*/
    it('login page recover password click', () => {
        cy.contains('¿Olvidaste tu contraseña?').click()
    })
    /* Se puede ir a la pagina de registro con el boton Registrarse y volver al login*/ 
    it('se puede ir a la pagina de registro y volver', () => {
        cy.contains('Registrarse').click();
        cy.contains('Volver').click();
    })
    /*No se puede loguear */
    it('login page cant log in', () => {
        cy.get('[placeholder="Email"]').type('aldanacastro@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click()
        cy.contains('Usuario no encontrado')
    })
    /*No se habilita el inicio de sesion*/
    it('login page cant press log in if have no password', () => {
        cy.get('[placeholder="Email"]').type('aldana@gmail.com')
        cy.get('[id=btnLogIn]').should('be.disabled');
    })
    it('login page cant press log in if have no email', () => {
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').should('be.disabled');
    })
    it('login page cant press log in if have nothing', () => {
        cy.get('[id=btnLogIn]').should('be.disabled');
    })
    /*Se puede loguear*/
    it('login page can log in', () => {
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click()
        cy.contains('a : Bienvenidos al Sistema de Gestión de Pacientes')
        cy.contains('Inicio')
        cy.contains('Ver pacientes atendidos')
        cy.contains('Cerrar sesión')
    })
})