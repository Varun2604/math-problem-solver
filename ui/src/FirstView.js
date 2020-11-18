import FileUpload from './FileUpload';
import FrontJumbotron from './FrontJumbotron';
import React, {Component} from "react";

class FirstView extends Component {
  render() {
    return (
      <div>
          <FrontJumbotron/>
          <FileUpload renderSecondView={this.props.renderSecondView}/>
      </div>
    );
  }
}

export default FirstView;
