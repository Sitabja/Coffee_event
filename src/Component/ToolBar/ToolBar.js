import React, { Component } from 'react';
import {Search, Close, Location} from '../../Utils/Svg.js';
import PropTypes from 'prop-types';
import './ToolBar.css';

export default class ToolBar extends Component {
    constructor(props){
        super(props)
        this.state={
            location: "",
            searchKey : "",
        }

        this.onSearchChange = this.onSearchChange.bind(this)
    }
    onlocationClick(location,e){
        this.setState({
            location: location
        })
        this.props.selectLocation(location);
    }
    closeSelection(ele,e){
        this.setState({
            [ele]:""
        },()=>{this.props.selectLocation(this.state.location)})
        
    }
    onSearchChange(e){
        let val = e.target.value
        this.setState({
            searchKey : val
        })
        this.props.searchByKey(val)
    }

    render() {
        const {location} = this.state
        return (
            <div className="toolbar-wrapper">
                <div className="filter-wrapper">
                    <div className="filter">
                        <div className="btn-icon"><Location width='24' height='24' fillIcon='#ddd'/></div>
                        <div className={location ? 'remove-text' : 'btn'}>Location</div>    
                        <div className="filter-content">
                            <li onClick={()=>this.onlocationClick("Dublin")}>Dublin</li>
                            <li onClick={()=>this.onlocationClick("New York")}>New York</li>
                        </div>
                    </div>
                    {location ? 
                        <span className='selected-location'>{location}
                            <i onClick={(e)=> this.closeSelection("location",e)}>
                                <Close width={24} height={24} fillIcon="black"/>
                            </i>
                        </span> : null
                    }
                    </div> 
                <div className="search">
                    <input placeholder="Search by name" onChange={this.onSearchChange}></input>
                    <span className="icon">
                        <Search width={24} height={24} fillIcon="gray"/>
                    </span>
                </div>
            </div>
        );
    }
}

ToolBar.propTypes = {
    selectLocation: PropTypes.func.isRequired,
    searchByKey: PropTypes.func.isRequired
}
