import React from 'react';

import styles from '../styles/shop.module.css';

import IMAGE from '../img/call.svg';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
        <img src={IMAGE} alt='Call'/>
        <p>8-912-601-06-60</p>
        <p>8(343)266-48-80</p>
    </div>
  );
}

export default Contacts;