
import React from "react";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import ColorPicker from "./ColorPicker";
import './App.css';

const colorPickerOptions = [
  { label: 'red', color: '#f44336'},
  { label: 'green', color: '#4CAF50'},
  { label: 'blue', color: '#2196F3'},
  { label: 'grey', color: '#607D8B'},
  { label: 'pink', color: '#E91E63'},
  { label: 'indigo', color: '#3F51B5'},
];

export const App = () => {
  return (<div className="app__container">
 
   <h1 className="app__title">component state</h1>
   <div className="app__content">
     <Dropdown className="app__dropdown"/>
      <Counter className="app-counter" initialValue={10}
      />
      <ColorPicker className="app-color-picker" options={colorPickerOptions} />
   </div>
  </div>);
  
};
