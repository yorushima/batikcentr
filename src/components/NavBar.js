import React, { useContext } from 'react';
import { Context } from '../index';
import { ABOUT_ROUTE, BASKET_ROUTE, BRANDS_ROUTE, CONTACTS_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utilis/consts';

import SEARCH from '../img/search.jpg';
import LOGO from '../img/batikcentr.svg';
import BASKET from '../img/basket.svg';
import PROFILE from '../img/profile.png' 

import styles from '../styles/navbar.module.css';


const NavBar = () => {
    const {user} = useContext(Context)
    return ( // Переделать навигатор
      <div className={styles.header}>
        <div className={styles.l}>
            <form className={styles.search}>
            <button type="submit"><img src={SEARCH}></img></button>
            <input type="text" placeholder="что-то ищете?" />
            </form>
          <a className={styles.logo} href={SHOP_ROUTE}><img src={LOGO}></img></a>
          <a className={styles.icons_login} href={REGISTRATION_ROUTE}><img src={PROFILE}></img></a>
          <a className={styles.icons_basket} href={BASKET_ROUTE}><img src={BASKET}></img></a>
        </div>
        <div className={styles.navbar}>
          <a className={styles.pages} href={PRODUCT_ROUTE}>каталог</a>
          <a className={styles.pages} href={CONTACTS_ROUTE}>контакты</a>
          <a className={styles.pages} href={ABOUT_ROUTE}>о нас</a>
          <a className={styles.pages} href={BRANDS_ROUTE}>бренды</a>
        </div>
      </div>
    );
}

export default NavBar;