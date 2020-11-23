Feature: Forum

Scenario: Create a post

When user navigates to forum
And user should see a popup  to select preferred categories  
Then user should be able to make a post to selected categories
And user receives a successful message after post   