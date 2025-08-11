// Must create enviroment varibale for Nightwatch, variable = Nightwatch and Value= Path where Nightwatch installed 
// if env variable did not work try to set it 1st in cmd by 
//set Nightwatch=C:\Automation
//npx nightwatch tests/LinkedInHomeTest.js


module.exports={
	
	'LinkedIn validation': function (browser) { 
		
	//Store LinkedinHome object in variable
    const home = browser.page.LinkedInHome();
	const linkedInForm = browser.page.LinkedInForm();
	const linkedInNameForm=browser.page.LinkedInNameForm();
	const securityPopUp=browser.page.SecurityPopUp();
		  
	//Home page validation
	//Navigate to url and validate on it
	home.navigate();
	browser.assert.urlEquals('https://www.linkedin.com/');
		  
	//Validate on element logo from the page object to be visible
	home.expect.element('@logo').to.be.visible;
	
	//Validate on welcoming text to be visible and equal to certain text
	home.expect.element('@welcometext').to.be.visible;
	home.expect.element('@welcometext').text.to.equal('Welcome to your professional community');
	 
	
	
	//Click Join Now and assert on url redirected to the registeration form
	home.waitForElementVisible('@JoinButton', 3000).click('@JoinButton');
	browser.assert.urlEquals(linkedInForm.url);
	
	//Enter email and password
	const path = require('path');
	const credentials = require(path.join(process.env.Nightwatch, 'testdata', 'SignupData.json'));
	
    // get credentials from file
	const email = credentials.Email;
	const password = credentials.Password;


	// Enter email and password
	linkedInForm.click('@emailField').setValue('@emailField', email);
	linkedInForm.click('@passwordField').setValue('@passwordField', password);
	
	
	
	//Click Agree and Join
	linkedInForm.click('@AgreeAndJoinButton');
	//browser.assert.urlEquals(linkedInNameForm.url);
	
	//Enter first name and last name
	const firstName=credentials.FirstName;
	const lastName=credentials.LastName;
	
	linkedInNameForm.click('@firstnameField').setValue('@firstnameField', firstName);
	linkedInNameForm.click('@lastnameField').setValue('@lastnameField', lastName);
	
	//Click continue
	linkedInNameForm.click('@continueButton');
	browser.pause(5000);
	
	//Security verification
	securityPopUp.expect.element('@securityTitle').to.be.visible;
	securityPopUp.expect.element('@securityTitle').text.to.equal('Security verification');
	
	//End the test
	 browser.end();
	 
	}
	
};