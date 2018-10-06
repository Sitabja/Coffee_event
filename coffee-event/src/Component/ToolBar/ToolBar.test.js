import React from 'react';
import { shallow } from 'enzyme';
import ToolBar from './ToolBar';


describe("Toolbar works properly ",()=>{
    const selectLocation = jest.fn();
    const searchByKey = jest.fn()
    const props={selectLocation, searchByKey}
    const renderedComponent = shallow(<ToolBar {...props}/>)
    const searchDiv = renderedComponent.find('.search')

    describe("Location filter works properly ",()=>{
        const filter_content = renderedComponent.find('.filter-content')
        it("There two locations",()=>{
            expect(filter_content.children()).toHaveLength(2)
        });

        it("Location select clicks",()=>{
            filter_content.childAt(0).simulate('click');
            const displayedLocation = renderedComponent.find('.selected-location').childAt(0).text()
            expect(displayedLocation).toEqual('Dublin')
            expect(selectLocation).toHaveBeenCalledWith('Dublin')
        });   

        it("close location selection",()=>{
            filter_content.childAt(0).simulate('click');
            const locationSelectedButton = renderedComponent.find('.selected-location').childAt(1)
            locationSelectedButton.simulate('click')
            expect(renderedComponent.find('.selected-location')).toHaveLength(0)
        });   
    });

    it("Search by name ",()=>{
        searchDiv.childAt(0).simulate('change', { target: { value: 'Martin' } })
        expect(searchByKey).toHaveBeenCalledWith('Martin')
    });

})