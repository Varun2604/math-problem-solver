import React, {Component} from "react";
import './FrontJumbotron.css'
import {Jumbotron} from 'react-bootstrap'
/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
class FrontJumbotron extends Component {


  render() {
    return (
        <Jumbotron className="front-jumbotron">
        <h1>Solve your MATH problems in a jiffy!</h1>
        <p>
            This is a simple application which can solve your math problems for you by just 
            uploading an image of the same. 
        </p>
        </Jumbotron>
      );
  }
}

export default FrontJumbotron;