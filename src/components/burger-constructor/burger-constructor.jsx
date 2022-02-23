import React from "react";
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './burger-constructor.module.scss';

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

const BurgerConstructor = ({ data }) => {

  const total = data.map(burger => burger.price).reduce((price, acc) => price + acc);

  return (
    <section className={classes['burger-constructor']}>
      <div style={{ display: 'flex', flexDirection: 'column' }} className="mt-25 pl-8 mb-10">
        <div className="mb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <div className={classes.scroll}>
          {data.map(burger => {
            if (burger.type !== 'bun') {
              return (
              <div className={`${classes['burger-constructor__list-item']} mb-4`} key={burger._id}>
                <span className={classes.icon}><DragIcon type="primary"/></span>
                <ConstructorElement
                  text={burger.name}
                  price={burger.price}
                  thumbnail={burger.image}
                  className={classes.sss}
                />
              </div>)}
            return null;
        })}
        </div>
        <div className="mb-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>

      <div className={`${classes['content-wrapper']} pr-8`}>
        <div className={`${classes['price-wrapper']} mr-10`}>
        <p className="text text_type_main-large mr-2">
          {total}
        </p>
        <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(receivedData).isRequired
}

export default BurgerConstructor;