$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/GoogloSearch.feature");
formatter.feature({
  "name": "Google search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@GoogleSearch"
    }
  ]
});
formatter.scenario({
  "name": "Search Sénégal on google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.\u003cinit\u003e(GoogleSearch.java:10)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Sénégal\" and hit enter",
  "keyword": "When "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.\u003cinit\u003e(GoogleSearch.java:14)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results for \"Sénégal\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.lahad.stepDefs.GoogleSearch.\u003cinit\u003e(GoogleSearch.java:18)"
});
formatter.result({
  "status": "passed"
});
});