package com.bdd.SeleniumCucumber;

/**
 * 
 * @author Brynette Stewart, Gerson Lobos, stephen conklin,
 * this class will handle reading the json configuration
 * file located in the root of caseleniumtest dir tree
 * 
 * @date February 12, 2014 
 *
 */

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import com.google.gson.Gson;
import java.util.List;

public class SsJsonHandler<DataObject> {

	private static String jsonFilePath = "jsonConfData.json";
	
	
	// TODO add private data variables
	private static JsonDataObject DataObject = new JsonDataObject();
	
	// This is the constructor.........
	
	// method to verify initial setup
	public String junkMethod() {
		String tstString = "test";
		return tstString;
	}

	// TODO add method to read json file 
	// FIXME this method needs to be fixed, only example now
	
	public void readJsonFile() {

		Gson gson = new Gson();

		try {
			BufferedReader br = new BufferedReader(new FileReader(jsonFilePath));
			
			DataObject = gson.fromJson(br, JsonDataObject.class);
			
		} catch (IOException e) {
			e.printStackTrace();
		}

		
	}
	//******************************************************

	// TODO add method to populate private variables
	// TODO add 'accessor' methods for private variables
	public String getURL(){
		return DataObject.getURL();
	}
	public String getEMAIL(){
		return DataObject.getEMAIL();
	}
	public String getPASSWORD(){
		return DataObject.getPASSWORD();
	}
	public List<String> getLIST() {
		return DataObject.getList();
	}
}//end class
