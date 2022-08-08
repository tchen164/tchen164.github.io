import React from "react";
import "./style.css"
import about from '../../assets/our.jpg';
export default class About extends React.Component {
  render() {
    return (
      <div >
        
        <div className="about-content">
          <br />
          <h1>About Us</h1>
          <img src={about} className="about-img" />
          <p className="about-p">Established in the late 1990s, the swimming club has a history of promoting excellence in competitive swimming through a structured program that combines a comprehensive training regimen with regular swim meets.</p>
          <p className="about-p">
            During its history, The swimming club has been run by parent volunteers. Working with the coaches, an elected executive has administered the club's business and committees have handled the many activities of the club. More recently the club has benefited from the work of a part-time team manager who has taken on such roles as communication, registration, treasurer, etc.
          </p>

          <p className="about-p">
            During its history, The swimming club has been run by parent volunteers. Working with the coaches, an elected executive has administered the club's business and committees have handled the many activities of the club. More recently the club has benefited from the work of a part-time team manager who has taken on such roles as communication, registration, treasurer, etc.
          </p>

          <p className="about-p">

            The swimming club has always taken pride in offering a positive environment where every swimmer matters. The club has been kept purposively small so as to allow coaches to focus on both the athletic and social development of EACH swimmer. A small swimmer to coach ratio means extensive individual attention and a close coach-swimmer bond.

          </p>

          <p className="about-p">

            During its history, The swimming club has received both individual and team honors. Swimmers have proudly represented the team at regional, provincial and national level meets often swimming in finals and making the podium. In addition, several members of the club have gone on to swim with university teams. The swimming club has been named top small team numerous times at the Eastern Ontario Regional Championships. The swimming club is currently a thriving club of about 50 swimmers.


          </p>

          <br />




        </div>
      </div>
    );
  }
}
