import React, { useMemo, useState, useContext } from "react";

// Импортируем необходимые компоненты
import Modal from '../modal/modal';
import OrderDetails from "../order-details";
import ErrorMessage from "../error-message/error-message";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

// Импортируем необходимые сервисы и контекст
import { burgerService } from "../../services/services";
import { IngredientsContext } from "../../services/app-context";

// Импортируем стили
import classes from './burger-constructor.module.scss';

const BurgerConstructor = () => {
  const [ isOpened, showModal ] = useState(false); // хук, управляющий показом модального окна
  const [ hasError, setError ] = useState(false);  // хук, устанавливающий ошибку в случае неполучения данных
  const [ orderNumber, setOrderNumber ] = useState(null)  // хук, устанавливающий номер заказа

  const { data } = useContext(IngredientsContext);

  // Реализация открытия и закрытия модальных окон
  const openModal = () => showModal(true);
  const closeModal = () => showModal(false);

  // Собираем все ингредиенты
  const burgerIngredients = data.map(burgerIngredient => {
    if (burgerIngredient.type !== 'bun') {
      return (
      <div className={`${classes['burger-constructor__list-item']} mb-4`} key={burgerIngredient._id}>
        <span className={classes.icon}><DragIcon type="primary"/></span>
        <ConstructorElement
          text={burgerIngredient.name}
          price={burgerIngredient.price}
          thumbnail={burgerIngredient.image}
        />
      </div>
      )}
    return null;
  })  

  // Выбираем булку
  const bun = data.find(burgerIngredient => burgerIngredient.type === 'bun');

  // Рассчитываем итоговую стоимость
  const total = useMemo(() => data.map(burgerIngredient => burgerIngredient.price).reduce((price, acc) => price + acc), [data]);

  // Если ошибка, то выкидываем сообщение с ошибкой
  if (hasError) {
    return <ErrorMessage />
  }

  // Функция отправки запроса на создание заказа
  const createOrder = () => {
    // Собираем массив id ингредиентов, входящих в конструктор
    const ingredients = data.map(item => item._id);

    burgerService.sendOrder(ingredients)
      .then(data => {
        setOrderNumber(data.order.number);
        openModal();
      })
      .catch(() => setError(true))
  }

  return (
    <section className={classes['burger-constructor']}>
      <div style={{ display: 'flex', flexDirection: 'column' }} className="mt-25 pl-8 mb-10">
        <div className="mb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={classes.scroll}>
          {burgerIngredients}
        </div>
        <div className="mb-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
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
        <Button type="primary" size="large" onClick={createOrder}>Оформить заказ</Button>
          {isOpened && 
          <Modal closeModal={closeModal}>
            <OrderDetails orderNumber={orderNumber}/>
          </Modal>
          }
      </div>
    </section>
  )
}

export default BurgerConstructor;