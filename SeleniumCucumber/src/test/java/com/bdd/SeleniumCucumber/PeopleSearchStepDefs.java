package com.bdd.SeleniumCucumber;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import cucumber.api.java.*;
import cucumber.api.java.en.*;


public class PeopleSearchStepDefs {
	protected WebDriver driver;
	
	@Before()
	public void setUp() {
		driver = new ChromeDriver();
	}
	
	@Given("^the user is on search people page$")
	public void The_user_is_on_search_people_page() {
		driver.get("http://randstad.com/search");		
	}
	@When("he enters \"([^\"]*)\" as employee last name")
	public void He_enters_employee_last_name(String employeeName){
		driver.findElement(By.id("employee")).sendKeys(employeeName);
	}
	@And("he sumbits search request")
	public void He_submits_search_request(){
		driver.findElement(By.id("search")).click();	
	}
	@Then("ensure list of employees with last name \"([^\"]*)\" is presented")
	public void Ensure_list_of_employees_with_last_name_presented(String employeeName){
		//TODO verify that correct list of employee names is given
	}

}
