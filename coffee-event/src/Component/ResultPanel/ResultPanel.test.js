import React from 'react';
import { shallow } from 'enzyme';
import ResultPanel from './ResultPanel'
import { fakePairs } from '../../Services/__mocks__/ServiceProvider'

jest.mock('../../Services/ServiceProvider.js')
describe("show Result Panel properly",()=>{
    const renderedComponent = shallow(<ResultPanel/>)

    it("fetches data and renders them", done=>{       
        setTimeout(()=>{
            renderedComponent.update()
            const state = renderedComponent.instance().state;
            expect(state.data.length).toBeGreaterThan(0)
            expect(renderedComponent.find('.result-wrapper').length).toEqual(1)
            done();
        })
    });
    it("Test prop update ", ()=>{
        const selectedLocation = 'ny'
        const searchKey = ''
        renderedComponent.setProps({selectedLocation, searchKey})
        const state = renderedComponent.instance().state;
        expect(state.data[0].giver.location).toEqual('ny')
    
    });
    it("Loading shows properly ", ()=>{
        renderedComponent.setState({isLoading: true}) 
        expect(renderedComponent.find(".coffee-loader").childAt(1).text()).toEqual('Loading...')
    
    });
    it("No surprise shows properly ", ()=>{
        renderedComponent.setState({isLoading: false, data:[]}) 
        expect(renderedComponent.find(".coffee-loader").childAt(1).text()).toEqual('No Surprise Found')
    
    });
    it("Unknown Error Occurred shows properly", ()=>{
        renderedComponent.setState({isLoading: false, data: null}) 
        expect(renderedComponent.find(".coffee-loader").childAt(1).text()).toEqual('Unknown Error Occurred')
    
    })
})
    