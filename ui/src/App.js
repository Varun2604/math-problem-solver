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

  renderSecondView(file){
    this.setState({ file });
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
        return <FirstView renderSecondView={(f)=>{this.renderSecondView(f)}}/>
      } else{
        return <SecondView image={this.state.file} renderFirstView={()=>{this.renderFirstView()}}/>
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
