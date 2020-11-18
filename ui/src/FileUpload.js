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
    this.props.renderSecondView(this.state.file);
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