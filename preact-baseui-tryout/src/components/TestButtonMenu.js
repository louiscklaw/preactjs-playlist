import * as React from "react";

import {styled} from 'baseui';

import { Button } from "baseui/button";

import TestMenu from './TestMenu';

export default class TestButtonMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menu_state:false
    }
  }

  getMenu(){
    console.log(this.state);
    if (this.state.menu_state){
      return(
        <div>
          <TestMenu />
        </div>
      )
    }else{
      <div>
      </div>
    }
  }

  render(){
    return(
      <div>
      <Button onClick={
        () => {
          console.log('onclick')
          this.setState({...this.state, menu_state: !this.state.menu_state})
        }
      }>Hello</Button>
      {/* {this.getMenu()} */}
      <TestMenu />
    </div>
    )
  }
}