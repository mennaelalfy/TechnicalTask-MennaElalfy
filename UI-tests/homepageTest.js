/*This test opens the web page and checks that the web page is loaded by 3 validations,
validating that url is correct to check that no redirection happened,
validate on the logo ad on the navhome element then navigates to contact navigation page and assert on a special element in it.*/

module.exports={
	'Flow validation': function (browser) {
		
	//Store homepage object in variable
    const homePage = browser.page.homepage();
		  
	//Open the URL in the page object and Validate on page loaded
	homePage.navigate().waitForElementVisible('@HLnavhome', 5000).expect.element('@HLnavhome').to.be.visible;
		  
	// Validate the page URL
	browser.assert.urlEquals('http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/');
	

		  
	//Navigate to contact tab 
	homePage.waitForElementVisible('@navcontact', 3000).click('@navcontact');
		  
	// Validate on element conatct navigation page name only highlighted 
	
	homePage.waitForElementVisible('@HLnavcontact', 5000).expect.element('@HLnavcontact').to.be.visible;
	
	homePage.waitForElementVisible('@navhome', 5000).expect.element('@navhome').to.be.visible;
	homePage.waitForElementVisible('@navcompany', 5000).expect.element('@navcompany').to.be.visible;
	homePage.waitForElementVisible('@navproducts', 5000).expect.element('@navproducts').to.be.visible;
	
	
	//Click back
	browser.back();
	
	//Assert user at home page, image home only highlighted
	
	homePage.waitForElementVisible('@HLnavhome', 5000).expect.element('@HLnavhome').to.be.visible;
	
	homePage.waitForElementVisible('@navcompany', 5000).expect.element('@navcompany').to.be.visible;
	homePage.waitForElementVisible('@navproducts', 5000).expect.element('@navproducts').to.be.visible;
	homePage.waitForElementVisible('@navcontact', 5000).expect.element('@navcontact').to.be.visible;
	
	
	//End the test
	 browser.end();
	 
	}
	
};
