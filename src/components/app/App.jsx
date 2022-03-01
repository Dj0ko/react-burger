// Импорт необходимых библиотек
import React, { useState, useEffect } from 'react';

// Импорт компонентов
import AppHeader from '../app-header';
import BurgerIngredients from '../burger-ingredients';
import BurgerConstructor from '../burger-constructor';
import ErrorMessage from '../error-message/error-message';

// Импорт сервисов
import { burgerService } from '../../services/services';
import { IngredientsContext } from '../../services/app-context';

// Импорт стилей
import classes from './app.module.scss';

function App() {
  const [ data, setData ] = useState([]); // Хук, устанавливающий входные данные
  const [ hasError, setError ] = useState(false); // Хук, устанавливающий ошибку

  // Получаем данные
  useEffect(() => {
    burgerService.getBurgersData()
      .then(data => setData(data.data))
      .catch(() => setError(true))
  }, [])

  // Если ошибка, то рендерим сообщение об ошибке
  if (hasError) {
    return <ErrorMessage />
  }

  // Пока нет данных показываем сообщение об ожидании
  if (data.length === 0) {
    return <p>Waiting....</p>
  } 

  return (
    <>
      <AppHeader />
      <main className={classes['page-burger']}>
        <IngredientsContext.Provider value={{data}}>
          <BurgerIngredients />
          <BurgerConstructor />
        </IngredientsContext.Provider>
      </main>
    </>
  )
}

export default App;
