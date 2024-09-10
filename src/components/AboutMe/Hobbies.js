// src/components/AboutMe/Hobbies.js

import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title">Hobbies & Interests</h2>
      <div className="hobbies-content">
        <div className="hobby-item">
          <h3>🎸 Music Enthusiast</h3>
          <p>
            When I’m not coding, you’ll probably find me strumming my guitar or
            trying to master a new instrument. I believe music is the perfect
            companion for brainstorming and debugging—it’s like having a code
            review with a beat!
          </p>
        </div>
        <div className="hobby-item">
          <h3>🚴‍♂️ Cycling Adventures</h3>
          <p>
            I love hitting the trails on my bike, enjoying nature, and
            challenging myself. It’s my way of ensuring that my creativity flows
            as freely as my wheels spin. Plus, cycling helps keep the code
            running smoothly—if you know what I mean!
          </p>
        </div>
        <div className="hobby-item">
          <h3>📚 Avid Reader</h3>
          <p>
            Whether it’s tech blogs, sci-fi novels, or just the latest industry
            news, I’m always buried in a good book. Reading fuels my curiosity
            and keeps me updated on the latest tech trends and storytelling
            techniques.
          </p>
        </div>
        <div className="hobby-item">
          <h3>🍳 Culinary Experiments</h3>
          <p>
            Cooking is my way of debugging life’s recipes. From experimenting with
            new cuisines to perfecting my grandma’s secret sauce, the kitchen is
            my playground. Plus, a well-fed developer is a happy developer!
          </p>
        </div>
        <div className="hobby-item">
          <h3>🐶 Dog Lover</h3>
          <p>
            I’m a passionate dog lover, especially when it comes to the majestic
            Caucasian Shepherd. These gentle giants are not just pets; they’re
            family! My love for dogs inspired me to develop an app called
            Pawlsar. This app is a one-stop solution for everything dog-related:
            tracking their adventures, finding the best pet services, and
            connecting with fellow dog enthusiasts. It’s like having a personal
            dog handler in your pocket!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
