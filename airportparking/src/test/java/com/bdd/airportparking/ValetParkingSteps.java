package com.bdd.airportparking;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;


public class ValetParkingSteps {

	int min=0;
	@When("^I park my car in the Valet Parking for (\\d+) minutes$")
	public void I_park_my_car_in_the_Valet_Parking_for_minutes(int arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	 min =arg1;
	 double rate=0;
	 if (min!= 0){
		 assert(true);
		 System.out.println("min"+ min);
		
		 
	 }
	 else{
		assert(false);
	 }
		
	    throw new PendingException();
	}

	@Then("^I will have to pay \\$(\\d+)$")
	public void I_will_have_to_pay_$(int arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		
		 if(min!=0){
			 min = min *arg1;
			 assert(true);
		 }
		 else{}
		 
			System.out.println(min);
	    throw new PendingException();
	}
}
