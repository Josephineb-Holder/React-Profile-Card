import React from 'react';
import './style.css';

function Profile() {
  return (
    <>
      <div id="profile-container">
        <div id="profile-avatar">
          <h3>NJH</h3>
        </div>
        <div id="profile-title">
          <h2>Nyenpandi Josephine B. Holder</h2>
          <small>Programming Student</small>
        </div>
        <div id="profile-bio">
          <p> Entreprenuer, Programming Student</p>
          <div className="btns">
            <Buttons
              text="Facebook"
              icon="assets/facebook.png"
              link="https://colorhunt.co/palette/eac696c8ae7d76582765451f"
            />
            <Buttons
              text="Linkedin"
              icon="assets/linkedin.png"
              link="https://colorhunt.co/palette/eac696c8ae7d76582765451f"
            />
            <Buttons
              text="Github"
              icon="assets/github.png"
              link="https://colorhunt.co/palette/eac696c8ae7d76582765451f"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Buttons({ text, icon, link }) {
  return (
    <>
      <a href={link} target="blank">
        <div className="btn-container">
          <div className="icon-container">
            <img width="20px" src={icon} />
          </div>
          <div className="content-container">
            <h4>{text}</h4>
          </div>
        </div>
      </a>
    </>
  );
}
export default function App() {
  return (
    <>
      <Profile />
    </>
  );
}
