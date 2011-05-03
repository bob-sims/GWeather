(function() {
	Gweather.UI = {};
		
	Gweather.UI.createAppWindow = function(){
		
		var wx_location = "warsaw,poland";
			    
		var tabGroup = Ti.UI.createTabGroup();
		
		var main = Ti.UI.createWindow();

		var actInd = Titanium.UI.createActivityIndicator({
		bottom:10, 
		height:50,
		width:10,
		message:'Loading weather info...',
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
		});
		actInd.show();

		var xhr = Titanium.Network.createHTTPClient();
		
		xhr.onload = function()
		{
			Ti.API.info('GWeather xml ' + this.responseXML + ' text ' + this.responseText);
			var doc = this.responseXML.documentElement;
			
			// create the table array
			var data = [];
		
			//create location table section
			var info = doc.getElementsByTagName("forecast_information");
			
			data.push({title:'Location',font:{fontSize:18,fontWeight:'bold'},backgroundImage:'bgblue.png'});
			var wx_time_array = info.item(0).getElementsByTagName("current_date_time").item(0).getAttribute("data").split(" ");
			var wx_timestamp_array = wx_time_array[1].split(":");
			var wx_date_array = wx_time_array[0].split("-");

			//ok, someone tell me... how to use .split() method w/o creating a bunch of disposable variables? 
			data.push({
				title:info.item(0).getElementsByTagName("city").item(0).getAttribute("data")+
					"\nData current as of "+wx_timestamp_array[0]+":"+wx_timestamp_array[1]+" on "+wx_time_array[0],
				font:{fontSize:16,fontWeight:'normal'}
				});
				
			//create current conditions section
	        var current = doc.getElementsByTagName("current_conditions");
	        
			data.push({title:'Current Conditions',font:{fontSize:18,fontWeight:'bold'},backgroundImage:'bgblue.png'});			
			data.push({
				title:current.item(0).getElementsByTagName("condition").item(0).getAttribute("data")+"\n"+
				"Temp: "+current.item(0).getElementsByTagName("temp_f").item(0).getAttribute("data")+"F/"+
				current.item(0).getElementsByTagName("temp_c").item(0).getAttribute("data")+"C\n"+
				"Humdity: "+current.item(0).getElementsByTagName("humidity").item(0).getAttribute("data")+"\n"+
				"Wind: "+current.item(0).getElementsByTagName("wind_condition").item(0).getAttribute("data"),
				leftImage:"http://www.google.com"+current.item(0).getElementsByTagName("icon").item(0).getAttribute("data"),
				font:{fontSize:16,fontWeight:'normal'}
				});
			
			//Titanium.UI.createAlertDialog({title:'Hey!',message:wx_date_array[0]}).show();
	        
	        //create forecast sections
	        var forecast = doc.getElementsByTagName("forecast_conditions");

			data.push({title:'Forecast',font:{fontSize:18,fontWeight:'bold'},backgroundImage:'bgblue.png'});
	        for (var i = 0; i < forecast.length; i++) {
	        	
	        	data.push({
					title:forecast.item(i).getElementsByTagName("day_of_week").item(0).getAttribute("data")+": "+
					forecast.item(i).getElementsByTagName("condition").item(0).getAttribute("data")+"\n"+
					"Hi/Lo: "+forecast.item(i).getElementsByTagName("high").item(0).getAttribute("data")+"F/"+
					forecast.item(i).getElementsByTagName("low").item(0).getAttribute("data")+"F",
					leftImage:"http://www.google.com"+forecast.item(i).getElementsByTagName("icon").item(0).getAttribute("data"),
					font:{fontSize:16,fontWeight:'normal'}
					}); 

	        }
		actInd.hide();
		var table = Titanium.UI.createTableView({data:data});
		main.add(table);
		};


		// open the client
		xhr.open('GET','http://www.google.com/ig/api?hl=en&weather='+wx_location);
		
		// send the data
		xhr.send();

		var tab = Ti.UI.createTab({  
		    icon:'light_burst.png',  
    		title:'GWeather',  
		    window:main  
		});
		
		// add the tab to the tab group  
		tabGroup.addTab(tab);  

		return tabGroup.open();

	};
	
	
})();
