import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './app-header.module.scss';

const AppHeader = () => {
  return (
    <header className={classes['app-header']}>
      <nav className={`${classes['app-nav']} pb-4 pt-4`}>
        <ul className={classes['app-nav__list']}>
          <li className={`${classes['app-nav__list-item']} p-5 mr-2`}>
            <BurgerIcon type="primary" />
            <a href="#" className={`text text_type_main-default text_color_inactive ml-2 ${classes.link} ${classes['link--active']}`}>Конструктор</a>
          </li>
          <li className={`${classes['app-nav__list-item']} p-5 mr-2`}>
            <ListIcon type="secondary" />
            <a href="#" className={`text text_type_main-default text_color_inactive ml-2 ${classes.link}`}>Лента заказов</a>
          </li>
          <li className={`${classes['app-nav__list-item']} ${classes['app-nav__list-item--ml']} p-5 mr-2`}>
            <ProfileIcon type="secondary" />
            <a href="#" className={`text text_type_main-default text_color_inactive ml-2 ${classes.link}`}>Личный кабинет</a>
          </li>
        </ul>
      </nav>
      <a href="/" className={classes.logo}><Logo /></a>
    </header>
  )
}

export default AppHeader;