import React from 'react';

const Project1 = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <h3>Muse</h3>
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-responsive"
            src="https://image.ibb.co/dt8V9G/muse_mac.png"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>What did I make?</h3>
            <p>
              An authenticated RESTFUL platform which connects aspiring
              artists/songwriters and producers
            </p>
            <h3>What technologies were used?</h3>
            <p>
              As the app's concept is to connect creative people, I decided to
              implement the Mongoose friends plugin. This allows users to
              create, accept, reject and display pending requests. I also used
              web sockets to create instant messages for users to interact with
              their friends. I decided to add extra functionality to enable
              users to filter via type, genre, location and skill level.
            </p>
            <div className="logos">
              <i className="devicon-mongodb-plain-wordmark" />
              <i className="devicon-express-original-wordmark" />
              <i className="devicon-react-original-wordmark" />
              <i className="devicon-nodejs-plain-wordmark" />
              <i className="devicon-babel-plain" />
              <i className="devicon-webpack-plain-wordmark" />
            </div>
            <a href="https://warm-river-92816.herokuapp.com/">Launch Project</a>
            <a href="http://www.github.com">Readme</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
