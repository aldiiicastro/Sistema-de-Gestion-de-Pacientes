 /*global cy*/
/*Test dentro de la pagina de Home*/ 
describe('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('614f9117cd2f4a0f81ca23fa')
        })
    })
     /*Nav logo e inicio */
     it('go to home in nav', () => {
        cy.get('[id=homeNav]').click()
        cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
    })
    it('go to home in nav from brand', () => {
        cy.get('[id=brand]').click()
        cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
    })
        /*Nav si se apreta no, no se cierra la sesion*/
        it('press close sesion and press no', () => {
            cy.get('[id=logoutNav]').click();
            cy.contains('¿Estas seguro que quieres cerrar sesión?');
            cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]')
            cy.get('[class="swal2-cancel swal2-styled swal2-default-outline"]').click();
            cy.contains('Bienvenidos al Sistema de Gestión de Pacientes');
        })
    /*Nav si apreta que si, se cierra.*/
    it('press close sesion and press yes', () => {
        cy.get('[id=logoutNav]').click();
        cy.contains('¿Estas seguro que quieres cerrar sesión?');
        cy.get('[class="swal2-cancel swal2-styled swal2-default-outline"]')
        cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.contains('Se cerro sesión correctamente');
    })
    describe('Close sesion', () => {
        beforeEach(() => {
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
        })
    })
})