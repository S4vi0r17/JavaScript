/// <reference types="cypress" />

describe('Llenar los campos para una nueva cita y la elimina', () => {

    it('Campos nueva cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Minino');

        cy.get('[data-cy="propietario-input"]')
            .type('Eder');

        cy.get('[data-cy="telefono-input"]')
            .type('123456789');

        cy.get('[data-cy="fecha-input"]')
            .type('2024-01-12');

        cy.get('[data-cy="hora-input"]')
            .type('20:30');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('El gato solo come y duerme');

        cy.get('[data-cy="submit-cita"]')
            .click();

        // Selecionar la heading
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        // Selecionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');

    });

    it('Eliminar una cita', () => {

        cy.get('[data-cy="btn-eliminar"]').click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');

        cy.screenshot();

    });

});