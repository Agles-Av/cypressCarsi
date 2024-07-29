//Pruebas al sitio de TestSite
require("cypress-xpath");
describe("Pruebas al sitio de testsite", () => {
  beforeEach(() => {
    cy.visit("https://www.fluentcollab.org/testsite/");
  });

  it("Entrar y scrollear hacia abajo del todo", () => {
    cy.wait(2000);
    cy.get("#x-site > footer").scrollIntoView({ duration: 2000 });
    cy.get("#x-site > header").scrollIntoView({ duration: 2000 });
  });

  it("acercar la ubicacion del mapa", () => {
    cy.wait(2000);
    cy.get(
      "#cs-content > div.x-section.e180-e5.m50-0.m50-2 > div > div > div.x-col.e180-e16.m50-h > div.x-row.e180-e21.m50-4.m50-5.m50-7.m50-a.m50-b.m50-f > div > div > div > div > div > div > div > div.x-text.x-text-headline.e156-e4.m4c-4 > div > div > h1"
    ).scrollIntoView({ duration: 2000 });
    cy.get("#gmimap0")
      .trigger("mousedown", "topRight", { button: 0, force: true })
      .dblclick({ force: true })
      .wait(2000)
      .trigger("mousedown", "topLeft", { button: 0, force: true })
      .dblclick({ force: true })
      .wait(2000);
  });

  it("Alejar y acercar el mapa", () => {
    cy.wait(2000);
    for (let index = 1; index < 3; index++) {
      cy.get(
        "#cs-content > div.x-section.e180-e5.m50-0.m50-2 > div > div > div.x-col.e180-e16.m50-h > div.x-row.e180-e21.m50-4.m50-5.m50-7.m50-a.m50-b.m50-f > div > div > div > div > div > div > div > div.x-frame.x-frame-map-google.e156-e5.m4c-5 > div > div > div > div.gm-style > div:nth-child(13) > div > div > div > button:nth-child(3)"
      )
        .click()
        .wait(2000);
    }
  });

  it("Ver cards a la derecha", () => {
    cy.wait(2000);
    cy.get(
      "#cs-content > div.x-section.e180-e5.m50-0.m50-2 > div > div > div.x-col.e180-e7.m50-h > div.x-text.x-content.e180-e15.m50-s > p > span"
    ).scrollIntoView({ duration: 2000 });
    for (let index = 0; index < 3; index++) {
      cy.wait(2000);
      cy.get(
        "#grid-89 > div.tg-grid-slider > div.tg-grid-area-right > div > div > div"
      ).click();
      cy.wait(2000);
    }
  });
});
