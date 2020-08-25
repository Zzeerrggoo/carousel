import React, { Component } from 'react';
import styles from './Slide.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SlideImage from './SlideImage';

class Slide extends Component {
  constructor(props) {
    super(props);

    const img = new Image();
    this.state = {
      img,
      isLoaded: false,
    };
  }

  handleLoad = () => {
    this.setState({ isLoaded: true });
  };

  handleError = () => {
    this.setState({ isLoaded: false });
  };

  loadImage(src) {
    const { img } = this.state;
    return new Promise((resolve, reject) => {
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', error => reject(error));
      img.src = src;
    });
  }

  componentDidMount() {
    const { isLoaded } = this.state;
    const { src } = this.props;
    if (!isLoaded) {
      this.loadImage(src).then(this.handleLoad, this.handleError);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoaded } = this.state;
    const { src } = this.props;

    if (!isLoaded) {
      this.loadImage(src).then(this.handleLoad, this.handleError);
    }

    if (prevProps.src !== src) {
      this.setState({ isLoaded: false });
    }
  }

  render() {
    const { title, description, isCurrentSlide, isFullScreen } = this.props;

    const className = classNames(styles.slide, {
      [styles.currentSlide]: isCurrentSlide,
      [styles.fullScreenSlide]: isFullScreen,
    });

    return (
      <figure className={className}>
        <SlideImage {...this.props} {...this.state} />
        <figcaption className={styles.slideFigcaption}>
          <h3>{title}</h3>
          <p>{description}</p>
        </figcaption>
      </figure>
    );
  }
}

Slide.propTypes = {
  isFullScreen: PropTypes.bool,
  isCurrentSlide: PropTypes.bool,
};

Slide.defaultProps = {
  isCurrentSlide: false,
  isFullScreen: false,
};

export default Slide;
