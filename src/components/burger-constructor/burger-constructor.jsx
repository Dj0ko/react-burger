import React, { useMemo, useState } from "react";
import PropTypes from 'prop-types';

import Modal from '../modal/modal';
import OrderDetails from "../order-details";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import classes from './burger-constructor.module.scss';

import { receivedData } from '../../types/types';

const BurgerConstructor = ({ data }) => {
  const [ isOpened, showModal ] = useState(false);

  const openModal = () => showModal(true);

  const closeModal = () => showModal(false);

  // Рассчитываем итоговую стоимость
  const total = useMemo(() => data.map(burger => burger.price).reduce((price, acc) => price + acc), [data]);

  // Собираем все ингридиенты
  const burgerIngredients = data.map(burger => {
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
  })  

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
          {burgerIngredients}
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
        <p className="text text_type_main-medium mr-2">
          {total}
        </p>
        <CurrencyIcon type="primary" style={{width: '33px', height: '33px'}}/>
        </div>
        <Button type="primary" size="large" onClick={openModal}>Оформить заказ</Button>
          {isOpened && 
          <Modal closeModal={closeModal}>
            <OrderDetails />
          </Modal>
          }
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(receivedData).isRequired
}

export default BurgerConstructor;