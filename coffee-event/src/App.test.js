import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('./Component/ResultPanel/ResultPanel', ()=> {
  const ComponentToMock = () => <div />;
  return ComponentToMock;})

jest.mock('./Component/ToolBar/ToolBar', ()=> {
  const ComponentToMock = () => <div />;
  return ComponentToMock;})
 
  jest.mock('./Component/Header/Header', ()=> {
    const ComponentToMock = () => <div />;
    return ComponentToMock;})
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
