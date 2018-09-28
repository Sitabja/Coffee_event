import React, { Component } from 'react';
import Header from './Component/Header/Header'
import ToolBar from './Component/ToolBar/ToolBar'
import ResultPanel from './Component/ResultPanel/ResultPanel'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedLocation:"",
      searchKey:""
    }
    this.selectLocation = this.selectLocation.bind(this)
    this.searchByKey = this.searchByKey.bind(this)
  }
  selectLocation(location,e){
    this.setState({
      selectedLocation:location
    })
  }
  searchByKey(val,e){
    this.setState({
      searchKey : val
    })
  }
  render() {
    const {selectedLocation, searchKey} = this.state
    return (
      <div className="App-container">
        <div className="App">
          <Header/>
          <div className='toolbar-container'>
            <ToolBar selectLocation={this.selectLocation} searchByKey={this.searchByKey}/>
          </div>
          <ResultPanel selectedLocation={selectedLocation} searchKey={searchKey}/>
        </div>
      </div>
    );
  }
}

export default App;
