import React, {Component} from "react";
import {Button, Form} from 'react-bootstrap'
import './SecondView.css';


class SecondView extends Component {
    
    submitParsingFeedback(e){

    }

    submitComputationFeedback(e){

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <Button variant="outline-primary" 
                        onClick={()=>{this.props.renderFirstView()}}>
                            Back
                        </Button>
                    </div>
                    <div className="col-md-10 justify-content-center">
                        <h2>RESULT</h2>
                    </div>
                </div>
                <div className="row">
                    {/* image div*/}
                    <div className="col-md-6 justify-content-center image-container">
                        <ImageView image={this.props.image}/>
                    </div>
                    {/* data div*/}
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Parsed Value from Image</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                    <Button variant="outline-danger" 
                                    onClick={(e)=>{this.submitParsingFeedback(e)}}>
                                        Submit Parsing feedback
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="row justify-content-center">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Result for Image</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                    <Button variant="outline-danger" 
                                    onClick={(e)=>{this.submitComputationFeedback(e)}}>
                                        Submit Computation feedback
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ImageView = ({ image }) => {
    return <img className="render-file" src={URL.createObjectURL(image)} alt={image.name} />;
};

export default SecondView;
