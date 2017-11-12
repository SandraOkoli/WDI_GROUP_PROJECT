/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');
const User = require('../../models/user');

describe('User registration controller tests', () => {

  before(done => {
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

    it('should not be possible to register with an email address that is already registered', done => {
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
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register with a malformed email address', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Sandra',
          lastName: 'Okoli',
          email: 'em',
          avatar: 'http://fillmurray.com/300/300',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register with a password that is < 6 characters', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Bill',
          lastName: 'Murray',
          email: 'sixcharactertest@test.com',
          avatar: 'http://fillmurray.com/300/300',
          password: 'pass',
          passwordConfirmation: 'pass'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register when the password and password confirmation does not match', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Rane',
          lastName: 'Gowan',
          email: 'passwordsdonotmatch@ga.co',
          avatar: 'http://fillmurray.com/300/300',
          password: 'password',
          passwordConfirmation: 'pass'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register without a firstName', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: '',
          lastName: 'Gowan',
          email: 'withoutfirstname@ga.co',
          avatar: 'http://fillmurray.com/300/300',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register without a lastName', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Rane',
          lastName: '',
          email: 'withoutlastname@ga.co',
          avatar: 'http://fillmurray.com/300/300',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register without a email', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Rane',
          lastName: 'Gowan',
          email: '',
          avatar: 'http://fillmurray.com/300/300',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register without a password', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Rane',
          lastName: 'Gowan',
          email: 'withoutpassword@ga.co',
          avatar: 'http://fillmurray.com/300/300',
          password: '',
          passwordConfirmation: 'password'
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

    it('should not be possible to register without confirming a password', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Rane',
          lastName: 'Gowan',
          email: 'withoutpasswordconfirmation@ga.co',
          avatar: 'http://fillmurray.com/300/300',
          password: 'password',
          passwordConfirmation: ''
        })
        .end((err,res)=> {
          expect(res.status).to.eq(500);
          done();
        });
    });

  });
});
