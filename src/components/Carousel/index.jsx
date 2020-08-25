import React, { Component } from 'react';
import Slide from './Slide';
import styles from './carousel.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Controls from './Controls';
import { CarouselContext } from './contexts';
import ACTIONS from './actions';

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
      .addEventListener('fullscreenchange', event => {
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
      this.timeoutId = setTimeout(
        this.handleEvents[ACTIONS.setNextSlide],
        delay
      );
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

  stopPlay = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  handleEvents = {
    [ACTIONS.setPrevSlide]: () => {
      this.setState({ currentIndex: this.getPrevIndex });
    },

    [ACTIONS.setPlay]: () => {
      const { isPlaying } = this.state;
      this.setState({ isPlaying: !isPlaying });
    },

    [ACTIONS.setNextSlide]: () => {
      this.setState({ currentIndex: this.getNextIndex });
    },

    [ACTIONS.fullScreenMode]: () => {
      const { isFullScreen } = this.state;
      const slider = document.getElementById('carousel');

      if (!isFullScreen) {
        slider.requestFullscreen();
      } else {
        document.webkitExitFullscreen();
      }
    },

    [ACTIONS.setDelay]: () => {
      const input = document.getElementById('delayRange');
      this.setState({ delay: input.value });
    },
  };

  render() {
    const { slides } = this.props;
    const { currentIndex, isFullScreen, isPlaying, delay } = this.state;
    const className = classNames(styles.container, {
      [styles.fullScreenContainer]: isFullScreen,
    });

    return (
      <article className={className} id="carousel">
        <Slide {...slides[this.getPrevIndex]} />
        <Slide
          isFullScreen={isFullScreen}
          isCurrentSlide={true}
          {...slides[currentIndex]}
          width={1200}
          height={800}
        />
        <Slide {...slides[this.getNextIndex]} />

        <CarouselContext.Provider value={delay}>
          <Controls handleEvents={this.handleEvents} isPlaying={isPlaying} />
        </CarouselContext.Provider>
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
