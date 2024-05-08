require('cypress-xpath');
/**
 * Sitio a probar https://www.demoblaze.com/index.html
 * - Visitar el sitio
 */

//Crear la funcion de la prueba
describe('Prueba al sitio de DemoBlaze',()=>{
    //TODO el código para realizar mi prueba
    //paso 1 - Visitar el sitio de DemoBlaze
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/');
    });
    it('entrar al apartado de Actions',()=>{
        cy
        .xpath('/html/body/nav')
        .contains('Commands')
        .click()
        .xpath('//*[@id="navbar"]/ul[1]/li[1]/ul/li[3]/a')
        .click()
        .wait(2000);
    });
    
});