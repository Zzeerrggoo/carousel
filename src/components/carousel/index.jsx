import React, { Component } from 'react';
import Slide from './slide';
import styles from './carousel.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

  componentDidMount() {
    document
      .getElementById('carousel')
      .addEventListener('fullscreenchange', (event) => {
        if (document.fullscreenElement) {
          this.setState({ isFullScreen: true });
        } else {
          this.setState({ isFullScreen: false });
        }
      });
  }

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

  fullScreenMode = () => {
    const { isFullScreen } = this.state;
    const slider = document.getElementById('carousel');

    if (!isFullScreen) {
      slider.requestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  };

  setDelay = () => {
    const input = document.getElementById('delayRange');
    this.setState({ delay: input.value });
  };

  render() {
    const { slides } = this.props;
    const { currentIndex, isFullScreen, isPlaying } = this.state;
    const className = classNames(styles.container, {
      [styles.fullScreenCarousel]: isFullScreen,
    });

    return (
      <article className={className} id="carousel">
        <Slide {...slides[this.getPrevIndex]} />
        <Slide
          isFullScreen={isFullScreen}
          isCurrentSlide={true}
          {...slides[currentIndex]}
        />
        <Slide {...slides[this.getNextIndex]} />

        <div className={styles.buttonsWrapper}>
          <input
            id="delayRange"
            className={styles.rangeInput}
            type="range"
            min="1000"
            max="5000"
            step="1000"
            onChange={this.setDelay}
          />

          <div className={classNames({ [styles.isPlaying]: isPlaying })}>
            <button onClick={this.setPrevSlide}>{'<<'}</button>
            <button onClick={this.setPlay}>{'Play'}</button>
            <button onClick={this.setNextSlide}>{'>>'}</button>
          </div>

          <button
            className={styles.fullScreenButton}
            onClick={this.fullScreenMode}
          >
            {'Full screen'}
          </button>
        </div>
      </article>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;
