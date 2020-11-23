package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions (
		features = {"F:\\Forum\\Create_Post\\src\\test\\java\\Create_Post\\1_COMMUNITY-5.feature"},		
		glue = {"steps"},
		monochrome = true,
		tags = {},
		plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)
 
public class Post_runner {
	
}
