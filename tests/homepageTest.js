/*This test opens the web page and checks that the web page is loaded by 3 validations,
validating that url is correct to check that no redirection happened,
validate on the logo ad on the navhome element then navigates to contact navigation page and assert on a special element in it.*/

module.exports={
	'Flow validation': function (browser) {
		
	//Store homepage object in variable
    const homePage = browser.page.homepage();
		  
	//Open the URL in the page object
	homePage.navigate();
		  
	// Validate the page URL
	browser.assert.urlEquals('http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/');
		  
	//Validate on element logo from the homepage page object to be visible
	homePage.waitForElementVisible('@logo', 5000);
	homePage.expect.element('@logo').to.be.visible;
	
	//Validate on element navhome from the homepage page object to be visible
	homePage.expect.element('@navhome').to.be.visible;
		  
	//Navigate to contact tab 
	homePage.waitForElementVisible('@navcontact', 3000).click('@navcontact');
		  
	// Validate on element contactText that identify navigating to contact navigation page
	homePage.expect.element('@contactText').to.be.visible;
	homePage.expect.element('@contactText').text.to.equal('CONTACT ACME CHEMICALS');	

	//Click back
	browser.back();
	
	//Assert user at home page
	// Validate the page URL
	browser.assert.urlEquals(homePage.url);
		  
	//Validate on element logo from the homepage page object to be visible
	homePage.expect.element('@logo').to.be.visible;
	
	
	//End the test
	 browser.end();
	 
	}
	
};
