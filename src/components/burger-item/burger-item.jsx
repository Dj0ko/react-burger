import React, { useState } from "react";
import PropTypes from 'prop-types';

// Импорт компонентов
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal';
import IngredientDetails from "../ingredient-details";

// Импорт стилей
import classes from './burger-item.module.scss';

const BurgerItem = (burgerData) => {
  // Получаем необходимые переменные
  const { calories, carbohydrates, fat, image, image_large, name, price, proteins } = burgerData;

  const [ isOpened, showModal ] = useState(false); // хук, управляющий показом модального окна

  // Реализация открытия и закрытия модальных окон
  const openModal = () => showModal(true);
  const closeModal = () => showModal(false);

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
      <Modal closeModal={closeModal} title="Детали ингредиента">
        <IngredientDetails {...{calories, carbohydrates, fat, image_large, proteins, name}} />
      </Modal>
    }
    </>
    
  )
}

BurgerItem.propTypes = {
  calories: PropTypes.number.isRequired, 
  carbohydrates: PropTypes.number.isRequired, 
  fat: PropTypes.number.isRequired, 
  image: PropTypes.string.isRequired, 
  image_large: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
  proteins: PropTypes.number.isRequired
}

export default BurgerItem;