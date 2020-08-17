import React from 'react';
import PropTypes from 'prop-types';
import styles from './RangeInput.module.scss';

function RangeInput(props) {
  const { min, max, step, onChange, children } = props;
  return (
    <label className={styles.rangeInputLabel}>
      <input
        id="delayRange"
        type="range"
        className={styles.rangeInput}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
      {children}
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
