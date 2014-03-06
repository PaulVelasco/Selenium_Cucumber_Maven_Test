Feature: People search
	As a regular employee 
	I can search for other employees 
	so that I can find their contact information, title, or photo		

	Scenario Outline: Search by valid last name
		Given the input <employeeName> exists in the people directory
		When the search is performed
		Then the output should be <output>
		
		Examples:
			|employeeName  | output	| 
			|Doe 	| Doe		| 
			|Jones	| Jones		|	
	
	Scenario: Search by valid last name  
		Given the user is on search people page
		When he enters "Doe" as employee last name
		And he submits search request
		Then ensure list of employees with last name "Doe" is presented
		
	Scenario: Partial search by valid last name
		Given the user is on the Search People Page
		When he enters "D" as employee last name
		And he submits request
		Then ensure the list of employees with last name starting with D is presented
		
	Scenario: Partial search with non-alphanumeric characters
		Given the user is on the search people page
		When he enters * as employee last name
		And he submits search request
		Then the list of all employees is  presented  
		
	Scenario: Search by invalid last name
		Given the user is on the Search People Page
		When he enters "Xyz" as employee last name
		And he submits request
		Then ensure the failure message "No records found!" is presented 
		
	Scenario: Search by department name
		Given the user is on search people page
		When he enters "Finance" as department name
		And  he submits search request
		Then ensure the list of employees in "Finance" department is presented
		
	Scenario: Search by title
		Given the user is on search people page
		When he enters "Manager" as title
		And he submits search request
		Then ensure the list of employees with title "Manager" is presented