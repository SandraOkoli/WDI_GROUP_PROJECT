/* globals api, expect, describe, xdescribe, beforeEach, afterEach, it, xit */

require('../spec_helper');
const User = require('../../models/user');

const user = new User({
  firstName: 'Dave',
  lastName: 'Bloggs',
  email: 'dave@bloggs.com',
  password: 'password',
  passwordConfirmation: 'password'
});

describe('User Model', function(){
  it('should be invalid if first name is empty', function(done){
    const user = new User();
    user.validate(function(err){
      expect(err.errors.firstName).to.exist;
      done();
    });
  });
  it('should be invalid if the last name is empty', function(done){
    const user = new User();
    user.validate(function(err){
      expect(err.errors.lastName).to.exist;
      done();
    });
  });
  it('should be invalid if the email is empty', function(done){
    const user = new User();
    user.validate(function(err){
      expect(err.errors.email).to.exist;
      done();
    });
  });
  it('should be invalid if passwordHash is empty', function(done){
    const user = new User();
    user.validate(function(err){
      expect(err.errors.passwordHash).to.exist;
      done();
    });
  });
  it('should have a function validatePassword', function(done){

    expect(user.validatePassword).to.be.a('function');
    done();
  });
  it('firstName should be a string', function(done){
    expect(user.firstName).to.be.a('string');
    done();
  });
  it('lastName should be a string', function(done){
    expect(user.lastName).to.be.a('string');
    done();
  });
  it('email should be a string', function(done){
    expect(user.email).to.be.a('string');
    done();
  });
  it('passwordHash should be a string', function(done){
    expect(user.passwordHash).to.be.a('string');
    done();
  });
});
