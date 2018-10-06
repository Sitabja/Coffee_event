import React from 'react';
import { shallow } from 'enzyme';
import EmployeePairTile from './EmployeePairTile';

const mock_employeePair = {
        "giver" :  {  
            "name":{  
               "first":"Brennon",
               "last":"Breitenberg"
            },
            "location":"ny",
            "department":"engineering",
            "motto":"Distributed discrete superstructure",
            "email":"brennon.breitenberg@hbc.com",
            "phone":"063 4324581",
            "guid":"d20c20ab-5813-48d4-8148-dee37530a1ec"
         },
        "receiver" : {  
            "name":{  
               "first":"Payton",
               "last":"Corwin"
            },
            "location":"ny",
            "department":"engineering",
            "motto":"Multi-tiered transitional strategy",
            "email":"payton.corwin@hbc.com",
            "phone":"023 9206042",
            "guid":"0b6f30f7-fd64-4864-bc88-145c47bdb9ee"
         },
         "location_display" : "dub",
         "day" : "Monday"  
}

describe("display tile properly ",()=>{
    const renderedComponent = shallow(<EmployeePairTile employeePair={mock_employeePair}/>)
    describe("Renders component properly",()=>{
        it("Receive prop and update the state with employee pair properly ",()=>{
            const state = renderedComponent.instance().state;
            expect(state.employeePair).toEqual(mock_employeePair)
        });
        it("Tile displayed properly ",()=>{
            const giver_name = renderedComponent.find('.giver-name').childAt(0).text()
            const receiver_name = renderedComponent.find('.receiver-name').childAt(0).text()
            expect(giver_name).toEqual(mock_employeePair.giver.name.first)
            expect(receiver_name).toEqual(mock_employeePair.receiver.name.first)
        });
        it("Handles prop update properly ",()=>{
            let mock_employeePair_update = mock_employeePair;
            mock_employeePair_update.day = 'Tuesday'

            renderedComponent.setProps({employeePair:mock_employeePair_update})
            const state = renderedComponent.instance().state;
            expect(state.employeePair.day).toEqual("Tuesday")
            

        });
    })
    describe("Contact info displays properly ",()=>{
        const giver_contact = renderedComponent.find('.giver-name').childAt(2)
        const receiver_contact = renderedComponent.find('.receiver-name').childAt(2)
        const close_contact = renderedComponent.find('.close-contact')

        it("Giver contact info displays properly ",()=>{
            giver_contact.simulate("click")
            const state = renderedComponent.instance().state;
            expect(state.contact).toEqual('giver')
        });
        it("Reciever contact info displays properly ",()=>{
            receiver_contact.simulate("click")
            const state = renderedComponent.instance().state;
            expect(state.contact).toEqual('receiver')
        });
        it("Contact info closed properly ",()=>{
            receiver_contact.simulate("click")
            let state = renderedComponent.instance().state;
            expect(state.contact).toEqual('receiver')
            close_contact.simulate('click')
            state = renderedComponent.instance().state;
            expect(state.contact).toEqual('')
        })
    })
    
})