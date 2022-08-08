import React from "react";
import "./styles.css";
export default class Training extends React.Component {



  constructor(props){
    super(props);
    this.state={
      inta:{
        progra:{'1':"Swimming program",'2':'游泳项目'},
        fees:{'1':"Swimming Program Fees (2021-2022)",'2':'游泳项目学费(2021-2022)'},
      }
    }
  }
  render() {
    return (
      <div>
        <div className="training-container">
          <table border="1" className="training-table">
            <thead className="training-thead">
              <tr>
                <th></th>
                <th >{this.state.inta.progra[this.props.language]}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="training-tr">
                <td className="competit-title">Pre-competit</td>
                <td className="competit-description">Primarily a teaching program for new swimmers who want to improve their swim capability and to understand the sport of competitive swimming. The program focuses on instructing stroke basics, developing strength and stamina, and preparing the swimmer for Competitive Level I.</td>

              </tr>
              <tr className="training-tr">
                <td className="competit-title">Competit Level 1</td>
                <td className="competit-description">This program integrates the swimmer into the competitive nature of the sport. There are 2 sessions with pre-competitive and 2 sessions with competitive.</td>

              </tr>
              <tr className="training-tr">
                <td className="competit-title">Competit Level 2</td>
                <td className="competit-description">At this level, the swimmer has attained or is near Regional Swim Standards. This part of the program introduces the swimmer to an increased intensity and training level.</td>

              </tr>
            </tbody>
          </table>

          <table border="1" className="training-table">
            <thead className="training-thead">
              <tr className="training-tr">
                <th></th>
                <th >{this.state.inta.fees[this.props.language]}</th>
              </tr>
            </thead>
            <tbody className="training-tbody">
              <tr className="training-tr">
                <td className="competit-title">Pre-competit</td>
                <td className="competit-description">$100/month</td>

              </tr>
              <tr className="training-tr">
                <td className="competit-title">Competit Level 1</td>
                <td className="competit-description">$150/month</td>

              </tr>
              <tr className="training-tr">
                <td className="competit-title">Competit Level 2</td>
                <td className="competit-description">$200/month</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
