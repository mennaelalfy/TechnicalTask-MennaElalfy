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
      selector: 'img[src="images/nav/home1.gif"]'
    },
	navcontact: {
      selector: 'img[src="images/nav/contact1.gif"]' 
	  
    },
	navcompany: {
      selector: 'img[src="images/nav/company1.gif"]' 
	  
    },
	navproducts: {
      selector: 'img[src="images/nav/products1.gif"]' 
	  
    },
	 HLnavhome: {
     selector: 'img[src="images/nav/home1g.gif"]'
    },
	HLnavcontact: {
    selector: 'img[src="images/nav/contact1g.gif"]' 
	  
    },
	HLnavcompany: {
    selector: 'img[src="images/nav/company1g.gif"]' 
	  
    },
	HLnavproducts: {
     selector: 'img[src="images/nav/products1g.gif"]' 
	  
    },
	contactText: {
      selector: 'img[src="images/nav/home1.gif"]'
    }
  }
};

