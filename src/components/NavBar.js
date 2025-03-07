import React, { useContext } from 'react';
import { Context } from '../index';
import { PROFILE_ROUTE, CATALOG_ROUTE, ABOUT_ROUTE, BASKET_ROUTE, BRANDS_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, FAVOURITES_ROUTE, SHOP_ROUTE } from '../utilis/consts';

import SEARCH from '../img/search.jpg';
import LOGO from '../img/batikcentr.svg';
import BASKET from '../img/basket.svg';
import PROFILE from '../img/profile.svg';
import FAVOURITES from '../img/favourites.svg' 

import styles from '../styles/navbar.module.css';
import { Col, Container } from 'react-bootstrap';


const NavBar = () => {
    const {user} = useContext(Context) // Переделать навигатор
    return (
    // <header className={styles.header}> 
    //   {/* <div className="container"> */}
    //     <div className={styles.l}>
    //         <form className={styles.search}>
    //           <button type="submit"><img src={SEARCH}></img></button>
    //           <input type="text" placeholder="что-то ищете?" />
    //         </form>
    //       <a className={styles.logo} href={SHOP_ROUTE}><img src={LOGO}></img></a>
    //       <a className={styles.icons_favourites} href={FAVOURITES_ROUTE}><img src={FAVOURITES}></img></a>
    //       {user.isAuth ? <a className={styles.icons_login} href={PROFILE_ROUTE}><img src={PROFILE}></img></a> 
    //       : 
    //       <a className={styles.icons_login} href={LOGIN_ROUTE}><img src={PROFILE}></img></a>}
    //       <a className={styles.icons_basket} href={BASKET_ROUTE}><img src={BASKET}></img></a>
    //     </div>
    //     <div className={styles.navbar}>
    //       <a className={styles.pages} href={CATALOG_ROUTE}>каталог</a>
    //       <a className={styles.pages} href={CONTACTS_ROUTE}>контакты</a>
    //       <a className={styles.pages} href={ABOUT_ROUTE}>о нас</a>
    //       <a className={styles.pages} href={BRANDS_ROUTE}>бренды</a>
    //     </div>
    //   {/* </div> */}
    // </header>
    <Container style={{marginTop: 45, marginBottom: 53}}>
      <div className='d-flex align-items-center' style={{marginBottom: 50}}>
        <Col>
          <form className={styles.search}>
            <button type="submit"><img src={SEARCH}></img></button>
            <input type="text" placeholder="что-то ищете?" />
          </form>
        </Col>
        <Col>
          <a href={SHOP_ROUTE}><img src={LOGO}></img></a>
        </Col>
        <Col style={{textAlign: "right", paddingTop: 30}}>
          <a href={FAVOURITES_ROUTE}><img src={FAVOURITES}></img></a>
          {user.isAuth ? <a style={{margin: 43}} href={PROFILE_ROUTE}><img src={PROFILE}></img></a> 
          : 
          <a href={LOGIN_ROUTE}><img src={PROFILE}></img></a>}
          <a href={BASKET_ROUTE}><img src={BASKET}></img></a>
        </Col>
      </div>
      <hr />
      <div className='d-flex' style={{textAlign: 'center', margin: -10}}>
        <Col><a href={CATALOG_ROUTE}>каталог</a></Col>
        <Col><a href={CONTACTS_ROUTE}>контакты</a></Col>
        <Col><a href={ABOUT_ROUTE}>о нас</a></Col>
        <Col><a href={BRANDS_ROUTE}>бренды</a></Col>
      </div>
      <hr />
    </Container>
  );
}

export default NavBar;