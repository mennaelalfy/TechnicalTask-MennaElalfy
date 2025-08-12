
//This page object represent the store page

module.exports = {
  
  url: 'http://automationpractice.multiformis.com/index.php',

  elements: {
    
    searchField: {
      selector: '#search_query_top'
    },
	
    submitsearchButton: {
      selector: 'button[name="submit_search"]'
    },
   
    productlist: {
      selector: '#product_list'
    }
	
		},
	
};

