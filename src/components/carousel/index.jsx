import React, { Component } from 'react';
import Slide from './slide';
import CarouselButton from './carousel-button';
import styles from './carousel.module.scss';
import classNames from 'classnames';

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

    this.stopPlay();

    if (isPlaying) {
      this.timeoutId = setTimeout(this.setNextSlide, delay);
    }
  }

  componentWillUnmount() {
    this.stopPlay();
  }

  fullScreenMode = () => {
    const { isFullScreen } = this.state;
    const slider = document.getElementById('carousel');

    if (!isFullScreen) {
      slider.requestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }

    this.setState({ isFullScreen: !isFullScreen });
  };

  render() {
    const { slides } = this.props;
    const { currentIndex, isFullScreen } = this.state;
    const className = classNames(styles.container, {
      [styles.fullScreenCarousel]: isFullScreen,
    });

    return (
      <article className={className} id="carousel">
        <Slide {...slides[this.getPrevIndex]} />
        <Slide
          id="asd"
          isFullScreen={isFullScreen}
          isCurrentSlide={true}
          {...slides[currentIndex]}
        />
        <Slide {...slides[this.getNextIndex]} />
        <div className={styles.buttonsWrapper}>
          <CarouselButton onClick={this.setPrevSlide}>{'<<'}</CarouselButton>
          <CarouselButton onClick={this.setPlay}>{'X'}</CarouselButton>
          <CarouselButton onClick={this.setNextSlide}>{'>>'}</CarouselButton>
        </div>

        <button
          className={styles.fullScreenButton}
          onClick={this.fullScreenMode}
        >
          {'#'}
        </button>
      </article>
    );
  }
}

export default Carousel;
