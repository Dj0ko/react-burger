import React from 'react';
import PropTypes from 'prop-types';

import classes from './modal-overlay.module.scss';

const ModalOverlay = (props) => <div className={classes['modal-overlay']} onClick={props.closeModal}></div>;

ModalOverlay.propTypes = {
  closeModal: PropTypes.func,
}

export default ModalOverlay;