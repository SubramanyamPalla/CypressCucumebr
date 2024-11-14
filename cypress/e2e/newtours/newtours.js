/// <reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("open newtour application", () => {
  //Launch Website
  cy.visit("https://demo.guru99.com/test/newtours/login.php");
});

When("user login by using following", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get("[name='userName']").clear().type(element.userName);
    //Enter password
    cy.get("[name='password']").clear().type(element.password);
  });
});

Then("Click on submit button", () => {
  //Click on submit button
  cy.get("[name='submit']").click();
});

And("verify the title should be {string}", (title) => {
  cy.title().should("eq", title);
});
