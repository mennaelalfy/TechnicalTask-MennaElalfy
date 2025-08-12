# TechnicalTask-MennaElalfy
## UI TESTS
### Prerequisites
Install NightwatchJS https://nightwatchjs.org/ 

1. Clone the repository.  
2. Open the Command Line from repository's root directory. 
3. Run the following command to initialize NightwatchJS: `npm init nightwatch`  
4. To complete setting up options showed in cmd, follow guidance in https://nightwatchjs.org/  
5. Run **homepageTest** by running the command: `npx nightwatch UI-tests/homepageTest.js`  
6. HTML report having the test cases results will be generated in the following directory: `tests_output\nightwatch-html-report`  
7. Run **LinkedInHomeTest** by running the command: `npx nightwatch UI-tests/LinkedInHomeTest.js`  
8. HTML report having the test cases results will be generated in the following directory: `tests_output\nightwatch-html-report`  
9. Run **SearchTest** by running the command: `npx nightwatch UI-tests/SearchTest.js`  
10. HTML report having the test cases results will be generated in the following directory: `tests_output\nightwatch-html-report`  
11. Previous generated reports from previous runs are in the following directory: `DOCUMENTATION\Deliverables-HTML-WebReports`  

## API TESTS
### Prerequisites
Install Mock-User-Auth using https://www.npmjs.com/package/mock-user-auth/
Install Supertest using https://www.npmjs.com/package/supertest/
Install Mocha test runner
 - Open command line from repository's root directory and Run the command `npm install --save-dev mocha` 
Install mochawesome
  -Open command line from repository's root directory and Run the command `npm install --save-dev mochawesome` 

1. Clone the repository.  
2. Open the Command Line from repository's root directory
4. Start the server by the following command and do not close the cmd: `npm run dev` 
5. keep the previously opened cmd and open another one from repository's root directory.
6. Run **UserAPIs.test** and generate HTML report for the test results using mochawesome by running the command: 
`npx mocha API-tests\UserAPIs.test.js --reporter mochawesome` 
7. HTML report having the test cases results will be generated in the following directory: `mochawesome-report\mochawesome.html`  
