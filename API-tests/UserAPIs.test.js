const request = require('supertest');
const { expect } = require('chai');
const assert = require('assert');
 
const baseURL = 'http://localhost:3000';
 
let savedToken; 
const invalidToken = 'invalidtoken123';


  // CREATE USER
  describe('CREATE USER', function () {
	  
  //valid body
  it('should create a user and return a token', async function () {
    const response = await request('http://localhost:3000')
      .post('/api/v1/users')
      .send({
        name: 'user',
        email: 'el_alfy_me@gmail.com',
        password: 'user123'
      });
  
    assert.ok(response.body.token, 'Token does not exist in the response');
	assert.strictEqual(response.status, 200, `Expected: 200, Actual: ${response.status}`);
	assert.strictEqual(response.body.message, 'User registered with success', `Expected: User registered with success, Actual: ${response.body}`);
  });
 
  //invalid body
  it('should fail to create user - invalid body', async function () {
    const response = await request(baseURL)
      .post('/api/v1/users')
      .send({
        name: '',           
        email: 'invalidemail',   
        password: ''        
      });
 
	assert.strictEqual(response.status, 401, `Expected: 401, Actual: ${response.status}`);
	assert.strictEqual(response.body.messge, 'Invalid body', `Expected: Invalid body, Actual: ${response.body.message}`);
  });
  
});

// AUTHENTICATE USER
  describe('AUTHENTICATE USER', function () {
	  
  //valid body
  it('should return a token for a user valid credentials', async function () {
    const response = await request(baseURL)
      .post('/api/v1/auth')
      .send({
        email: 'el_alfy_me@gmail.com',
        password: 'user123'
      });  
  
	assert.strictEqual(response.status, 200, `Expected: 200, Actual: ${response.status}`);
    assert.ok(response.body.token, 'Token does not exist in the response');
    savedToken = response.body.token; // Save token for later use
    console.log('token:', savedToken);
  });
  
  //invalid email and password
  it('should fail with invalid body', async function () {
    const response = await request(baseURL)
      .post('/api/v1/auth')
      .send({
        email: 'invalid@gmail.com',
        password: 'invalidpassword'
      });
	assert.strictEqual(response.status, 401, `Expected: 401, Actual: ${response.status}`);
	assert.strictEqual(response.body.message, 'Incorrect email or password', `Expected: 'Incorrect email or password, Actual: ${response.body.message}`);
  });
  
    //invalid body
  it('should fail with invalid body', async function () {
    const response = await request(baseURL)
      .post('/api/v1/auth')
      .send({
        wrongemail: 'el_alfy_me@gmail.com',
        password: 'user123'
      });
	assert.strictEqual(response.status, 401, `Expected: 401, Actual: ${response.status}`);
	assert.strictEqual(response.body.message, 'Incorrect email or password', `Expected: 'Inavlid body, Actual: ${response.body.message}`);
  });
});

// GET USER BY TOKEN
describe('GET USER BY TOKEN', function () {
	
  // Valid Authorization Test
  it('should get user details using token', async function () {
    const response = await request(baseURL)
      .get('/api/v1/users')
      .set('Authorization', savedToken); 
	
	assert.strictEqual(response.status, 200, `Expected: 200, Actual: ${response.status}`);
	assert.ok(response.body.id, 'User id does not exist');
	assert.strictEqual(response.body.name, 'user', `Expected: user, Actual: ${response.body.name}`);
	assert.strictEqual(response.body.email, 'el_alfy_me@gmail.com', `Expected: el_alfy_me@gmail.com, Actual: ${response.body.email}`);
	assert.strictEqual(response.body.password, 'user123', `Expected: user123, Actual: ${response.body.password}`);
	assert.strictEqual(response.body.imageUrl, "https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg");
    console.log('Actual Response:', response.body);
  });
  // Invalid Authorization Test
  it('should fail to get user details - invalid token', async function () {
    const response = await request(baseURL)
      .get('/api/v1/users')
      .set('Authorization', invalidToken);
 
	assert.strictEqual(response.status, 403, `Expected: 403, Actual: ${response.status}`);
	assert.strictEqual(response.body.message, 'Unauthorized', `Expected: Unauthorized, Actual: ${response.body.email}`);
    console.log('Actual Response:', response.body);
  });
});

