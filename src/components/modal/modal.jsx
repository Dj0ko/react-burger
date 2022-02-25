import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import classes from './modal.module.scss';

const Modal = (props) => {
  const { showIngredient, closeModal, children } = props;
  
  const modal = (
    <>
      <div className={`${classes.modal} pt-10 pr-10 pb-15 pl-10`}>
        <div className={classes['content-wrapper']}>
          {showIngredient  ? <h2 className="text text_type_main-large">Детали ингредиента</h2> : ''}
          <span>
            <CloseIcon type="primary" onClick={closeModal}/>
          </span>
        </div>
        {children}
      </div>
      <ModalOverlay closeModal={closeModal}/>
    </> 
  )
  return ReactDOM.createPortal(modal, document.getElementById('modals'))
}

Modal.propTypes = {
  showIngredient: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default Modal;