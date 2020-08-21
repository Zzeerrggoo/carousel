import React from 'react';
import PropTypes from 'prop-types';
import styles from './RangeInput.module.scss';
import { CarouselContext } from '../contexts';

function RangeInput(props) {
  return (
    <label className={styles.rangeInputLabel}>
      <input
        id="delayRange"
        type="range"
        className={styles.rangeInput}
        {...props}
      />
      <CarouselContext.Consumer children={(delay) => `${delay} ms`} />
    </label>
  );
}

RangeInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

RangeInput.defaultProps = {
  min: 1000,
  max: 5000,
  step: 1000,
};

export default RangeInput;
