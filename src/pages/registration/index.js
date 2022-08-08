import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";
export default class Registration extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      stepValue: 1,
      inta:{stone:{'1':'Step 1.Personal Information','2':'步骤一：个人信息'},
      stone:{'1':'Step 1.Personal Information','2':'步骤一：个人信息'},
      sttwo:{'1':'Step 2.Parents\' Information','2':'步骤二：父母信息'},
      stthr:{'1':'Step 3.Address','2':'步骤三：地址'},
      stfur:{'1':'Step 4.Choose Your Program','2':'步骤四：选择你的项目'},
      stfiv:{'1':'Step 5.Finish','2':'步骤五：完成'},
      sone:{'1':'Step 1','2':'步骤一'},
      stwo:{'1':'Step 2','2':'步骤二'},
      sthr:{'1':'Step 3','2':'步骤三'},
      sfur:{'1':'Step 4','2':'步骤四'},
      sfiv:{'1':'Finish','2':'完成'},
    }
    }
  }

  handleChoose = (value) => {

    this.setState({ stepValue: value })
  }

  handleNext = (value) => {
    this.setState({ stepValue: value });
  }
  render() {
    const step1 = (
      <div>
        <div className="step-item-title">{this.state.inta.stone[this.props.language]}</div>
        <div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="name">Please Provide Your name :</label>
            </div>
            <div>
              <input type="text" id="name"></input>
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="birth">Please Provide Your birthday :</label>
            </div>
            <div>
              {" "}
              <input type="date" id="birth"  />
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="gender">Your gender :</label>
            </div>
            <div>

              <input type="radio" name="gender" value="1" />
              Male
              <input type="radio" name="gender" value="2" />
              Female
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box"></div>
            <button className="next-btn" onClick={() => { this.handleNext(2) }}>Next</button>
          </div>

        </div>
      </div>
    );


    const step2 = (
      <div>
        <div className="step-item-title">{this.state.inta.sttwo[this.props.language]}</div>
        <div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="fname">Your mother's/father's name :</label>
            </div>
            <div>
              <input type="text" id="fname"></input>
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="fbirth">Your mother's/father's birthday :</label>
            </div>
            <div>
              {" "}
              <input type="date" id="fbirth"  />
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="Email">Email :</label>
            </div>
            <div>

              <input type='Email' />
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box"></div>
            <button className="next-btn" onClick={() => { this.handleNext(3) }}>Next</button>
          </div>

        </div>
      </div>
    );


    const step3 = (
      <div>
        <div className="step-item-title">{this.state.inta.stthr[this.props.language]}</div>
        <div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="streetnum">Street number :</label>
            </div>
            <div>
              <input type="text" id="streetnum"></input>
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="streetname">Street name :</label>
            </div>
            <div>
              {" "}
              <input type="text" id="fbirth" />
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="apt">Apt# :</label>
            </div>
            <div>

              <input type='text' id='apt' />
            </div>
          </div>

          <div className="input-item-box">
            <div className="input-item-label-box">
              <label for="poco">Postal code :</label>
            </div>
            <div>

              <input type='text' id='poco' />
            </div>
          </div>
          <div className="input-item-box">
            <div className="input-item-label-box"></div>
            <button className="next-btn" onClick={() => { this.handleNext(4) }}>Next</button>
          </div>

        </div>
      </div>
    );

    const step4 = (
      <div>
        <div className="step-item-title">{this.state.inta.stfur[this.props.language]}</div>
        <div>

          <div className="input-item-box">
            <div className="input-item-label-box">

            </div>
            <div>
              <div> <input type='radio' name='program' value={1} /> Pre-Competitive</div>
              <div> <input type='radio' name='program' value={2} /> Competitive Level 1</div>
              <div> <input type='radio' name='program' value={3} /> Competitive Level 2</div>
              <div> <input type='radio' name='program' value={4} /> Junior</div>
              <div> <input type='radio' name='program' value={5} /> Senior</div>
            </div>
          </div>



        </div>

        <div className="btn-box" >
          <div className="input-item-label-box"></div>

          <button className="next-btn" onClick={() => { this.handleNext(5) }}>Next</button>


        </div>

      </div>
    );

    const step5 = (
      <div>
        <div className="step-item-title">{this.state.inta.stfiv[this.props.language]}</div>
        <div className="finish-box">


          Congratulations! Welcom to our Family!

        </div>
        <div className="input-item-box">
          <div className="input-item-label-box"></div>
         <Link to="/"><button className="next-btn" >Finish</button></Link>
        </div>
      </div>
    );

    let stepNow = {};
    if (this.state.stepValue === 1) { stepNow = step1; }
    if (this.state.stepValue === 2) { stepNow = step2; }
    if (this.state.stepValue === 3) { stepNow = step3; }
    if (this.state.stepValue === 4) { stepNow = step4; }
    if (this.state.stepValue === 5) { stepNow = step5; }
    return (
      <div>
        <form>
          <div className="step-box">
            <div className="radio-box">
              <input
                className="radio-type"
                type="radio"
                name="step"
                value="1"
                onClick={() => (this.handleChoose(1))}
                checked={this.state.stepValue === 1}
              />{" "}
              <div className="options-text-box">{this.state.inta.sone[this.props.language]}</div>
            </div>

            <div className="radio-box">
              <input
                className="radio-type"
                type="radio"
                name="step"
                value="2"
                onClick={() => (this.handleChoose(2))}
                checked={this.state.stepValue === 2}
              />
              <div className="options-text-box">{this.state.inta.stwo[this.props.language]}</div>
            </div>
            <div className="radio-box">
              <input
                className="radio-type"
                type="radio"
                name="step"
                value="3"
                onClick={() => (this.handleChoose(3))}
                checked={this.state.stepValue === 3}
              />
              <div className="options-text-box">{this.state.inta.sthr[this.props.language]}</div>
            </div>
            <div className="radio-box">
              <input
                className="radio-type"
                type="radio"
                name="step"
                value="4"
                onClick={() => (this.handleChoose(4))}
                checked={this.state.stepValue === 4}
              />
              <div className="options-text-box">{this.state.inta.sfur[this.props.language]}</div>
            </div>
            <div className="radio-box">
              <input
                className="radio-type"
                type="radio"
                name="step"
                value="5"
                onClick={() => (this.handleChoose(5))}
                checked={this.state.stepValue === 5}
              />
              <div className="options-text-box">{this.state.inta.sfiv[this.props.language]}</div>
            </div>
          </div>
        </form>
        <div className="step-content">{stepNow}</div>
      </div>
    );
  }
}
