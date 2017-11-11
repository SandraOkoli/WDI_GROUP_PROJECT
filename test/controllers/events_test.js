/* globals api, expect, describe, beforeEach, it */

require('../spec_helper');

const Event = require('../../models/event');

describe('Event tests', ()=> {
  describe('GET /api/events', () => {
    it('should return a 200 response', function(done) {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  beforeEach(done => {
    Event.collection.drop();
    done();
  });

  beforeEach(done => {
    Event.create({
      name: 'Party',
      location: {
        lat: 32,
        lng: 34
      },
      type: 'stag',
      description: 'stag party',
      dateTime: '34632',
      owner: 'Dave',
      attendees: 'Sally'
    })
      .then(() => done())
      .catch(done);
  });

  it('should return an array of events', function(done) {
    api
      .get('/api/events')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

});
