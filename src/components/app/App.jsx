import React from 'react';
import AppHeader from '../app-header';
import BurgerIngredients from '../burger-ingredients';
import BurgerConstructor from '../burger-constructor';

import { data } from '../../utils/data';

import classes from './app.module.scss';

function App() {  
  return (
    <>
      <AppHeader />
      <main className={classes['page-burger']}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
    </>
  )
}

export default App;
