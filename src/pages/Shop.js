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
        <p className={styles.why_us_head}>Почему мы?</p>
        <div className={styles.why_us}>
          
        </div>
        
    </div>
  );
}

export default Shop;