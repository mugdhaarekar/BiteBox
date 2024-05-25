import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Hey there!!</h2>
      <User name={"Mugdha.Rajendra.Arekar (funct)"} />
      <UserClass
        name={"Mugdha.Rajendra.Arekar (class)"}
        location={"Bengaluru"}
      />
    </div>
  );
};

export default About;
