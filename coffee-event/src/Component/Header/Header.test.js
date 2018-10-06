import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header displays properly ",()=>{
it('renders header with image', () => {
    const header = shallow(<Header/>)
    const image = <img src="/Images/hbclogo.png" height="60" width="80" className="app-logo" alt="Hudson's Bay Company" />
    expect(header.contains(image)).toEqual(true)
  });

  it('renders header with text', () => {
    const header = shallow(<Header/>)
    const text = <div className='title'>Coffee Event</div>
    expect(header.contains(text)).toEqual(true)
  });
})