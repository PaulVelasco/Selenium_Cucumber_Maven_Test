Feature: Valet Parking
	As a traveler
	In order to determine where to park my car
	I want to know the cost of valet parking
	
Scenario: Calculate valet parking cost for half an hour
	When I park my car in the Valet Parking for 30 minutes
	Then I will have to pay $12