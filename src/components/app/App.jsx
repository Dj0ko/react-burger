// Импорт необходимых библиотек
import React, { useState, useEffect } from 'react';

// Импорт компонентов
import AppHeader from '../app-header';
import BurgerIngredients from '../burger-ingredients';
import BurgerConstructor from '../burger-constructor';
import ErrorMessage from '../error-message/error-message';

import { burgerService } from '../../services/services';

// Импорт стилей
import classes from './app.module.scss';

function App() {
  const [ data, setData ] = useState([]);
  const [ hasError, setError ] = useState(false);

  useEffect(() => {
    burgerService.getBurgersData()
      .then(data => setData(data.data))
      .catch(() => setError(true))
  }, [])

  if (hasError) {
    return <ErrorMessage />
  }

  if (data.length === 0) {
    return <p>Waiting....</p>
  } 

  

  return (
    <>
      <AppHeader />
      <main className={classes['page-burger']}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data} />
      </main>
    </>
  )
}

export default App;
