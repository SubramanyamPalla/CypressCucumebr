
Feature: Login Functionality

    Feature Description: By using above Feature user able to login portal
    //This will work like a beforeEach hook
    Background:
        Given open newtour application

    Scenario: Validate login functionality with valid credentials

        When user login by using following
            | userName | password |
            | mercury  | mercury  |
        Then Click on submit button
        And verify the title should be 'Login: Mercury Tours'

    @smoke
    Scenario: Validate login functionality with invalid credentials

        When user login by using following
            | userName | password |
            | mercury  | mercury  |
        Then Click on submit button
        And verify the title should be 'Login: Mercury Tours'