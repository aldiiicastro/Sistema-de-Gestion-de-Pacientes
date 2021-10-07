 /*global cy*/
/*Test dentro de la pagina de Home*/ 
describe('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('aaaaa')
        cy.get('[id=btnLogIn]').click()
    })
    /*Se puede ir dentro de agregar paciente*/
    it('go to addPatient', () => {
        cy.get('[id=addPatient]').click()
        cy.contains('Ingrese los datos:')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to addPatient in nav', () => {
        cy.get('[id=addPatientNav]').click()
        cy.contains('Ingrese los datos:')
    })
    /*Se puede ir dentro de eliminar paciente --PROVISORIO, aun no existe la pagina*/
    it('go to deletePatient', () => {
        cy.get('[id=deletePatient]').should('be.disabled')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to deletePatient in nav', () => {
        cy.get('[id=deletePatientNav]').should('have.class', 'disabled')
    })
    /*Se puede ir dentro de ver lista de espera --PROVISORIO, aun no existe la pagina*/
    it('go to wattingList', () => {
        cy.get('[id=wattingList]').should('be.disabled')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to wattingList in nav', () => {
        cy.get('[id=wattingListNav]').should('have.class', 'disabled')
    })
    /*Se puede ir dentro de ver las estadisticas --PROVISORIO, aun no existe la pagina*/
    it('go to statistics', () => {
        cy.get('[id=statistics]').should('be.disabled')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to statistics in nav', () => {
        cy.get('[id=statisticsNav]').should('have.class', 'disabled')
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