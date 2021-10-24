/*global cy*/
describe('search Patient', () =>
{

    it('login to search', () => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('emaDoctor@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('44444');
        cy.get('[id=btnLogIn]').click();
        cy.wait(1000);
        cy.get('[id = search ').type('Emanuel');
        cy.get('[id = click').click();
        cy.wait(2000);
        cy.contains('Emanuel');
    })

    it('search patient by dni',()=>
    {
        cy.get('[id = search').type("45869547");
        cy.get('[id = click').click();
        
        cy.wait(1000);
        cy.contains("45869547");
    })

    it('search nothing', ()=>
    {
        cy.get('[id = search').type("nothing");
        cy.get('[id = click').click();
        cy.wait(1000);
        cy.contains("No se encontro el paciente buscado");

    })

})