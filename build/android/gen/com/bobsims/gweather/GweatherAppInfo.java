package com.bobsims.gweather;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class GweatherAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public GweatherAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
					properties.setString("ti.deploytype", "test");
	}
	
	public String getId() {
		return "com.bobsims.gweather";
	}
	
	public String getName() {
		return "GWeather";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "bob";
	}
	
	public String getUrl() {
		return "http://bobsims.tumblr.com";
	}
	
	public String getCopyright() {
		return "2011 by bob.sims@gmail.com";
	}
	
	public String getDescription() {
		return "Sample app to query Google's undocumented weather API";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "1bec9db9-c5a3-493f-97a4-ef5a1ced15eb";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
