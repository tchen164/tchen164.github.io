import React from "react";
import "./style.css";
export default class Schedule extends React.Component {

  constructor(props){
    super(props);
    this.state={
      inta:{
        preco:{'1':"Swimming Club Pre-competitive schedule",'2':'游泳俱乐部赛前时间表'},
        co:{'1':"Swimming Club competitive schedule",'2':'游泳俱乐部比赛时间表'},
      }
    }
  }
  render() {
    return (
      <div>
        <div className="table-container">
          <table border="1">
            <thead>
              <tr>
                <th colSpan={8}>{this.state.inta.preco[this.props.language]}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="days">
                <td></td>
                <td>MON</td>
                <td>TUE</td>
                <td>WHE</td>
                <td>THUR</td>
                <td>FRI</td>
                <td>SAT</td>
                <td>SUN</td>
              </tr>
              <tr>
                <td>Group 1</td>
                <td>4:00pm~4:45pm</td>
                <td></td>
                <td>4:00pm~4:45pm</td>
                <td></td>
                <td></td>
                <td>6:00pm~7:00pm </td>
                <td></td>
              </tr>
              <tr>
                <td>Group 2</td>
                <td>4:45pm-5:30pm</td>
                <td></td>
                <td>4.45pm-5.30pm </td>
                <td></td>
                <td></td>
                <td>7:00pm~8:00pm </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <table border="1">
            <thead>
              <tr>
                <th colSpan={8}>{this.state.inta.co[this.props.language]}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="days">
                <td></td>
                <td>MON</td>
                <td>TUE</td>
                <td>WHE</td>
                <td>THUR</td>
                <td>FRI</td>
                <td>SAT</td>
                <td>SUN</td>
              </tr>
              <tr>
                <td>COMP 1</td>
                <td>4:30pm~5:30pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td> </td>
                <td></td>
              </tr>
              <tr>
                <td>COMP 2</td>
                <td>5:30pm~7:30pm</td>
                <td>Thornton</td>
                <td> </td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
