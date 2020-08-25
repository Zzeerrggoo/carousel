import React, { Component } from 'react';
import RangeInput from '../RangeInput';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Controls.module.scss';
import ACTIONS from '../actions';

class Controls extends Component {
  render() {
    const { handleEvents, isPlaying } = this.props;
    const className = classNames(styles.pauseControls, {
      [styles.isPlaying]: isPlaying,
    });

    return (
      <div className={styles.buttonsWrapper}>
        <RangeInput onChange={handleEvents[ACTIONS.setDelay]} />

        <div className={className}>
          <button onClick={handleEvents[ACTIONS.setPrevSlide]}>{'<<'}</button>
          <button onClick={handleEvents[ACTIONS.setPlay]}>{'Play'}</button>
          <button onClick={handleEvents[ACTIONS.setNextSlide]}>{'>>'}</button>
        </div>

        <button
          className={styles.fullScreenButton}
          onClick={handleEvents[ACTIONS.fullScreenMode]}
        >
          {'Full screen'}
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  handleEvents: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool,
};

Controls.defaultProps = {
  isPlaying: false,
};

export default Controls;
