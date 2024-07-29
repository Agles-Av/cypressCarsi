//hacer clases en java escript 
class principal {
    //elementos de la pagina
    constructor(){
        this.url_txt = 'http://sisuar.imta.mx/aplicacion/vista/principal.php';
        this.btn_Entrar = '/html/body/div[6]/div/div[3]/button[1]';
        this.btn_Registro = '//*[@id="navbarSupportedContent"]/ul/li[4]/a';
        this.nombre_txt = '#Nombre';
        this.apellidoPaterno_txt = '#Apaterno';
        this.apellidoMaterno_txt = '#Amaterno';
        this.usuario_txt = '#Usuario';
        this.correo_txt = '#Correo';
        this.sector_select = '#Sector';
        this.contra_txt = '#Contra';
        this.contraV_txt = '#ContraV';
        this.btn_Registro2 = '.modal.show > .modal-dialog > .modal-content > .modal-body > form > :nth-child(16) > :nth-child(2) > .btn'; 
        this.usuarioExistente_txt = '#divUsuario > p';
        this.correoExistente_txt = '#divCorreo > p';
    }
    usuarioExiste(usuario, userAndEmailChange){  
        cy.get(this.usuarioExistente_txt).then(($texto)=>{
            const texto = $texto.text();
            if(texto.includes('¡El usuario ya existe!')){
            userAndEmailChange++;
            cy.get(this.usuario_txt).clear();
            cy.get(this.usuario_txt).type(usuario+userAndEmailChange);
            this.usuarioExiste(usuario, userAndEmailChange);
            }else{
                return;
            }
        }) 

        
    }
    correoExiste(correo, userAndEmailChange){
        cy.get(this.correoExistente_txt).then(($texto)=>{
            const texto = $texto.text();
            if(texto.includes('¡El correo ya existe!')){
            userAndEmailChange++;
            cy.get(this.correo_txt).clear();
            cy.get(this.correo_txt).type(correo+userAndEmailChange);
            this.correoExiste(correo, userAndEmailChange);
            }else{
                return;
            }
        })
    }
    //metodos de la pagina principal
    register(nombre, apellidoPaterno, apellidoMaterno, usuario, correo, sector, contra, contraV){
        let userAndEmailChange = 0;
        cy.wait(2000);
        cy.xpath(this.btn_Entrar)
        .click() 
        cy.xpath(this.btn_Registro)
        .click()
        .wait(2000);
        cy.get(this.nombre_txt).type(nombre)
        cy.get(this.apellidoPaterno_txt).type(apellidoPaterno)
        cy.get(this.apellidoMaterno_txt).type(apellidoMaterno)
        cy.get(this.usuario_txt).type(usuario)
        cy.wait(2000);
        this.usuarioExiste(usuario, userAndEmailChange);
        cy.get(this.correo_txt).type(correo)
        cy.wait(2000);
        this.correoExiste(correo, userAndEmailChange);
        cy.get(this.sector_select).select(sector)
        cy.get(this.contra_txt).type(contra)
        cy.get(this.contraV_txt).type(contraV)
        cy.get(this.btn_Registro2)
        .click()
    }

    login(usuario, contra){
        cy.get('#navbarSupportedContent > ul > li:nth-child(3) > a')
        .click()
        .wait(2000)
        .get('#email').type(usuario,{delay:100})
        .get('#contra').type(contra)
        .get('#botonenviar').click()
        .wait(5000)
    }
}

export default  new principal();