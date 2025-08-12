
module.exports={
	
	'LinkedIn validation': function (browser) { 
		
	//Store LinkedinHome object in variable
    const home = browser.page.LinkedInHome();
	const linkedInForm = browser.page.LinkedInForm();
	const linkedInNameForm=browser.page.LinkedInNameForm();
	const securityPopUp=browser.page.SecurityPopUp();
		  
	//Navigate to url 
	home.navigate();
	browser.assert.urlEquals('https://www.linkedin.com/');
		  
	//Validate page loaded
	home.expect.element('@logo').to.be.visible;
	home.expect.element('@JoinButton').to.be.visible;
	
	//Click Join Now and assert on url redirected to the registeration form
	home.waitForElementVisible('@JoinButton', 3000).click('@JoinButton');
	browser.assert.urlEquals(linkedInForm.url);
	
	//Construct path for JSON containing credentials
	const path = require('path');
	const credentials = require(path.join(__dirname, '../testdata/SignupData.json'));
	
    // get credentials from file
	const email = credentials.Email;
	const password = credentials.Password;

	// Enter email and password
	linkedInForm.click('@emailField').setValue('@emailField', email);
	linkedInForm.click('@passwordField').setValue('@passwordField', password);
		
	//Click Agree and Join
	linkedInForm.click('@AgreeAndJoinButton');
	
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