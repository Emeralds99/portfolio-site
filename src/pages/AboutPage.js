import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello, my name is Peter. I'm a full stack web developer with
          experience in Node JS, Express JS, React and MongoDB.
        </p>

        <p>
          I'm constantly trying to learn new things. Currently that includes
          gaining more experience with Express JS and React, as well as lerning
          React Native and Angular.
        </p>

        <p>
          When I'm not learning something new, you can probably find me watching
          weird movies and hanging out with my dog Murphy!
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
