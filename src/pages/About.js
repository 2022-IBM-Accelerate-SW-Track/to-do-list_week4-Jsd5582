import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jaime Diaz</div>
            <div className="brief_description">
              Hello everyone, I am a third year software engineering student at Rochester Instiute of Technology in Rochester, NY.
              I enjoy being active outside with my 2 dogs and working on my car.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
