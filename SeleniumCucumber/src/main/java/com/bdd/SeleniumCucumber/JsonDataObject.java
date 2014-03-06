package com.bdd.SeleniumCucumber;

/**
 * this is an example POJO 
 * will need to be refactored  to contain
 * our config data
 *
 */
import java.util.ArrayList;
import java.util.List;
 
public class JsonDataObject {
	
	private String URL ;
	private String EMAIL;
	private String PASSWORD;
	private List<String> list = new ArrayList<String>();
 
	//--------------------getter and setter methods--------------------

	@Override
	public String toString() {
	   return "DataObject [URL=" + URL + ", EMAIL=" + EMAIL + ", PASWORD=" + PASSWORD
			   + ", list="+ list + "]";
	}
	
	public String getURL() {
		return URL;
	}

	public String getEMAIL() {
		return EMAIL;
	}

	public String getPASSWORD() {
		return PASSWORD;
	}

	public List<String> getList() {
		return list;
	}
	
	//------------------------------------------
}//end class