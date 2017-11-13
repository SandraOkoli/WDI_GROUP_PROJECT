/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');

const User = require('../../models/user');


describe('GET /api/users/:id', () => {

  let user;

  beforeEach(done => {
    User.create({
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjuaU0zipmxkwLunwn_H9WMHMWbM4FqwwibmmCveMdoD6DSWN',
      firstName: 'Donald',
      lastName: 'Trump',
      email: 'donald.trump@aol.com',
      password: 'password',
      passwordConfirmation: 'password'
    })
      .then(userData => {
        user = userData;
        done();
      })
      .catch(done);
  });

  afterEach(done => {
    user.collection.drop();
    done();
  });

  it('should return a 200 response', done => {
    api
      .get(`/api/users/${user.id}`)
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return a user object', function(done) {
    api
      .get(`/api/users/${user.id}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });


  it('user objects should have properties: firstName, lastName, email, avatar',  function(done){
    api
      .get(`/api/users/${user.id}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        const firstUser = res.body;
        console.log(res.body);
        expect(firstUser)
          .to.have.property('firstName')
          .and.to.be.a('string');
        expect(firstUser)
          .to.have.property('lastName')
          .and.to.be.a('string');
        expect(firstUser)
          .to.have.property('email')
          .and.to.be.a('string');
        expect(firstUser)
          .to.have.property('avatar')
          .and.to.be.a('string');
        done();
      });
  });


});
