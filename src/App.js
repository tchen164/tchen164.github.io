
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Schedule from "./pages/schedule";
import Training from "./pages/training";
import Registration from "./pages/registration";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Logo from "./logo.svg";
import followpng from "./assets/follow.png"



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '1',
      inti: {
        'home': { '1': 'home', '2': '主页' },
        'schedule': { '1': 'schedule', '2': '日程表' },
        'training': { '1': 'Training', '2': '课程项目' },
        'registration': { '1': 'Registration', '2': '注册' },
        'about': { '1': 'About', '2': '关于我们' },
        'service':{ '1': 'Service', '2': '服务' },
        'contact':{'1': 'Contact', '2': '联系我们'},
        'language':{'1': 'Lanuage', '2': '语言'}
      }
    }
  }

  handleSelect=(event)=>{

    console.log('xuanzede zhi:',event.target.value)
    this.setState({...this.state,language:event.target.value});
    localStorage.setItem('language',event.target.value);
  }

  render() {


    return (
      <Router>
        <div className="App-header">
          <div className="logo">
            <img src={Logo} alt="Smiley face" width="60" height="60" />
          </div>

          <div className="nav-bar">
            <div className="nav">
              <Link to="/"> {this.state.inti['home'][this.state.language]}</Link>
            </div>

            <div className="nav">
              <Link to="/schedule">{this.state.inti['schedule'][this.state.language]}</Link>
            </div>
            <div className="nav">
              <Link to="/training">{this.state.inti['training'][this.state.language]}</Link>
            </div>
            <div className="nav">
              <Link to="/registration">{this.state.inti['registration'][this.state.language]}</Link>
            </div>
            <div className="nav">
              <Link to="/about">{this.state.inti['about'][this.state.language]}</Link>
            </div>
            <div className="nav">
              <Link to="/service">{this.state.inti['service'][this.state.language]}</Link>
            </div>

            <div className="nav">
              <Link to="/contact">{this.state.inti['contact'][this.state.language]}</Link>
            </div>
            <div>
              <label to="group"> {this.state.inti['language'][this.state.language]} : </label>
              <select id="group" value={this.state.language} onChange={this.handleSelect}>
                <option value="1">English</option>
                <option value="2">简体中文</option>
              </select>
            </div>
          </div>
        </div>

        <div className="miu">
          <Switch>
            <Route exact path="/">
              <Home language={this.state.language}></Home>
            </Route>
            <Route path="/schedule">
              <Schedule language={this.state.language}></Schedule>
            </Route>

            <Route path="/training">
              <Training language={this.state.language}></Training>
            </Route>

            <Route path="/registration">
              <Registration language={this.state.language}></Registration>
            </Route>

            <Route path="/about">
              <About language={this.state.language}></About>
            </Route>

            <Route path="/service">
              <Service language={this.state.language}/>
            </Route>

            <Route path="/contact">
              <Contact language={this.state.language}></Contact>
            </Route>
          </Switch>
        </div>

        <div className="Footer">
          <div className="cutt">contact us:</div>

          <div className="cop">
            <div className="cuno">(613)-xxx-xxxx</div>
            <div className="cuem">Swiming_club@gmail.com</div>
          </div>

          <div>
            <img className="followpng" src={followpng} />
          </div>
        </div>
      </Router>
    );
  }
}

