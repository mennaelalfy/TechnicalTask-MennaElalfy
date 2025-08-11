
//This page object represent LinkedIn registeration Form

module.exports = {
  // URL of LinkedIn Form page
  url: 'https://www.linkedin.com/signup?trk=guest_homepage-basic_nav-header-join',

  // Collection of elements on LinkedIn Registeration Form
  elements: {
	  
	emailField: {
		selector: '#email-address'
	},
	passwordField: {
		selector: '#password'
	},
	AgreeAndJoinButton: {
		selector: '#join-form-submit'
	}
  	
  }
};

