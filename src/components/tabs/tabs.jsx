import React, { useState } from "react";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import classes from './tabs.module.scss';

const Tabs = () => {
  const [current, setCurrent] = useState('bun');

  // Создаём переменные с возможными значениям вкладок
  const bun = 'bun';
  const sauce = 'sauce';
  const main = 'main';

  return (
    <div className={`${classes['tabs-list']} mb-10`}>
      <Tab value={bun} active={current === bun} onClick={() => setCurrent(bun)}>
        Булки
      </Tab>
      <Tab value={sauce} active={current === sauce} onClick={() => setCurrent(sauce)}>
        Соусы
      </Tab>
      <Tab value={main} active={current === 'main'} onClick={() => setCurrent(main)}>
        Начинки
      </Tab>
    </div>
  )
};

export default Tabs;