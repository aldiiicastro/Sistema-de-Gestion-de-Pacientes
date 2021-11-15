describe('' , () => {

    it('login as a receptionist', () => {
        
        cy.visit('http://localhost:5000/Login')
        cy.contains('SGP')
        cy.get('[placeholder="Email"]').type('recepcionista@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnRegister]')
        cy.contains('¿Olvidaste tu contraseña?')
        cy.get('[id=btnLogIn]').click()
    })

    it('add a patient' , () => {
        cy.contains('Agregar paciente').click()
        cy.get('[id= ControlTextAreaNN1]').type("Internado");
        cy.get('[id= ControlTextAreaNN2]').type("Test");
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
        cy.contains(`Paciente Internado Test ingresado con Exito!`);
    })

    it('logout', () => {
        cy.wait(3001)
        cy.contains('Cerrar sesión').click()
        cy.contains('Si').click()
        cy.contains('OK').click()
    })

    it('login as a doctor', () => {
        cy.contains('SGP')
        cy.get('[placeholder="Email"]').type('doctor@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnRegister]')
        cy.contains('¿Olvidaste tu contraseña?')
        cy.get('[id=btnLogIn]').click()
    })

    it('attend a patient' , () => {
        cy.request('GET', 'http://localhost:3000/api/pacientes-esperando-atendiendose').then(res => {
            let datos = res.body.data
            let index = datos.length - 1;
            cy.contains('Internado')
            cy.contains('Test')
            cy.contains('38694960')
            cy.get('[id=Attending'+index+']').click()

            cy.contains('Internar').click()
            cy.contains('Paciente Internado Test confirmacion exitosa!')
           
            const patient = datos[datos.length - 1]

            cy.request('DELETE', 'http://localhost:3000/api/borrarPaciente/'+patient._id)
            
        })
    })

})