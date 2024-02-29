Feature: Remove from the Cart

  @Scenario-Remove

  Scenario: Counter of the cart decreases by removing a product from the cart
    Given User is on the home page
    And User has no products in the cart
    When User selects Women menu item
    And User clicks on a product
    And User selects a Blue color
    And User clicks the Add to Card button
    And User clicks the Continue shopping button
    And User clicks remove button on cart
    Then Counter of the cart should be empty