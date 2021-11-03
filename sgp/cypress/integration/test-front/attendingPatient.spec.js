describe('Attended Patient', () => {
    it('can attend patient who is watting',() => {
        cy.visit('http://localhost:5000');
        cy.get('[placeholder="Email"]').type('aldana@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.contains('Iniciar sesion').click();
        cy.contains('Bienvenidos al Sistema de Gestión de Pacientes');
        cy.contains('Agregar un paciente').click();
        cy.get('[id= ControlTextAreaNN1]').type("Test");
        cy.get('[id= ControlTextAreaNN2]').type("Front");
        cy.get('[id= ControlTextAreaNN3]').type("38694960");
        cy.get('[id= ControlTextAreaNN4]').type("Buenos Aires");
        cy.get('[id= ControlTextAreaNN5]').type("Florencio Varela");
        cy.get('[id= ControlTextAreaNN6]').type("fake street");
        cy.get('[id= ControlTextAreaNN7]').type("575");
        cy.get('[id= ControlTextAreaNN8]').type("1");
        cy.get('[id= ControlTextAreaNN9]').type("1888");
        cy.get('input[name= Fiebre]').check();
        cy.get('input[name= Tos]').check();
        cy.get('[id= ingresarButton]').click();
        cy.contains(`Paciente Test Front ingresado con Exito!`);
        cy.get('[id=logoutNav]').click();
        cy.contains('¿Estas seguro que quieres cerrar sesión?');
        cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.contains('Se cerro sesión correctamente');
        cy.get('[class="swal2-confirm swal2-styled"]').click()
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('614f9117cd2f4a0f81ca23fa')
        })
        cy.wait(1000)
        let variableToStop = true;
        let index = 0;
            while (variableToStop) {
                    if(cy.get(`[id=name${index}]`).contains('Test')) {
                        variableToStop = false;
                        cy.get(`[id=Attending${index}]`).click()
                    }   
                    index++;
            };
        
        
        for (let index = 1; index < 10; index++) {
            cy.get(`[id= ControlTextAreaNN${index}]`).should('be.disabled');
        }
    })

    it('Delete new patient of Test', () => {
        cy.request('GET', 'localhost:3000/api/pacienteEnTurno').then((response) => {
            cy.request('DELETE', 'localhost:3000/api/borrarPaciente/' + response.body.data[0]._id)
                 .then((response) =>{
                     expect(response.body).to.have.property('response', 'Paciente eliminado correctamente!')
                 })
         })
    })
    
})