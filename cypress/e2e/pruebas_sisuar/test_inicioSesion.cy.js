import {VALID_USER_LOGIN, INVALID_USER_LOGIN,NOTVER_VALID_USER_LOGIN} from "../../data/user";
import principal from "../../page/principal";
require('cypress-xpath');

describe('Prueba del inicio de sesión de SISUAR',()=>{
    beforeEach(()=>{
        cy.visit(principal.url_txt)
        .wait(2000);
        cy.xpath(principal.btn_Entrar)
        .click();
        
    })

    

    it("Inicio de sesion con VALIDO_NOVERIFICADO",()=>{
        principal.login(
            NOTVER_VALID_USER_LOGIN.user,
            NOTVER_VALID_USER_LOGIN.password
        )
        cy.get('#swal2-content').should('be.visible').contains('No verificado')
    })

    it("Inicio de sesion con INVALIDO_CONTRASEÑA_NO_VALIDA",()=>{
        principal.login(
            INVALID_USER_LOGIN.user,
            INVALID_USER_LOGIN.password
        )
        cy.get('#swal2-content').should('be.visible').contains('La contraseña no es válida.')
    })

    it("Inicio de sesion con VALIDA",()=>{
        principal.login(
            VALID_USER_LOGIN.user,
            VALID_USER_LOGIN.password
        )
        cy.get('#logout').should('be.visible').contains('Cerrar Sesión')
    })

})

