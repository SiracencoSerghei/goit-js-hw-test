import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { MaterialEditorForm } from "./MaterialEditorForm/MaterialEditorForm";
import * as API from './services/api';

export default class App extends Component {
  state = {materials: [],};
  addMaterial = async values => {
   const material = await API.addMaterial(values);
   this.setState(state => ({materials: [...state.materials, material]}));
   console.log(material);
  }
  render() {
    return (<Layout>
      <GlobalStyle />
      <MaterialEditorForm onSubmit={this.addMaterial}/>
    </Layout>);
  }
};