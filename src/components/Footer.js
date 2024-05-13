import React from 'react';

import styles from '../styles/footer.module.css';

import LOGO from '../img/batikcentr.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul>
            <img className={styles.logo} src={LOGO} alt='Логотип'></img>
            <p className={styles.number}>8(343)266-48-80</p>
            <p>звонки доступны с 9:00 до 18:00</p>              
        </ul>
        <ul>
            <h3>покупателям</h3>
            <a href='#'>Публичный договор оферта</a>
        </ul>
        <h3>о нас</h3>
        <ul>
            <h3>наши соцсети</h3>
            <li><a href='#'>ВКонтакте</a></li>
            <li><a href='#'>YouTube</a></li>
            <li><a href='#'>Boosty</a></li>
            <li><a href='#'>Телеграм</a></li>
        </ul>
    </div>
  );
}

export default Footer;