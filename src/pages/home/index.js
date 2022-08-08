import React from "react";

import { Link } from 'react-router-dom';
import testvideo from '../../assets/swim.mp4';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';




export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      inta: {
        'lmau': { '1': 'Learn more about us', '2': '更多关于我们' },
        'description': { '1': 'Creating  a  lifelong  passion  for  swimming,  health,  and  fitness.', '2': '培养对游泳、健康和健身的终身热情' }
      }
    };
  }

  render() {
    console.log('home props:', this.props);
    return (
      <div className="video-box">
        <div className="description">{this.state.inta.description[this.props.language]}</div>
        <Link to="/about"> <div className="learnus-btn" >
        {this.state.inta.lmau[this.props.language]}
        </div></Link>
        <video className="video" controls>
          <source src={testvideo} type="video/mp4" />
        </video>

      </div>
    );
  }
}
