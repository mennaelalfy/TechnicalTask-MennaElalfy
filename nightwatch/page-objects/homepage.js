//This page object represent the home page for the webpage, it contains the url and some elements 

module.exports = {
  // URL of the homepage to be loaded in tests
  url: 'http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/',

  // Collection of elements on the homepage you want to work with
  elements: {
    // The logo image element, selected by its src attribute
    logo: {
      selector: 'img[src="images/logo.png"]'
    },

    // The home navigation image element, selected by its src attribute
    navhome: {
      selector: 'img[src="images/nav/home1g.gif"]'
    },
	navcontact: {
      selector: 'a[href="contact.html"]' 
	  
    },
	contactText: {
      selector: 'td.style2 p'
    }
  }
};

