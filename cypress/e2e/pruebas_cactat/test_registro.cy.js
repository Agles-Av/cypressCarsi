import principal_cactat from '../../page/principal_cactat';
import { VALID_USER,INVALID_USER } from '../../data/user_cactat';
//pruebas al sistema cactat

describe("Pruebas al sistema de cactat",()=>{
    beforeEach(()=>{
        cy.visit(principal_cactat.url_txt)
    })

    it("registro",()=>{
        principal_cactat.register(
            VALID_USER.name,
            VALID_USER.lastname,
            VALID_USER.email,
            VALID_USER.phone,
            VALID_USER.product,
            VALID_USER.comment,
            VALID_USER.fileInput
        )
    })

})