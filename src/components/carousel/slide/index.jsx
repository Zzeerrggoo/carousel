import React, { Component } from 'react';
import styles from './Slide.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', (error) => reject(error));
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
    const {
      title,
      description,
      src,
      isCurrentSlide,
      isFullScreen,
    } = this.props;

    const { isLoaded } = this.state;
    const className = classNames(styles.slide, {
      [styles.currentSlide]: isCurrentSlide,
      [styles.fullScreenSlide]: isFullScreen,
    });

    return (
      <figure className={className}>
        <img src={isLoaded ? src : undefined} alt={title} title={title} />
        <figcaption>
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
};

export default Slide;
