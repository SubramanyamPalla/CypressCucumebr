/// <reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import SignUpPage from '../page_objects/SignUpPage';
import LoginPage from '../page_objects/LoginPage';

const signUpPage = new SignUpPage();
const loginPage = new LoginPage();

Given("the user is on the sign-up page", () => {
    signUpPage.visitSite();
});

When('the user enters valid sign-up information', () => {
    signUpPage.fillFirstName('John');
    signUpPage.fillLastName('Doe');
    signUpPage.fillEmail('john.doe@example.com');
    signUpPage.fillPassword('SecurePassword123!');
});

And('the user submits the sign-up form', () => {
    signUpPage.submit();
});

Then('the account should be created successfully', () => {
    cy.contains('Thank you for registering');
});


Given('the user is on the login page', () => {
    loginPage.visit();
});

When('the user enters valid login information', () => {
    loginPage.fillEmail('john.doe@example.com');
    loginPage.fillPassword('SecurePassword123!');
});

And('the user submits the login form', () => {
    loginPage.submit();
});

Then('the user should be redirected to the dashboard', () => {
    cy.contains('My Account');
});
