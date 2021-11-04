/*global cy*/
describe('search Patient', () =>
{

    it('login to search', () => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('emaDoctor@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('44444');
        cy.get('[id=btnLogIn]').click();
        cy.wait(1000);
        cy.get('[id = search ').type('Carlos');
        cy.get('[id = click').click();
        cy.wait(2000);
        cy.contains('Carlos');
        cy.contains("12345679");
        cy.contains('02/11/2021');
    })

    it('search patient by dni',()=>
    {
        cy.get('[id = search').clear();
        cy.get('[id = search').type("12345679");
        cy.get('[id = click').click();
        
        cy.wait(1000);
        cy.contains("12345679");
        cy.contains('Carlos');
        cy.contains('02/11/2021')
    })

    it('search nothing', ()=>
    {
        cy.get('[id = search').type("nothing");
        cy.get('[id = click').click();
        cy.wait(1000);
        cy.contains("No se encontro el paciente buscado");
    })

})