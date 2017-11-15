/* globals api, expect, describe, xdescribe, beforeEach, afterEach, it, xit */

require('../spec_helper');
const Event = require('../../models/event');
const event = new Event({
  name: 'daves birthday',
  location: {
    lat: 34,
    lng: 36
  },
  coverImage: 'www.fillmurray.com/300/200',
  type: 'birthday',
  description: 'a description',
  dateTime: 34243542,
  owner: '430932942',
  attendees: '323423432423423423',
  comments: '3426dgdsf222342342'
});

describe('Event Model',function(){
  it('should be invalid if name is empty', function(done){
    const event = new Event();

    event.validate(function(err){
      expect(err.errors.name).to.exist;
      done();
    });
  });
  it('should be invalid if type is empty', function(done){
    const event = new Event();
    event.validate(function(err){
      expect(err.errors.type).to.exist;
      done();
    });
  });
  it('should be invalid if dateTime is empty', function(done){
    const event = new Event();

    event.validate(function(err){
      expect(err.errors.dateTime).to.exist;
      done();
    });
  });

  it('should be invalid if owner is empty', function(done){
    const event = new Event();

    event.validate(function(err){
      expect(err.errors.owner).to.exist;
      done();
    });
  });

  it('name should be a string', function(done){
    expect(event.name).to.be.an('string');
    done();
  });
  it('location should be an object', function(done){
    expect(event.location).to.be.an('object');
    done();
  });
  it('lat should be an number', function(done){
    expect(event.location.lat).to.be.a('number');
    done();
  });
  it('lng should be an number', function(done){
    expect(event.location.lng).to.be.a('number');
    done();
  });
  it('description should be a string', function(done){
    expect(event.description).to.be.an('string');
    done();
  });
  it('dateTime should be a date', function(done){
    expect(event.dateTime).to.be.a('date');
    done();
  });

  it('attendees should be a string', function(done){
    expect(event.attendees).to.be.a('string');
    done();
  });

});
