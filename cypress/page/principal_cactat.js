class cactat {
    constructor(){
        this.url_txt =  'http://127.0.0.1:5500/src/index.html';
        this.nombre_txt = '#firstName';
        this.apellidos_txt = '#lastName';
        this.email_txt = '#email';
        this.telefono_txt = '#phone';
        this.selector_select = '#product';
        this.radio1_radio = '#support-type > label:nth-child(2) > input[type=radio]'
        this.radio2_radio = '#support-type > label:nth-child(3) > input[type=radio]'
        this.radio3_radio = '#support-type > label:nth-child(4) > input[type=radio]'
        this.email_checkBox = '#email-checkbox';
        this.telefono_checkBox = '#phone-checkbox';
        this.comentario_txt = '#open-text-area';
        this.file_input = '#file-upload';
        this.btn_submit = '#white-background > form > button';
    }

    //metodos de la pagina principal_cactat
    register(nombre, apellidos, email, telefono, producto, comentario, archivo){
        cy.get(this.nombre_txt).type(nombre);
        cy.get(this.apellidos_txt).type(apellidos);
        cy.get(this.email_txt).type(email);
        cy.get(this.telefono_txt).type(telefono);
        cy.get(this.selector_select).select(producto);
        cy.get(this.radio1_radio).check();
        cy.get(this.radio2_radio).check();
        cy.get(this.radio3_radio).check();
        cy.get(this.email_checkBox).check();
        cy.get(this.telefono_checkBox).check();
        cy.get(this.comentario_txt).type(comentario);
        cy.get(this.btn_submit).click();
    }
}

export default new cactat();