import React, {Component} from "react";
import './FrontJumbotron.css'
import {Jumbotron} from 'react-bootstrap'

class FrontJumbotron extends Component {
  render() {
    return (
        <Jumbotron className="front-jumbotron">
        <div className="row">
          <div className="col-xs-6">
            <LogoImage/>
          </div>
          <div className="col-xs-6">
            <h1>Solve your MATH problems in a jiffy!</h1>
          </div>
        </div>
        <p>
            This is a simple application which can solve your math problems for you by just 
            uploading an image of the same. 
        </p>
        </Jumbotron>
      );
  }
}
const LogoImage = ({ image }) => {
  return <img className="file-upload-image logo" src={process.env.PUBLIC_URL + '/logo.png'}  alt="logo" />;
};


export default FrontJumbotron;