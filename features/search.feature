Feature: Product Search
  
  @Scenario-Search

  Scenario: Users searches for products using the search box
    Given User is on the home page
    When User clicks the search box
    And User enters Blouse into the search box
    And User clicks the search button
    Then User should see products related to Blouse