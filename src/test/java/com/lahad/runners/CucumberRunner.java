package com.lahad.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/Features",
        glue = "com.lahad.stepDefs",
        strict = true,
        monochrome = true,
        plugin = {
                "pretty",
                "html:build/reports/tests/test/cucumber-reports/advanced-reports",
                "json:build/reports/tests/test/cucumber-reports/cucumberJsonReport.json"
        }
)
public class CucumberRunner {
}
