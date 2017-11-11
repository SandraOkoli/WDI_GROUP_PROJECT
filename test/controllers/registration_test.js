/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');
const User = require('../../models/user');

describe('User registration controller tests', () => {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  describe('POST /api/register', () => {
    it('should return a 201 response', done => {
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
        .end((err,res)=> {
          expect(res.status).to.eq(201);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Welcome Sandra!');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });


  });
});
