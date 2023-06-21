Feature: Parse Tree Preview
  As a user
  I would like to verify how parsing algorithm interpreted my input

  Scenario: render indicator for parse result processing while ongoing processing
    Given the user is on the application page
    When the editor's empty
    And the user provides valid large input
    And the user switches to parse tree view
    Then first rendered element should be label "Rendering..."

  Scenario: render parse tree after parse result is processed
    Given the user is on the application page
    When the editor's empty
    And the user provides valid large input
    And the user switches to parse tree view
    And first rendered element should be label "Rendering..."
    Then parse tree should be rendered properly
#
#  Scenario: rendered parse tree have properly colored terminal elements
#    Given the user is on the application page
#    When the editor's empty
#    And the user provides valid small input
#    And the user switches to parse tree view
#    And the parse tree is rendered
#    Then rendered terminal element should be colored as green
#
#  Scenario: rendered parse tree have properly colored non-terminal elements
#    Given the user is on the application page
#    When the editor's empty
#    And the user provides valid small input
#    And the user switches to parse tree view
#    And the parse tree is rendered
#    Then rendered non-terminal element should be colored as gray
#
#  Scenario: rendered parse tree have properly colored non-terminal elements with no children
#    Given the user is on the application page
#    When the editor's empty
#    And the user provides valid small input
#    And the user switches to parse tree view
#    And the parse tree is rendered
#    Then rendered non-terminal element with no children should be colored as red
#


