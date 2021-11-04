describe('Attended Patient', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
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
        cy.get('[id=table2]').within(() => {
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