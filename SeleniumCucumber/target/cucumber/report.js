$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PeopleSearch.feature");
formatter.feature({
  "id": "people-search",
  "description": "As a regular employee \nI can search for other employees \nso that I can find their contact information, title, or photo",
  "name": "People search",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "people-search;search-by-valid-last-name;;2",
  "description": "",
  "name": "Search by valid last name",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "the input Doe exists in the people directory",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the search is performed",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "the output should be Doe",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "people-search;search-by-valid-last-name;;3",
  "description": "",
  "name": "Search by valid last name",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "the input Jones exists in the people directory",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the search is performed",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "the output should be Jones",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "people-search;search-by-valid-last-name",
  "description": "",
  "name": "Search by valid last name",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on search people page",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "he enters \"Doe\" as employee last name",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "he submits search request",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "ensure list of employees with last name \"Doe\" is presented",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "PeopleSearchStepDefs.The_user_is_on_search_people_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 11
    }
  ],
  "location": "PeopleSearchStepDefs.He_enters_employee_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 41
    }
  ],
  "location": "PeopleSearchStepDefs.Ensure_list_of_employees_with_last_name_presented(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "people-search;partial-search-by-valid-last-name",
  "description": "",
  "name": "Partial search by valid last name",
  "keyword": "Scenario",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on the Search People Page",
  "keyword": "Given ",
  "line": 23
});
formatter.step({
  "name": "he enters \"D\" as employee last name",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "he submits request",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "ensure the list of employees with last name starting with D is presented",
  "keyword": "Then ",
  "line": 26
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "D",
      "offset": 11
    }
  ],
  "location": "PeopleSearchStepDefs.He_enters_employee_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "people-search;partial-search-with-non-alphanumeric-characters",
  "description": "",
  "name": "Partial search with non-alphanumeric characters",
  "keyword": "Scenario",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on the search people page",
  "keyword": "Given ",
  "line": 29
});
formatter.step({
  "name": "he enters * as employee last name",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "he submits search request",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "the list of all employees is  presented",
  "keyword": "Then ",
  "line": 32
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "people-search;search-by-invalid-last-name",
  "description": "",
  "name": "Search by invalid last name",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on the Search People Page",
  "keyword": "Given ",
  "line": 35
});
formatter.step({
  "name": "he enters \"Xyz\" as employee last name",
  "keyword": "When ",
  "line": 36
});
formatter.step({
  "name": "he submits request",
  "keyword": "And ",
  "line": 37
});
formatter.step({
  "name": "ensure the failure message \"No records found!\" is presented",
  "keyword": "Then ",
  "line": 38
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Xyz",
      "offset": 11
    }
  ],
  "location": "PeopleSearchStepDefs.He_enters_employee_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "people-search;search-by-department-name",
  "description": "",
  "name": "Search by department name",
  "keyword": "Scenario",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on search people page",
  "keyword": "Given ",
  "line": 41
});
formatter.step({
  "name": "he enters \"Finance\" as department name",
  "keyword": "When ",
  "line": 42
});
formatter.step({
  "name": "he submits search request",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "ensure the list of employees in \"Finance\" department is presented",
  "keyword": "Then ",
  "line": 44
});
formatter.match({
  "location": "PeopleSearchStepDefs.The_user_is_on_search_people_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "people-search;search-by-title",
  "description": "",
  "name": "Search by title",
  "keyword": "Scenario",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on search people page",
  "keyword": "Given ",
  "line": 47
});
formatter.step({
  "name": "he enters \"Manager\" as title",
  "keyword": "When ",
  "line": 48
});
formatter.step({
  "name": "he submits search request",
  "keyword": "And ",
  "line": 49
});
formatter.step({
  "name": "ensure the list of employees with title \"Manager\" is presented",
  "keyword": "Then ",
  "line": 50
});
formatter.match({
  "location": "PeopleSearchStepDefs.The_user_is_on_search_people_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});