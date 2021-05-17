import React, { Component } from 'react';
import Display from '../components/Display';

export default class RandomColor extends Component {
  state = {
    color: '',
    subliminalMessage: '',
  };

  componentDidMount() {
    const messages = ['send', 'erich', 'all', 'your', 'quacks'];
    setInterval(this.changeColor, 1000);
    this.hypnotizeUser(messages);
  }

  changeColor = () => {
    const threeRandomColorsInRGB = [];
    for (let i = 0; i < 3; i++) {
      threeRandomColorsInRGB.push(Math.floor(Math.random() * 255));
    }
    this.setState({ color: `rgb(${threeRandomColorsInRGB})` });
  };

  hypnotizeUser = (messages) => {
    let i = 0;
    setInterval(() => {
      this.setState({ subliminalMessage: messages[i] });
      i < messages.length - 1 ? i++ : (i = 0);
      setTimeout(() => {
        this.setState({ subliminalMessage: '' });
      }, 100);
    }, 3000);
  };

  render() {
    const { color, subliminalMessage } = this.state;
    return <Display color={color} subliminalMessage={subliminalMessage} />;
  }
}
