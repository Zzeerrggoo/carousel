import React, { Component } from 'react';
import Slide from './slide';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delay: 1000,
      isPlaying: false,
      isFullScreen: false,
      currentIndex: 0,
    };
  }

  get getNextIndex() {
    const { currentIndex } = this.state;
    const { slides } = this.props;

    return (currentIndex + 1) % slides.length;
  }

  get getPrevIndex() {
    const { currentIndex } = this.state;
    const { slides } = this.props;

    return (currentIndex - 1 + slides.length) % slides.length;
  }

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;

    return (
      <article>
        <Slide {...slides[this.getPrevIndex]} />
        <Slide isCurrentSlide={true} {...slides[currentIndex]} />
        <Slide {...slides[this.getNextIndex]} />
      </article>
    );
  }
}

export default Carousel;
