Feature: JBK offline application test

@login
Scenario Outline: Login test

#cucumber hook will set up a browser
#Given user should be on Login page
When  user enters "<username>" and "<password>"
Then  user will verify "<title>"

Examples:
|username         |password | title    |
|kiran@gmail.com  |123456   |Dashboard |
|deep123@gmail.com|564789   |Log in    |
|aaru123@gmail.com|aaru     |Log in    |
|jeet321@gmail.com|deepak   |Log in    |
|abhirao@gmail.com|abhirao  |Log in    |


@logo
Scenario: Logo test
#Given user should be on Login page
Then  user should see JBK logo
Given user should be on Login page

 
