import React, { useContext } from "react";

import BurgerItem from "../burger-item";
import Tabs from "../tabs/tabs";

import classes from './burger-ingredients.module.scss';

import { IngredientsContext } from "../../services/app-context";

const BurgerIngredients = () => {
  const { data } = useContext(IngredientsContext);

  // Список булок
  const bunList = data.filter(burger => burger.type === "bun")
  .map(burgerData => <BurgerItem key={burgerData._id} {...burgerData}/>);

  // Список соусов
  const sauceList = data.filter(burger => burger.type === "sauce")
  .map(burgerData => <BurgerItem key={burgerData._id} {...burgerData}/>);

  // Список начинок
  const mainList = data.filter(burger => burger.type === "main")
  .map(burgerData => <BurgerItem key={burgerData._id} {...burgerData}/>);

  return (
    <section className={classes['burger-ingredients']}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      
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

export default BurgerIngredients;