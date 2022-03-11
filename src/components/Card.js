// src/components/Card.js

import React from 'react';

function Card({person}) {
  if((person.sentiment >= -.2 && person.sentiment <= .2) && (person.magnitude >= 0 && person.magnitude <= 1) ){ //neutral
    return(
      <div className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{person.name}</h2>
          <p>Student Rating: {person.rating}</p>
          <p>Google Score: {person.sentiment}</p>
          <p>Google Magnitude: {person.magnitude}</p>
          <p>Review: {person.review}</p>
        </div>
      </div>
    );
  }
  else if((person.sentiment > .5 && person.sentiment <= 1)){ //clearly positive
    return(
      <div className="tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{person.name}</h2>
          <p>Student Rating: {person.rating}</p>
          <p>Google Score: {person.sentiment}</p>
          <p>Google Magnitude: {person.magnitude}</p>
          <p>Review: {person.review}</p>
        </div>
      </div>
    );
  }
  else if((person.sentiment > 0 && person.sentiment <= .5)){ //positive
    return(
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{person.name}</h2>
          <p>Student Rating: {person.rating}</p>
          <p>Google Score: {person.sentiment}</p>
          <p>Google Magnitude: {person.magnitude}</p>
          <p>Review: {person.review}</p>
        </div>
      </div>
    );
  }
  else if((person.sentiment >= -.5 && person.sentiment < 0)){ //negative
    return(
      <div className="tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{person.name}</h2>
          <p>Student Rating: {person.rating}</p>
          <p>Google Score: {person.sentiment}</p>
          <p>Google Magnitude: {person.magnitude}</p>
          <p>Review: {person.review}</p>
        </div>
      </div>
    );
  }
  else if((person.sentiment < -.5 && person.sentiment >= -1)){ //clearly negative
    return(
      <div className="tc bg-red dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{person.name}</h2>
          <p>Student Rating: {person.rating}</p>
          <p>Google Score: {person.sentiment}</p>
          <p>Google Magnitude: {person.magnitude}</p>
          <p>Review: {person.review}</p>
        </div>
      </div>
    );
  }
  else if((person.sentiment <= .1 && person.sentiment >= -.1) ){ //mixed
    return(
      <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{person.name}</h2>
          <p>Student Rating: {person.rating}</p>
          <p>Score: {person.sentiment}</p>
          <p>Magnitude: {person.magnitude}</p>
          <p>Review: {person.review}</p>
        </div>
      </div>
    );
  }
  else{   //unclassified
    return(
      <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{person.name}</h2>
          <p>Student Rating: {person.rating}</p>
          <p>Google Score: {person.sentiment}</p>
          <p>Google Magnitude: {person.magnitude}</p>
          <p>Review: {person.review}</p>
        </div>
      </div>
    );
  }
  
}

export default Card;