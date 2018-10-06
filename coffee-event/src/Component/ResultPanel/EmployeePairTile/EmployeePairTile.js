import React, { Component } from 'react';
import {CoffeeHolding, Location, PhoneIcon, MailIcon, ContactInfo, ArrowUp}  from '../../../Utils/Svg'
import PropTypes from 'prop-types';

import './EmployeePairTile.css'

export default class EmployeePairTile extends Component {
    constructor(props){
        super(props)
        this.state={
            employeePair : props.employeePair,
            contact : "",
            isContactOpen : false
        }
    }
    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props.employeePair) !=  JSON.stringify(nextProps.employeePair)){
            this.setState({
                employeePair : nextProps.employeePair
            })
        }
    }
    onContactInfoClick(value,e){
        this.setState({
            contact : value,
            isContactOpen: !this.state.isContactOpen
        })
    }
    
    closeContact(e){
        this.setState({
            contact : '',
            isContactOpen: false
        })
    }
    render() {
        const {employeePair, contact, isContactOpen} = this.state
        return (
            <div className="tile"> 
            {employeePair ? 
                <div className="tile-content">
                    <div className="giver-name"> 
                        <span>{employeePair.giver.name.first}</span>
                        <span>{employeePair.giver.name.last}</span>
                        <span onClick={this.onContactInfoClick.bind(this,'giver')}><ContactInfo width='16px'/></span>
                    </div>
                    <div className="icon">
                        <CoffeeHolding width='96px' height='96px'/>
                    </div>
                    <div className="receiver-name">
                        <span>{employeePair.receiver.name.first}</span>
                        <span>{employeePair.receiver.name.last}</span>
                        <span onClick={this.onContactInfoClick.bind(this,'receiver')}><ContactInfo width='16px'/></span>
                    </div>
                    <div className="info-footer">
                        <div><Location width='16' height='16'/>{employeePair.location_display}</div>
                        <div>{employeePair.day}</div>
                    </div>
                </div> : null
            } 
                <div className={isContactOpen ? 'contact-details show-contact' : 'contact-details'}>
                    <div>{contact ==='giver' ?  employeePair.giver.name.first : employeePair.receiver.name.first}</div>
                    <div className='details-wrapper'>
                        <div className='phone-info'>
                            <PhoneIcon width='20px' height='20px'/>
                            <span>{contact==='giver' ? employeePair.giver.phone : employeePair.receiver.phone}</span>
                        </div>
                        <div className='mail-info'>
                            <MailIcon width='20px' height='20px'/>
                            <span>{contact==='giver' ? employeePair.giver.email : employeePair.receiver.email}</span>
                        </div>
                    </div>
                    <div className='close-contact' onClick={this.closeContact.bind(this)}>
                        <ArrowUp/>
                    </div>
                </div>
            </div>
        );
    }
}

EmployeePairTile.propTypes = {
    employeePair: PropTypes.object
}