// PATCH USER BY TOKEN
describe('PATCH USER BY TOKEN', function () {
	
   // valid token - valid body
  it('should update user details - valid token - valid body', async function () {
    const response = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', savedToken)
      .send({
        name: 'newName',
        email: 'new_email@gmail.com',
        password: 'newpassword123'
      });
 
    assert.strictEqual(response.status, 200, `Expected status 200 but, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'User updated with success!', `Expected: User updated with success!, Actual: ${response.body.message}`);
	
   // Authenticate to get the updated token
   const authRes = await request(baseURL)
    .post('/api/v1/auth')
    .send({
      email: 'new_email@gmail.com',
      password: 'newpassword123'
    });

  //Update savedToken with the updated token
  savedToken = authRes.body.token;
  console.log('Updated savedToken:', savedToken);
  
  });
	
  // valid token - invalid body
  it('should fail to update user - valid token - invalid body', async function () {
    const response = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', savedToken)
      .send({
        wrongname: '',       
        email: 'invalidemail',  
        password: ''    
      });
 
    assert.strictEqual(response.status, 401, `Expected status 401, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'Invalid body', `Expected: Invalid body, Actual: ${response.body.message}`);
	
    });
	
 
  // invalid token - valid body
  it('should fail to update user - invalid token - valid body', async function () {
    const response = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', invalidToken)
      .send({
        name: 'newName',
        email: 'new_email@gmail.com',
        password: 'newpassword123'
      });
 
    assert.strictEqual(response.status, 403, `Expected status 403, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'jwt malformed', `Expected: jwt malformed, Actual: ${response.body.message}`);
  });
 
  // invalid token - invalid body 
  it('should fail to update user - invalid token - invalid body', async function () {
    const response = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', invalidToken)
      .send({
        wrongname: '',       
        email: 'invalidemail',  
        password: ''    
      });
 
    assert.strictEqual(response.status, 403, `Expected status 403, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'jwt malformed', `Expected: jwt malformed, Actual: ${response.body.message}`);
  });
  
});

 
// DELETE USER BY TOKEN
  describe('DELETE USER BY TOKEN', function () {
  // valid token
  it('should delete user - valid token', async function () {
    const response = await request(baseURL)
      .delete('/api/v1/users')
      .set('Authorization', savedToken); 
 
    assert.strictEqual(response.status, 200, `Expected status 200, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'User deleted with success', `Expected message User deleted with success, Actual '${response.body.message}'`);
  });
 
  // invalid token
  it('should fail to delete user - invalid token', async function () {
    const response = await request(baseURL)
      .delete('/api/v1/users')
      .set('Authorization', invalidToken);
 
    assert.strictEqual(response.status, 403, `Expected status 403, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'Unauthorized to delete', `Expected message Unauthorized to delete, Actual '${response.body.message}'`);
  });
});

// DELETE ALL USERS
describe('DELETE ALL USERS', function () {
  // valid admin key
  it('should delete all users with valid admin key', async function () {
    const response = await request(baseURL)
      .delete('/api/v1/all-users')
      .send({
        key_admin: 'keyadmin123'
      });
 
    assert.strictEqual(response.status, 200, `Expected status 200, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'Users deleted with success', `Expected message Users deleted with success, Actual '${response.body.message}'`);
  });
 
  // invalid admin key
  it('should fail to delete all users with invalid admin key', async function () {
    const response = await request(baseURL)
      .delete('/api/v1/all-users')
      .send({
        key_admin: 'wrongadminkey'
      });
 
    assert.strictEqual(response.status, 403, `Expected 403 status , Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'Unauthorized access', `Expected message Unauthorized access, Actual '${response.body.message}'`);
  });
 
  // invalid body
  it('should fail to delete all users when admin key is missing', async function () {
    const response = await request(baseURL)
      .delete('/api/v1/all-users')
      .send({});
 
    assert.strictEqual(response.status,403, `Expected 403 status, Actual ${response.status}`);
    assert.strictEqual(response.body.message, 'Unauthorized access', `Expected Unauthorized access, Actual '${response.body.message}'`);
  });
});




