describe('Attended Patient', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
    })

    it('se crea un paciente de prueba', () => {
        cy.get('[placeholder="Email"]').type('recepcionista@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();

        cy.request('GET', 'localhost:3000/api/allpatients').then(res => {
            const usuarioPrueba = res.body.data.filter(p => p.surname === "Prueba Edit" && p.turnState === "WAITTING");

            if (usuarioPrueba[0]) {
                cy.get("[id=logoutNav]").click();
                cy.get("*[class^=swal2-confirm]*").click();
                cy.get("*[class^=swal2-confirm]*").click();
            } else {
                cy.get('[id= addPatient]').click();
                cy.get("[id=ControlTextAreaNN1]").type("Usuario");
                cy.get("[id=ControlTextAreaNN2]").type("Prueba Edit");
                cy.get("[id=ControlTextAreaNN3]").type("123456789");
                cy.get("[id=ControlTextAreaNN10]").type("1990-01-03");
                cy.get("[name= Fiebre]").click();
                cy.get("[name=Tos]").click();
                cy.get("[id=ingresarButton]").click();
                cy.contains(`Paciente Usuario Prueba Edit ingresado con Exito!`);
                cy.get("[id=logoutNav]").click();
                cy.get("*[class^=swal2-confirm]*").click(); 
                cy.get("*[class^=swal2-confirm]*").click();
            }
        })

    })

    it('Puedo ver datos del ingreso del paciente',() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('[placeholder="Email"]').type('a@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
        cy.get('td').last().within(() => {
                cy.get("[data-icon= user-edit]").click()
            })
        cy.contains("Nombre/s");
        cy.contains("Apellido/s");
        cy.contains("DNI");
        cy.contains("Fecha de nacimiento");
        cy.contains("Provincia");
        cy.contains("Localidad");
        cy.contains("Editar Paciente");


        cy.get('[id=ControlTextAreaNN1]').invoke('val').then( c => {
            const valueOld = c
            const newValue =  "Edit Nombre"

            cy.get("[id=ControlTextAreaNN1]").clear();
            cy.get("[id=ControlTextAreaNN1]").type("Carlos Joel");

            cy.get("[id=ingresarButton]").click()
            cy.contains("actualizado Correctamente!")
            cy.contains("Carlos Joel")

            cy.get("[id=ControlTextAreaNN1]").clear();
            cy.get("[id=ControlTextAreaNN1]").type(c);

            cy.get("[id=ingresarButton]").click()
            cy.contains("actualizado Correctamente!") 
            cy.contains(c)
        })
    })
})