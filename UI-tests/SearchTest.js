
module.exports={
	'Search validation': function (browser) {
		
	//Define page object
	const mystore = browser.page.MyStore();
	
	//Navigate to webpage, Validate its homepage,  wait for searchField element to appear
	mystore.navigate();
	browser.assert.urlEquals(mystore.url);
	mystore.waitForElementVisible('@searchField', 5000);
	
	//Type in to the field and click submit search
	mystore.click('@searchField').setValue('@searchField', 'Dress');
	mystore.click('@submitsearchButton');
	
	//wait till serach results visible
	mystore.waitForElementVisible('@productlist');
	
	// Once visible, call validateSearch
      validateSearch(browser);
	 
	}
};

function validateSearch(browser) {
  let nonDressItems = [];

  browser.elements('css selector', '#product_list > li', function (result) {
    const count = result.value.length;
    let processedCount = 0;

    for (let i = 0; i < count; i++) {
      const nameSelector = `#product_list > li:nth-child(${i + 1}) .product-name`;

      browser.getText(nameSelector, function (textResult) {
        const productName = textResult.value.trim();

        if (!productName.toLowerCase().includes('dress')) {
          nonDressItems.push(productName);
        }

        processedCount++;

        if (processedCount === count) {
          if (nonDressItems.length > 0) {
            const itemList = nonDressItems.map((item, idx) => `${idx + 1}. ${item}`).join(' | ');
            browser.assert.fail(
              `Found ${nonDressItems.length} non-dress item(s): ${itemList}`
            );
          } else {
            browser.assert.ok(true, 'All items contain "dress" in the name.');
          }
        }
      });
    }
  });
}


	
	
	
	
	
	
