import React, { Component } from 'react';
import Display from '../components/Display';

export default class RandomColor extends Component {
  state = {
    color: '',
  };

  componentDidMount() {
    setInterval(this.changeColor, 1000);
  }

  changeColor = () => {
    const threeRandomColorsInRGB = [];
    for (let i = 0; i < 3; i++) {
      threeRandomColorsInRGB.push(Math.floor(Math.random() * 255));
    }
    this.setState({ color: `rgb(${threeRandomColorsInRGB})` });
  };

  render() {
    const { color } = this.state;
    return <Display color={color} />;
  }
}
