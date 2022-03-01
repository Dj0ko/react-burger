import React, { useState } from "react";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const Tabs = () => {
  const [current, setCurrent] = useState('bun');

  return (
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
  )
};

export default Tabs;