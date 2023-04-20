import React, { Component } from 'react';
// import shortid from 'shortid'; //  npm install shortid
import { nanoid } from 'nanoid'; //  npm i nanoid
//   model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

import './FormTest.css';

class FormTest extends Component {
  state = {
    // inputValue: '',
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = nanoid();
  tagInputId = nanoid();

  //   handleChange = event => {
  //     // console.log(event.currentTarget.value);

  //     this.setState({inputValue: event.currentTarget.value})
  //   };

  //   handleNameChange = event => {
  //     // console.log(event.currentTarget.value);
  //     this.setState({ name: event.currentTarget.value });
  //   };

  //   handleTagChange = event => {
  //     // console.log(event.currentTarget.value);
  //     this.setState({ tag: event.currentTarget.value });
  //   };

  // handleChange = event => {
  //     console.log(event.currentTarget);
  //     console.log(event.currentTarget.name);
  //     console.log(event.currentTarget.value);

  //     //     this.setState({ name: event.currentTarget.value });
  //         //     this.setState({ tag: event.currentTarget.value });

  //     this.setState(
  //         // не работает для чекбоксов
  //         {[event.currentTarget.name]: event.currentTarget.value,}
  //     )};

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState(
      // не работает для чекбоксов
      { [name]: value }
    );
  };

  onSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmitAction(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handleLicenceChange = e => {
    // console.log(e.currentTarget.checked);

    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      //   <input
      //     type="text"
      //     value={this.state.inputValue}
      //     onChange={this.handleInputChange}
      //     className="test-input"
      //   />

      <form onSubmit={this.onSubmit}>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            required
            // onChange={this.handleNameChange}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Lastname:
          <input
            type="text"
            name="tag"
            id={this.tagInputId}
            value={this.state.tag}
            required
            // onChange={this.handleTagChange}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <p>Your level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          I agree with the conditions
        </label>

        <button type="submit" disabled={!this.state.licence} value="send">
          Send
        </button>
        {/* <button type="submit" value="send">Send</button> */}
      </form>
    );
  }
}

export default FormTest;
