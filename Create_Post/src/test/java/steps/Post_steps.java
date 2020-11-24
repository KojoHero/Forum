package steps;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Post_steps {
	
	WebDriver driver;
	@Before()
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\Forum\\Create_Post\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

	}

	@After()
	public void end() {
		driver.manage().deleteAllCookies();
		driver.quit();
		driver.close();
	}
	
	@When("^user navigates to forum$")
	public void user_navigates_to_forum() throws Throwable {
	    driver.get("http://20.52.44.20/auth/login");
	    driver.findElement(By.id("InputEmail")).sendKeys("testing.amalitech@gmail.com");
	    driver.findElement(By.id("InputPassword1")).sendKeys("12345678!Aa");
	    driver.findElement(By.id("signin_button")).click();
	}

	@When("^user should see a popup  to select preferred categories$")
	public void user_should_see_a_popup_to_select_preferred_categories() throws Throwable {
		//click forum on navbar
		Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"__next\"]/div[1]/div/div[1]/div/div/div[2]/a[3]/span")).click();
	    
	    //select categories
	    Thread.sleep(2000);
	    WebElement radio1 = driver.findElement(By.id(""));
	    radio1.click();
	    WebElement radio2 = driver.findElement(By.id(""));
	    radio2.click();
	    WebElement radio3 = driver.findElement(By.id(""));
	    radio3.click();
	    
	    //click on next
	    driver.findElement(By.xpath("")).click();
	}

	@Then("^user should be able to make a post to selected categories$")
	public void user_should_be_able_to_make_a_post_to_selected_categories() throws Throwable {
		//click to make a post
		driver.findElement(By.xpath("")).click();
		
		//enter title
		 driver.findElement(By.id("")).sendKeys("");
		 
		 //enter description
		 driver.findElement(By.id("")).sendKeys("");
		 		 
		 //select categories
		 Thread.sleep(2000);
		 WebElement radio4 = driver.findElement(By.id(""));
		 radio4.click();
		 WebElement radio5 = driver.findElement(By.id(""));
		 radio5.click();
		 
		 //click to post
		 driver.findElement(By.xpath("")).click();
		 
		 
	}

	@Then("^user receives a successful message after post$")
	public void user_receives_a_successful_message_after_post() throws Throwable {
		Thread.sleep(5000);
		String message = driver.findElement(By.xpath("")).getText();
		Assert.assertEquals("Post made successfully", message);
	}


}
