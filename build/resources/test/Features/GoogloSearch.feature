
  @GoogleSearch
    Feature: Google search
      Scenario: Search Sénégal on google
        Given user is on google search page
        When user enters "Sénégal" and hit enter
        Then results for "Sénégal" should be displayed