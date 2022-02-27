import React from 'react';

import img from '../../images/done.png';

const OrderDetails = () => {
  return (
    <>
      <p className="text text_type_digits-large mb-8">034536</p>
      <p className="text text_type_digits-default mb-15">идентификатор заказа</p>
      <img src={img} alt="Иконка загрузки" className="mb-15"/>
      <p className="text text_type_main-default">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

export default OrderDetails;