import React, { Component } from 'react';
import Slide from './slide';
import CarouselButton from './carousel-button';

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

  setNextSlide = () => {
    this.setState({ currentIndex: this.getNextIndex });
  };

  setPrevSlide = () => {
    this.setState({ currentIndex: this.getPrevIndex });
  };

  setPlay = () => {
    const { isPlaying } = this.state;
    this.setState({ isPlaying: !isPlaying });
  };

  stopPlay = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  componentDidUpdate(prevProps, prevState) {
    const { isPlaying, delay } = this.state;

    if (isPlaying) {
      this.timeoutId = setTimeout(this.setNextSlide, delay);
    } else {
      this.stopPlay();
    }
  }

  componentWillUnmount() {
    this.stopPlay();
  }

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;

    return (
      <article>
        <Slide {...slides[this.getPrevIndex]} />
        <Slide isCurrentSlide={true} {...slides[currentIndex]} />
        <Slide {...slides[this.getNextIndex]} />

        <CarouselButton onClick={this.setPrevSlide}>{'<<'}</CarouselButton>
        <CarouselButton onClick={this.setPlay}>{'X'}</CarouselButton>
        <CarouselButton onClick={this.setNextSlide}>{'>>'}</CarouselButton>
      </article>
    );
  }
}

export default Carousel;
