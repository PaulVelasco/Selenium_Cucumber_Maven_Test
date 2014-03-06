$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/runtime/java/test/cukes.feature");
formatter.feature({
  "id": "cukes",
  "description": "",
  "name": "Cukes",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 184000,
  "status": "passed"
});
formatter.scenario({
  "id": "cukes;in-the-belly",
  "description": "",
  "name": "in the belly",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I have 5 cukes in the belly",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "Stepdefs.I_have_cukes_in_the_belly(int)"
});
formatter.result({
  "duration": 170828000,
  "status": "passed"
});
formatter.uri("cucumber/runtime/java/test/french-iso-8859-1-cukes.feature");
formatter.feature({
  "id": "cukes",
  "description": "",
  "name": "Cukes",
  "keyword": "Fonctionnalité",
  "line": 3,
  "comments": [
    {
      "value": "# language: fr",
      "line": 1
    },
    {
      "value": "# encoding: ISO-8859-1",
      "line": 2
    }
  ]
});
formatter.before({
  "duration": 39000,
  "status": "passed"
});
formatter.scenario({
  "id": "cukes;in-the-belly",
  "description": "",
  "name": "in the belly",
  "keyword": "Scénario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I have 5 cukes in the belly",
  "keyword": "Étant donné ",
  "line": 5
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "Stepdefs.I_have_cukes_in_the_belly(int)"
});
formatter.result({
  "duration": 13183000,
  "status": "passed"
});
formatter.uri("cucumber/runtime/java/test/scenario.feature");
formatter.feature({
  "id": "scenario-information-is-available-during-step-execution",
  "description": "",
  "name": "Scenario information is available during step execution",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "scenario-information-is-available-during-step-execution;my-first-scenario",
  "description": "",
  "name": "My first scenario",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I am running a scenario",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I try to get the scenario name",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "The scenario name is \"My first scenario\"",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "ScenarioStepDefs.i_am_running_a_scenario()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "ScenarioStepDefs.i_try_to_get_the_scenario_name()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My first scenario",
      "offset": 22
    }
  ],
  "location": "ScenarioStepDefs.the_scenario_name_is(String)"
});
formatter.result({
  "duration": 5125000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
  "status": "passed"
});
formatter.scenario({
  "id": "scenario-information-is-available-during-step-execution;my-second-scenario",
  "description": "",
  "name": "My second scenario",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I am running a scenario",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I try to get the scenario name",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "The scenario name is \"My second scenario\"",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "ScenarioStepDefs.i_am_running_a_scenario()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "ScenarioStepDefs.i_try_to_get_the_scenario_name()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My second scenario",
      "offset": 22
    }
  ],
  "location": "ScenarioStepDefs.the_scenario_name_is(String)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.uri("cucumber/runtime/java/test/scenario_outline_substitution.feature");
formatter.feature({
  "id": "scenario-outline-substitution",
  "description": "",
  "name": "Scenario Outline Substitution",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 42000,
  "status": "passed"
});
formatter.scenario({
  "id": "scenario-outline-substitution;email-confirmation;;2",
  "description": "",
  "name": "Email confirmation",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I have a user account with my name \"Jojo Binks\"",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "an Admin grants me Manager rights",
  "keyword": "When ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should receive an email with the body:",
  "keyword": "Then ",
  "line": 5,
  "doc_string": {
    "value": "Dear Jojo Binks,\nYou have been granted Manager rights.  You are now able to manage your employee accounts. Please be responsible.\n-The Admins",
    "line": 6,
    "content_type": ""
  },
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Jojo Binks",
      "offset": 36
    }
  ],
  "location": "SubstitutionStepdefs.I_have_a_user_account_with_my_name(String)"
});
formatter.result({
  "duration": 204000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 19
    }
  ],
  "location": "SubstitutionStepdefs.an_Admin_grants_me_role_rights(String)"
});
formatter.result({
  "duration": 550000,
  "status": "passed"
});
formatter.match({
  "location": "SubstitutionStepdefs.I_should_receive_an_email_with_the_body(String)"
});
formatter.result({
  "duration": 2346000,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
  "status": "passed"
});
formatter.scenario({
  "id": "scenario-outline-substitution;email-confirmation;;3",
  "description": "",
  "name": "Email confirmation",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I have a user account with my name \"Jojo Binks\"",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "an Admin grants me Admin rights",
  "keyword": "When ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I should receive an email with the body:",
  "keyword": "Then ",
  "line": 5,
  "doc_string": {
    "value": "Dear Jojo Binks,\nYou have been granted Admin rights.  You are able to manage any user account on the system. Please be responsible.\n-The Admins",
    "line": 6,
    "content_type": ""
  },
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Jojo Binks",
      "offset": 36
    }
  ],
  "location": "SubstitutionStepdefs.I_have_a_user_account_with_my_name(String)"
});
formatter.result({
  "duration": 110000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "SubstitutionStepdefs.an_Admin_grants_me_role_rights(String)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.match({
  "location": "SubstitutionStepdefs.I_should_receive_an_email_with_the_body(String)"
});
formatter.result({
  "duration": 212000,
  "status": "passed"
});
});