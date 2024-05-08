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
    }
    //metodos de la pagina principal
    register(nombre, apellidoPaterno, apellidoMaterno, usuario, correo, sector, contra, contraV){
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
        cy.get(this.correo_txt).type(correo)
        cy.get(this.sector_select).select(sector)
        cy.get(this.contra_txt).type(contra)
        cy.get(this.contraV_txt).type(contraV)
        cy.get(this.btn_Registro2)
        .click()
    }
}

export default  new principal();