//This page object represent LinkedIn registeration home page

module.exports = {
  // URL of LinkedIn
  url: 'https://www.linkedin.com/',

  // Collection of elements on LinkedIn
  elements: {
    // LinkedIn logo 
    logo: {
      selector: 'a[href="/?trk=guest_homepage-basic_nav-header-logo"]'

    },

    // "Welcome to your professional community" Title
    welcometext: {
      selector: 'h1[data-test-id="hero__headline"]'

    },
	//Join Now Button
	JoinButton: {
      selector: 'a[data-tracking-control-name="guest_homepage-basic_nav-header-join"]'
 
	  
    }
	
  }
};

