
//This page object represent LinkedIn User Name Form

module.exports = {
  // URL of LinkedIn Form page
  url: 'https://www.linkedin.com/signup?trk=guest_homepage-basic_nav-header-join',

  // Collection of elements on LinkedIn User Name Form
  elements: {
	  
	firstnameField: {
		selector: '#first-name'
	},
	lastnameField: {
		selector: '#last-name'
	},
	continueButton: {
		selector: '#join-form-submit'
	}
  	
  }
};

