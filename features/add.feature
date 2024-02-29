Feature: Add to a Cart

  @Scenario-Add

  Scenario: Number of products in the cart increases
    Given User is on the home page
    And User has no products in the cart
    When User selects Women menu item
    And User clicks on In stock
    And User clicks on a product
    And User selects a Blue color
    And User clicks the Add to Card button
    And User clicks the Continue shopping button
    Then Counter of the cart should increase by 1