import React from "react";
import PropTypes from 'prop-types';
import BurgerItem from "../burger-item";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './burger-ingredients.module.scss';

// Проверка типов
const receivedData = PropTypes.shape({
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  proteins: PropTypes.number,
  type: PropTypes.string,
  __v: PropTypes.number,
  _id: PropTypes.string
});

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState('one')

  return (
    <section className={classes['burger-ingredients']}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }} className="mb-10">
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      
      <div className={classes.scroll}>
        <section>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <ul className={`${classes['burger-list']} pl-4 pr-4 mb-10`}>
            {data.filter(burger => burger.type === "bun")
                .map(burger => <BurgerItem key={burger._id} {...burger}/>)}
          </ul>
        </section>
        
        <section>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <ul className={`${classes['burger-list']} pl-4 pr-4 mb-10`}>
            {data.filter(burger => burger.type === "sauce")
                .map(burger => <BurgerItem key={burger._id} {...burger}/>)}
          </ul>
        </section>
        
        <section>
          <h2 className="text text_type_main-medium mb-6">Начинка</h2>
          <ul className={`${classes['burger-list']} pl-4 pr-4 mb-10`}>
            {data.filter(burger => burger.type === "main")
                .map(burger => <BurgerItem key={burger._id} {...burger}/>)}
          </ul>
        </section>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(receivedData).isRequired
}

export default BurgerIngredients;