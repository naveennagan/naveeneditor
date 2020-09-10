import React, { Component } from 'react';
import HomeView from '../containers/HomeContainer';

export class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HomeView />
    )
  }
}
export default MainComponent;