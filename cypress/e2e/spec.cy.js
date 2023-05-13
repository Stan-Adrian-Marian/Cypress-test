/// <reference types="Cypress" />

describe("Demoblaze testing", () => {
  it("Test that an user can successfully navigate among the application pages", () => {
    cy.visit("https://www.demoblaze.com/");

    cy.get(".nav-item").find("a").contains("Contact").click();
    cy.wait(500);
    cy.get("#exampleModal").find(".btn-secondary").click();

    cy.get(".nav-item").find("a").contains("About us").click();
    cy.wait(500);
    cy.get("#videoModal").find(".btn-secondary").click();

    cy.get(".nav-item").find("a").contains("Log in").click();
    cy.wait(500);
    cy.get("#logInModal").find(".btn-secondary").click();

    cy.get(".nav-item").find("a").contains("Sign up").click();
    cy.wait(500);
    cy.get("#signInModal").find(".btn-secondary").click();

    cy.get(".nav-item").find("a").contains("Cart").click();

    cy.get(".nav-item").find("a").contains("Home").click();

    cy.get("#nava").click();

    cy.get(".list-group > #itemc").each((el) => {
      cy.wrap(el).click();
    });

    cy.get(".hrefch").first().click();
    cy.get("#nava").click();

    cy.get("#prev2").click();
    cy.get("#next2").click();
  });

  it("Test that an user can successfully add a product(of your choice) from 'Laptops' category and place an order", () => {
    cy.visit("https://www.demoblaze.com/");

    cy.get(".list-group > #itemc").eq(2).click();
    cy.get(".hrefch").first().click();

    cy.get(".btn-success").click();

    cy.get(".nav-item").find("a").contains("Cart").click();

    cy.get(".btn-success").click();

    cy.get("#name").type("Adrian");
    cy.get("#country").type("Romania");
    cy.get("#city").type("Craiova");
    cy.get("#card").type("1234 6543 8675 3823");
    cy.get("#month").type("11");
    cy.get("#year").type("25");

    cy.get(".btn-primary").contains("Purchase").click();

    cy.get(".sweet-alert").should("be.visible");
  });

  it("Test that an user can successfully add multiple products from different categories and that he can successfully remove some of them from the cart before submitting the order", () => {
    cy.visit("https://www.demoblaze.com/");

    cy.get(".list-group > #itemc").eq(0).click();
    cy.get(".hrefch").first().click();
    cy.get(".btn-success").click();
    cy.get("#nava").click();

    cy.get(".list-group > #itemc").eq(1).click();
    cy.get(".hrefch").first().click();
    cy.get(".btn-success").click();
    cy.get("#nava").click();

    cy.get(".list-group > #itemc").eq(2).click();
    cy.get(".hrefch").first().click();
    cy.get(".btn-success").click();
    cy.get("#nava").click();

    cy.get(".nav-item").find("a").contains("Cart").click();

    cy.wait(500);

    cy.get("a").contains("Delete").eq(0).click();

    cy.wait(500);

    cy.get("a").contains("Delete").eq(0).click();

    cy.wait(500);

    cy.get(".btn-success").click();

    cy.wait(500);

    cy.get("#name").type("Adrian");
    cy.get("#country").type("Romania");
    cy.get("#city").type("Craiova");
    cy.get("#card").type("1234 6543 8675 3823");
    cy.get("#month").type("11");
    cy.get("#year").type("25");

    cy.get(".btn-primary").contains("Purchase").click();

    cy.get(".sweet-alert").should("be.visible");
  });

  it("Test that an user can successfully send a message to Contact", () => {
    cy.visit("https://www.demoblaze.com/");

    cy.get(".nav-item").find("a").contains("Contact").click();
    cy.wait(500);

    cy.get("#recipient-email").type("example@gmail.com");
    cy.get("#recipient-name").type("Adrian");
    cy.get("#message-text").type(
      "Buna ziua, Sunt foarte multumit de site-ul dumneavoastra!"
    );
    cy.get(".btn-primary").contains("Send message").click();
  });
});
