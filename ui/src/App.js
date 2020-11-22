import React, {Component} from "react";

import './App.css';
import FirstView from './FirstView';
import SecondView from './SecondView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file : null
    };
  }

  renderSecondView(file, parsed_response, compute_response){
    this.setState({ file, parsed_response, compute_response });
  }

  renderFirstView(){
    this.setState({ 
      file : null 
    });
  }
  
  render() {
    let {file} = this.state;
    const renderView = (()=> {
      if(!file){
        return <FirstView renderSecondView={
          (f, parsed_response, compute_response)=>{
            this.renderSecondView(f, parsed_response, compute_response)}
          }/>
      } else{
        return <SecondView image={this.state.file} parsed_response={this.state.parsed_response} 
        compute_response={this.state.compute_response} renderFirstView={()=>{this.renderFirstView()}}/>
      }
    })
    return (
      <div className="App">
        <div className="App-header container">
        {renderView()}         
        </div>
      </div>
    );
  }
}


export default App;
