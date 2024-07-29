import {VALID_USER, INVALID_USER, VALID_USER_LOGIN, INVALID_USER_LOGIN} from "../../data/user";
import principal from "../../page/principal";
require('cypress-xpath');

// Test: Prueba del registro de SISUAR
describe('Prueba del registro de SISUAR',()=>{
    beforeEach(()=>{
        cy.visit(principal.url_txt);
    });

    //Prueba n1 Realizar el registro con un sector sin especificar
    it('Registro sin sector USUARIO VALIDO',()=>{
        principal.register(
            VALID_USER.name,
            VALID_USER.lastName,
            VALID_USER.motherLastName,
            VALID_USER.user,
            VALID_USER.email,
            VALID_USER.sector,
            VALID_USER.password,
            VALID_USER.password
        );
    })

    it('Registro sin sector USUARIO NO VALIDO',()=>{
        principal.register(
            INVALID_USER.name,
            INVALID_USER.lastName,
            INVALID_USER.motherLastName,
            INVALID_USER.user,
            INVALID_USER.email,
            INVALID_USER.sector,
            INVALID_USER.password,
            INVALID_USER.password
        );
    })

})