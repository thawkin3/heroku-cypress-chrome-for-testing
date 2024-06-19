/// <reference types="cypress" />
context("GIVEN Browser is already open  ", { testIsolation: false }, () => {
 it("WHEN User Open the Url", () => {
   cy.visit(
     //"https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
     "index.php?route=account/login"
   );
 });
 it("AND Login into the application", () => {
   cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
   cy.get('[id="input-password"]').type("lambdatest");
   cy.get('[type="submit"]').eq(0).click();
 });
 it("AND Click On All Categories drop down and Search the Product", () => {
   cy.get('[data-toggle="dropdown"]').eq(0).click();
   cy.contains("Laptops").click({ force: true });
   cy.get('[name="search"]').eq(0).type("Apple").should("have.value", "Apple");
   cy.get('[type="submit"]').eq(0).click();
 });
 it("THEN Verify Correct Product with name'iPod Shuffle' should display after Search ", () => {
   cy.contains("iPod Shuffle");
 });
});
