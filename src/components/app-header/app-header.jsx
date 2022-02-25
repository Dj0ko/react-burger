import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './app-header.module.scss';

const AppHeader = () => {
  return (
    <header className={classes['app-header']}>
      <nav className={`${classes['app-nav']} pb-4 pt-4`}>
        <ul className={classes['app-nav__list']}>
          <li className="mr-2">
            <a href="#" className={`text text_type_main-default text_color_inactive ${classes.link} ${classes['link--active']} p-5`}>
              <BurgerIcon type="primary" />
              <span className="ml-2">Конструктор</span>
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className={`text text_type_main-default text_color_inactive ${classes.link} p-5`}>
              <ListIcon type="secondary" />
              <span className="ml-2">Лента заказов</span>
            </a>
          </li>
          <li className={`${classes['ml-auto']} mr-2`}>
            <a href="#" className={`text text_type_main-default text_color_inactive ${classes.link} p-5`}>
              <ProfileIcon type="secondary" />
              <span className="ml-2">Личный кабинет</span>
            </a>
          </li>
        </ul>
      </nav>
      <a href="/" className={classes.logo}><Logo /></a>
    </header>
  )
}

export default AppHeader;