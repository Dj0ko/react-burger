import React, { useState } from "react";
import PropTypes from 'prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal';
import IngredientDetails from "../ingredient-details";

import classes from './burger-item.module.scss';

import { receivedData } from '../../types/types';

const BurgerItem = (burgerData) => {
  const { calories, carbohydrates, fat, image, image_large, name, price, proteins } = burgerData;
  const [ isOpened, showModal ] = useState(false);

  const openModal = () => showModal(true);

  const closeModal = (e) => {
    console.log('e: ', e);
    showModal(false)
  };

  return (
    <>
    <li className={`${classes['burger-list__item']} mb-8`} onClick={openModal}>
      <img src={image} alt={name} className="pl-4 pr-4 mb-1"/>
      <div className={`${classes['content-wrapper']} mb-1`}>
        <p className="text text_type_digits-default mr-1">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${classes['burger-list__text']} text text_type_main-default`}>{name}</p>
    </li>
    {isOpened && 
      <Modal closeModal={closeModal} showIngredient>
        <IngredientDetails energy={{calories, carbohydrates, fat, image_large, proteins}} />
      </Modal>
    }
    </>
    
  )
}

BurgerItem.propTypes = {
  burgerData: PropTypes.arrayOf(receivedData)
}

export default BurgerItem;