import React from 'react';

const Project2 = () => {
  return (
    <div className="container">
      <h3>Out?</h3>
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-responsive"
            src="http://www.bigredsawmill.com/wp-content/plugins/LayerSlider_wp_3.6/sampleslider/home-imac.png"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>What did I make?</h3>
            <p>
              For our group project we decided to build an application that
              plans your night out.
            </p>
            <h3>What technologies were used?</h3>
            <p>
              Users are able to create an event by searching for a location via
              Google Maps and Google Places or join an event and interact with
              other attendees via comments. I was tasked with testing (using
              Mocha, Chai and Istanbul), creating the comments functionality,
              created two of the RESTful routes and styled the show page.
            </p>
            <div className="logos">
              <i className="devicon-mongodb-plain-wordmark" />
              <i className="devicon-express-original-wordmark" />
              <i className="devicon-angularjs-plain-wordmark" />
              <i className="devicon-nodejs-plain-wordmark" />
              <i className="devicon-sass-original" />
              <i className="devicon-gulp-plain" />
              <i className="devicon-bower-plain-wordmark" />
            </div>
            <a href="#">Launch Project</a>
            <a href="www.github.com">Readme</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
