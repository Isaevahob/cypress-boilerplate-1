///<reference types="cypress"/>

function login(email, password) {
    cy.contains("Login").click();
    cy.url().should("include", "/auth/login");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('[type="submit"]').contains("Log In").click()
  }
  const footer = {
    text: [
      "© Postclick, Inc.",
      "Privacy policy",
      "Terms  of service",
      "About us",
    ],
    href: [
      "",
      "https://instapage.com/privacy-policy",
      "https://instapage.com/terms-of-service",
      "https://instapage.com/about",
    ],
  };
  
  describe("Test Instapage website", () => {
    beforeEach("login", () => {
      cy.viewport("macbook-13");
      cy.visit("/");
    });
    it("Login page - should show an error when trying to login with invalid credentials", () => {
      login("jfdsjh@gmail.com", "dgajgkl");
      cy.get("#login_form").within(() => {
        cy.get('[role="alert"]').should("contain", "Incorrect Email or Password");
      });
    });
    it("Demo page - should load footer with all elements and navigate to the privacy policy", () => {
      cy.contains("BOOK A DEMO").click();
      cy.url().should("contain", "/demo");
      cy.get("section.v7-simple-footer-links-wrapper")
        .children()
        .each((element, index) => {
          if (index == 0) {
            cy.wrap(element)
              .should("contain", `${footer.text[index]}`)
              .and("not.have.attr", "href");
          } else {
            cy.wrap(element)
              .should("contain", `${footer.text[index]}`)
              .and("have.attr", "href", `${footer.href[index]}`);
          }
        });
      cy.contains("a", "Privacy policy").click();
      cy.url().should("include", "/privacy-policy");
    
    });
    it("Resources - should return eight search results", () => {
      cy.contains("Browse Library").scrollIntoView().click();
      cy.url().should("include", "https://instapage.com/resources");
      cy.get(".v7-search-input").type("Conversion ROAS");
      cy.contains("SEARCH NOW").click();
      cy.get(".v7-box").should("have.length", 8);
    });
  })