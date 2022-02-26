import React from 'react';
import PropTypes from 'prop-types';

import classes from './ingredients-details.module.scss';

const IngredientDetails = ({ calories, carbohydrates, fat, image_large, name, proteins }) => {
  const energyValue = (
    <ul className={classes['energy-value__list']}>
      <li className={classes['energy-value__list-item']}>
        <span className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</span>
        <span className="text text_type_digits-default text_color_inactive">{calories}</span>
      </li>
      <li className={classes['energy-value__list-item']}>
        <span className="text text_type_main-default text_color_inactive mb-2">Белки, г</span>
        <span className="text text_type_digits-default text_color_inactive">{proteins}</span>
      </li>
      <li className={classes['energy-value__list-item']}>
        <span className="text text_type_main-default text_color_inactive mb-2">Жиры, г</span>
        <span className="text text_type_digits-default text_color_inactive">{fat}</span>
      </li>
      <li className={classes['energy-value__list-item']}>
        <span className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
        <span className="text text_type_digits-default text_color_inactive">{carbohydrates}</span>
      </li>
    </ul>
  )
  return (
    <>
      <img src={image_large} alt={name} className="mb-4"/>
      <p className="text text_type_main-medium mb-8">{name}</p>
      {energyValue}
    </>
    
  )
}

IngredientDetails.propTypes = {
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
}

export default IngredientDetails;