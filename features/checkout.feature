Feature: Checkout

  @Scenario-Checkout
  
  Scenario: Unregistered user tries to checkout and is asked to sign in
    Given User is on the home page
    And User has no products in the cart
    When User selects Women menu item
    And User clicks on In stock
    And User clicks on a product
    And User selects a Blue color
    And User clicks the Add to Card button
    And User clicks the Proceed to checkout button
    Then User should be prompted to "CREATE AN ACCOUNT"