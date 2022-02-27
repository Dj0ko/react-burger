import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import classes from './modal-overlay.module.scss';

const ModalOverlay = (props) => {
  useEffect(() => {
      const onKeypress = e => ( e.key === 'Escape') ? props.closeModal() : null;
    
      document.addEventListener('keydown', onKeypress);
    
      return () => {
        document.removeEventListener('keydown', onKeypress);
      };
    }, [props]);
  return <div className={classes['modal-overlay']} onClick={props.closeModal}></div>;
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default ModalOverlay;