package com.stepdef;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepdef {
    WebDriver driver = null;
    
    @Before // hooks in cucumber
    public void setup()
    {
    	System.setProperty("webdriver.chrome.driver", "D:\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("file:///D:/javabykiran-Selenium-Softwares/Offline%20Website/index.html");
    }
    
    @After
    public void closeSet()
    {
    	driver.close();
    }
    
	@Given("^user should be on Login page$")
	public void user_should_be_on_Login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("file:///D:/javabykiran-Selenium-Softwares/Offline%20Website/index.html");
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("password")).sendKeys(pass);
		driver.findElement(By.xpath("//button")).click();
	}

	@Then("^user will verify \"([^\"]*)\"$")
	public void user_will_verify(String title) throws Throwable {
      Assert.assertTrue(driver.getTitle().contains(title));
	}
	
	@Then("^user should see JBK logo$")
	public void user_should_see_JBK_logo() throws Throwable {
       WebElement logo = driver.findElement(By.tagName("img"));
       Assert.assertTrue(logo.isDisplayed());
	
	}
	

}
