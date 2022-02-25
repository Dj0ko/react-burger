import React from "react";
import PropTypes from 'prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './burger-item.module.scss';


const BurgerItem = ( { name, image, price } ) => {
  return (
    <li className={`${classes['burger-list__item']} mb-8`}>
      <img src={image} alt={name} className="pl-4 pr-4 mb-1"/>
      <div className={`${classes['content-wrapper']} mb-1`}>
        <p className="text text_type_digits-default mr-1">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${classes['burger-list__text']} text text_type_main-default`}>{name}</p>
    </li>
  )
}

BurgerItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default BurgerItem;