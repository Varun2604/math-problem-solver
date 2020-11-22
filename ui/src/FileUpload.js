import React, {Component} from "react";
import './FileUpload.css'
import {Button} from 'react-bootstrap'
class FileUpload extends Component {
  constructor(props) {
    super(props);
    // State to store uploaded file
    this.state = {
      file: null
    };
  }

  // Handles file upload event and updates state
  handleUpload(event) {
    this.setState({
      file: event.target.files[0]
    });
  }

  removeUpload(event) {
    this.setState({
      file: null
    });
  }

  handleSubmit(event) {
    var formdata = new FormData();
    formdata.append("file", this.state.file, "file");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      referrer: "about:client",
      referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
      mode: "cors", // same-origin, no-cors
      credentials: "same-origin", // omit, include
    };
    let self = this;
    fetch("/parse_and_compute", requestOptions)
      .then(response => response.text())
      .then((result) => {
        result = JSON.parse(result);
        self.props.renderSecondView(self.state.file, 
          result.data.parsed_data, 
          result.data.computed_result);
      })
      .catch((error) => {
        console.log('error', error);
      });   
  }

  render() {
    return (
      <div className="file-upload">
        <ImageUploadWrap 
          handleUpload={(e)=>this.handleUpload(e)} 
          image={this.state.file}/>
        <FileUploadContent 
        image={this.state.file}
        removeUpload={(e)=>this.removeUpload(e)} 
        handleSubmit={(e)=>this.handleSubmit(e)} 
        />
      </div>
      );
  }
}

class ImageUploadWrap extends Component {

  render(){
    if(!this.props.image) {
      return (
        <div className="image-upload-wrap">
          <input className="file-upload-input" type='file' 
          onChange={(e) => this.props.handleUpload(e)}
          accept="image/*"/>
          <div className="drag-text">
            <h3>Drag and drop a file or select add Image</h3>
          </div>
        </div>
      );
    }else {
      return null;
    }
  }
}

class FileUploadContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file : props.image
    };
  }

  render(){
    if (this.props.image){
      return (
        <div className="file-upload-content">
          <ImageThumb image={this.props.image} />
          <div className="image-title-wrap">
            <Button variant="danger"  className="file-upload-btn"
            onClick={(e) => this.props.removeUpload(e)}>
              Remove
            </Button>
            <Button variant="success"  className="file-upload-btn"
            onClick={(e) => this.props.handleSubmit(e)}>
              Submit
            </Button>
          </div>
        </div>
      );
    }else{
      return null;
    }
  }
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img className="file-upload-image" src={URL.createObjectURL(image)} alt={image.name} />;
};

export default FileUpload;