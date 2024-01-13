/// <reference types="cypress" />

describe('Carga la página principal', () => {

    it('Carga la página principal', () => {
        
        cy.visit('/index.html');

        // Verificar que el elemento y su texto existen
        // cy.contains('h1', 'Administrador de Pacientes de Veterinaria'); // Se recomienda, ya que es específico
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria'); // Se recomienda, ya que es específico

        // Verificar que el elemento existe
        // cy.get('h1').should('exist'); // No se recomienda, ya que no es específico
        cy.get('[data-cy="titulo-proyecto"]').should('exist'); // Se recomienda, ya que es específico

        // Verificar que el elemento existe y contiene un texto específico
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        // Tiene que ser exactamente igual

        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('not.equal', 'Otra cosa');

    });

});

/*
    No se debe de tener espacios entre el tag y el texto; si lo tienes así:

    <h1>
    Administrador
    </h1>


    Cambialo a una sola linea:

    <h1>Administrador</h1>
*/