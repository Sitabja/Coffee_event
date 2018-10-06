import React, { Component } from 'react';
import { getEmployees, getPair, filterData } from '../../Services/ServiceProvider'
import { CoffeeMug } from '../../Utils/Svg'
import EmployeePairTile from './EmployeePairTile/EmployeePairTile'
import PropTypes from 'prop-types';

import './ResultPanel.css'

export default class ResultPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            isLoading: false
        }
    }
    componentWillReceiveProps(nextProps) {
    
        if(nextProps.selectedLocation != this.props.selectedLocation || nextProps.searchKey != this.props.searchKey){
            this.setState({
                data: filterData(nextProps.selectedLocation, nextProps.searchKey && nextProps.searchKey.toLowerCase())
            })
        }

    }

    async componentWillMount() {
        this.setState({isLoading: true})
        try {
            const data = await getEmployees();
            this.setState({ data: getPair(data.users), isLoading: false})
        } catch(error){
            console.error("COFEE_EVENT: Cannot fetch data", error)
        }
    
    }

    render() {
        const { data, isLoading} = this.state
        return (
            <div>
                {
                    isLoading &&
                        <div className="coffee-loader">
                            <CoffeeMug />
                            <div>Loading...</div>
                        </div> 
                }
                {
                    !isLoading && data && data.length === 0 && (
                        <div className="coffee-loader">
                            <CoffeeMug />
                            <div>No Surprise Found</div> 
                        </div>
                    )
                }
                {    !isLoading && !data &&
                        (<div className="coffee-loader">
                            <CoffeeMug />
                            <div>Unknown Error Occurred</div>
                        </div>
                        )
                }
                    
                {   data &&
                    <div className="result-wrapper">
                        { data.map((employeePair, index) => {
                            return (
                                <EmployeePairTile key={index} employeePair={employeePair} />
                            )
                        })}
                    </div>  
                }
                

            </div>
        );
    }
}

ResultPanel.propTypes = {
    selectLocation: PropTypes.string,
    searchByKey: PropTypes.string
}