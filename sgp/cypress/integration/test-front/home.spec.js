/*global cy*/
/*Test dentro de la pagina de Home*/
describe('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000');
        cy.get('[placeholder="Email"]').type('a@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
    })
    /*Nav logo e inicio */
    it('go to home in nav', () => {
        
        cy.wait(1000)
        cy.contains('Inicio').click()
        cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
        cy.wait(1000)
        cy.get('[id=logoutNav]').click();
        cy.get('*[class^=swal2-confirm]*').click();
        cy.get('*[class^=swal2-confirm]*').click();
    })
    it('go to home in nav from brand', () => {
       
        cy.wait(1000)
        cy.get('[id=brand]').click();
        cy.contains('Bienvenidos al Sistema de Gestión de Pacientes');
        cy.wait(1000)
        cy.get('[id=logoutNav]').click();
        cy.get('*[class^=swal2-confirm]*').click();
        cy.get('*[class^=swal2-confirm]*').click();
    })
    /*Nav si se apreta no, no se cierra la sesion*/
    it('press close sesion and press no', () => {
        cy.wait(1000)
        cy.get('[id=logoutNav]').click();
        cy.contains('¿Estas seguro que quieres cerrar sesión?');
        cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]')
        cy.get('[class="swal2-cancel swal2-styled swal2-default-outline"]').click();
        cy.contains('Bienvenidos al Sistema de Gestión de Pacientes');
        cy.wait(1000)
        cy.get('[id=logoutNav]').click();
        cy.get('*[class^=swal2-confirm]*').click();
        cy.get('*[class^=swal2-confirm]*').click();
    })
    /*Nav si apreta que si, se cierra.*/
    it('press close sesion and press yes', () => {
        cy.wait(1000)
        cy.get('[id=logoutNav]').click();
        cy.contains('¿Estas seguro que quieres cerrar sesión?');
        cy.get('*[class^=swal2-confirm]*').click();
        cy.get('*[class^=swal2-confirm]*').click();
        cy.contains('Se cerro sesión correctamente');
    })
    describe('Close sesion', () => {
        beforeEach(() => {
            cy.wait(1000)
            cy.get('[id=logoutNav]').click();
            cy.contains('¿Estas seguro que quieres cerrar sesión?');
            cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        })
        it('close sesion and come back to login', () => {
            cy.contains('Se cerro sesión correctamente');
            cy.get('[class="swal2-confirm swal2-styled"]').click()
            cy.contains('SGP')
            cy.get('[placeholder="Email"]')
            cy.get('[placeholder="Contraseña"]')
            cy.get('[id=btnLogIn]')
            cy.contains('¿Olvidaste tu contraseña?')
            cy.wait(1000)
        })
    })
})