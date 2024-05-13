import React from 'react';
import { Carousel } from 'react-bootstrap';

// import IMAGE from '../img/placeholder.svg';
import IMAGE from '../img/black.jpg';

import styles from '../styles/shop.module.css';



const Shop = () => {
  return (
    <div className={styles.shop}>
      <Carousel>
        <Carousel.Item>
        <img className={styles.images} src={IMAGE} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={styles.images} src={IMAGE} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={styles.images} src={IMAGE} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className={styles.head}>Почему мы?</p>
      <div className={styles.why_us}>
        <div className={styles.why_us_columns}>
          <img src={IMAGE} alt='///' />
          <p>Большой опыт работы в сфере</p>
          <p>***</p>
        </div>
        <div className={styles.why_us_columns}>
          <img src={IMAGE} alt='///' />
          <p>Официальные дистрибьютеры</p>
          <p>***</p>
        </div>
        <div className={styles.why_us_columns}>
          <img src={IMAGE} alt='///' />
          <p>Широкий выбор ассортимента</p>
          <p>***</p>
        </div>
      </div>
      <div className={styles.popular}>
        <h2 className={styles.head}>Популярные товары</h2>
        <div className={styles.popular_columns}>
          {/* <img src={IMAGE} alt='///' /> */}
          {/* Написать популярные товары */}
        </div>
      </div>
      <div className={styles.courses}>
        <h2 className={styles.head}>Курсы машинного вязания</h2>
        <img src={IMAGE} alt='///' />
        <button>узнать подробнее в наших соцсетях...</button>
      </div>
      <div className={styles.reviews}>
      <h2 className={styles.head}>Отзывы наших покупателей</h2>
      </div>
    </div>
  );
}

export default Shop;