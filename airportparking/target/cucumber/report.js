$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ValetParking.feature");
formatter.feature({
  "id": "valet-parking",
  "description": "As a traveler\nIn order to determine where to park my car\nI want to know the cost of valet parking",
  "name": "Valet Parking",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "valet-parking;calculate-valet-parking-cost-for-half-an-hour",
  "description": "",
  "name": "Calculate valet parking cost for half an hour",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I park my car in the Valet Parking for 30 minutes",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I will have to pay $12",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 39
    }
  ],
  "location": "ValetParkingSteps.I_park_my_car_in_the_Valet_Parking_for_minutes(int)"
});
formatter.result({
  "duration": 1640179000,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.bdd.airportparking.ValetParkingSteps.I_park_my_car_in_the_Valet_Parking_for_minutes(ValetParkingSteps.java:15)\n\tat ✽.When I park my car in the Valet Parking for 30 minutes(ValetParking.feature:7)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    }
  ],
  "location": "ValetParkingSteps.I_will_have_to_pay_$(int)"
});
formatter.result({
  "status": "skipped"
});
});