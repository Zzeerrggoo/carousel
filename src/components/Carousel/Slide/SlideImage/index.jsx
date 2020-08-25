import React from 'react';
import PropTypes from 'prop-types';

function SlideImage(props) {
  const { img, src, title, isFullScreen, isLoaded } = props;

  if (isLoaded) {
    let { width, height } = props;
    if (isFullScreen) {
      width = window.screen.width;
      height = window.screen.height;
    }
    const size = { width, height };

    const sliderAspectRatio = width / height;
    const imgAspectRatio = img.width / img.height;
    const propName = imgAspectRatio > sliderAspectRatio ? 'width' : 'height';

    const imageProps = {
      [propName]: size[propName],
    };

    return <img src={src} alt={title} title={title} {...imageProps} />;
  }
  return false;
}

SlideImage.propTypes = {
  img: PropTypes.instanceOf(Image).isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  isFullScreen: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool,
};

SlideImage.defaultProps = {
  isLoaded: false,
};

export default SlideImage;
