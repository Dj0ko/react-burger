import React from "react";
import PropTypes from 'prop-types';
import BurgerItem from "../burger-item";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './burger-ingredients.module.scss';

import { receivedData } from '../../types/types';

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState('bun');

  // Список булок
  const bunList = data.filter(burger => burger.type === "bun")
  .map(burger => <BurgerItem key={burger._id} {...burger}/>);

  // Список соусов
  const sauceList = data.filter(burger => burger.type === "sauce")
  .map(burger => <BurgerItem key={burger._id} {...burger}/>);

  // Список начинок
  const mainList = data.filter(burger => burger.type === "main")
  .map(burger => <BurgerItem key={burger._id} {...burger}/>);

  return (
    <section className={classes['burger-ingredients']}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }} className="mb-10">
        <Tab value="bun" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      
      <div className={classes.scroll}>
        <section>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <ul className={`${classes['burger-list']} pl-4 pr-4 mb-10`}>
            {bunList}
          </ul>
        </section>
        
        <section>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <ul className={`${classes['burger-list']} pl-4 pr-4 mb-10`}>
            {sauceList}
          </ul>
        </section>
        
        <section>
          <h2 className="text text_type_main-medium mb-6">Начинка</h2>
          <ul className={`${classes['burger-list']} pl-4 pr-4 mb-10`}>
            {mainList}
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