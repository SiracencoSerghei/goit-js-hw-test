
import React, { Component } from "react";
import Container from "./Container";
import FormTest from "./FormTest";
import { nanoid } from "nanoid";  //  npm i nanoid
//   model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import './App.css';


class App extends Component {
  state = {
    filter: '',
  };
  
  // formSubmitHandler = data => {
  //   console.log(data);
  // }
  formSubmitHandler = data => {
    setTimeout(() => {console.log(data)}, 1000);
  }

  render() {
   
    return ( 
<div className="app__container">
 
 
      <Container>
        <p style={{fontWeight: 700, fontSize: '24px',}}>Form</p>
        <FormTest onSubmitAction = {this.formSubmitHandler} />
      </Container>
      <button onClick={event => console.log(event)}>Click me!</button>
</div>
    );
  }
}

export default App;