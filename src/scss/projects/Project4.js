import React from 'react';

const Project4 = () => {
  return (
    <div className="container">
      <h3>Slap a Doll</h3>
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-responsive"
            src="https://image.ibb.co/mxpmrm/slap_a_doll_mac.png"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>What did I make?</h3>
            <p>
              {' '}
              Fed up of the Kardahians? Out of sheer frustration I created my
              own take on Whack a Mole featuring, you have guessed it, the
              Kardashians. Users can select a Kardashian which they have to slap
              before the time runs out.
            </p>
            <h3>What technologies were used?</h3>
            <p>
              {' '}
              I started off building out a simple two by two grid using DOM
              manipulation with jQuery to get the basic functionality working.
              To make the app more scalable, I increased the intensity of the
              game by adding extra functionality such as setting intervals and
              appending list items to increase the grid size each time the
              number of user clicks was equal to the grid base.
            </p>
            <div className="logos">
              <i className="devicon-html5-plain-wordmark" />
              <i className="devicon-css3-plain-wordmark" />
              <i className="devicon-jquery-plain-wordmark" />
              <i className="devicon-php-plain" />
            </div>
            <a href="https://enigmatic-woodland-29313.herokuapp.com/">
              Launch Project
            </a>
            <a href="https://github.com/SandraOkoli/WDI_PROJECT_1">Readme</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;
