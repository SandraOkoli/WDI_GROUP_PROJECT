/* globals api, expect, describe, xdescribe, beforeEach, afterEach, it, xit */
require('../spec_helper');
const User = require('../../models/user');

describe('User login tests', () => {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('POST /api/login', () => {
    beforeEach(done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Sandra',
          lastName: 'Okoli',
          email: 'test12345@ga.co',
          avatar: 'http://fillmurray.com/300/300',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end(() => {
          done();
        });
    });

    it('should return a 200 response', done => {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'test12345@ga.co',
          password: 'password'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Welcome back Sandra!');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });
  });
});
