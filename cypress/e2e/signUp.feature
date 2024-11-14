Feature: User Sign-Up and Login

  Scenario: User signs up with valid credentials
    Given the user is on the sign-up page
    When the user enters valid sign-up information
    And the user submits the sign-up form
    Then the account should be created successfully

  Scenario: User logs in with created account
    Given the user is on the login page
    When the user enters valid login information
    And the user submits the login form
    Then the user should be redirected to the dashboard
