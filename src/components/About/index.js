import React from 'react';
import PlaceHolder from "../../assets/projects-pics/Male-placeholder.jpeg"

function About() {
  return (
    <section>
      <h2 className=" about-title page-title">
        <span>About Me</span>
      </h2>
      <div className="about-info flex-row">
      <img src={PlaceHolder}  alt="placeholder" class="center">
      </img>
      <p className="self-description">
      My name is Emmanuel Garcia, a full stack web developer. Attending the University of Utah's Full Stack Developer boot camp program. 
      Throughout the program I learned proficencies in HTML, CCS, JavaScript, RESTful API's, SQL, MongoDB, Express.JS, Node.JS, SPA's. I have 10 years in banking,
      and excited to add web developement to my bailiwick. 
      </p>       
      </div>
    </section>
  );
}

export default About;