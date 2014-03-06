package com.bdd.SeleniumCucumber;

import cucumber.api.junit.*;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(
		format={"pretty","html:target/cucumber","json-pretty:target/cucumber/cucumber-report.json"},
		features="src/test/resources"
		)

public class CukesRunner {}
