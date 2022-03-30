Feature: Check Off Item As Completed
As a user
I want to check off an existing item
So that I can easily see it as completed
Scenario: Check Off Item
Given I open the application
And access to the landing page
And can see the "Pay Electric Bill"
When I check the corresponding checkbox
Then I can see that the item is completed