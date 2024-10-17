import React from 'react';
import { useState } from "react";

import { REGISTRATION_ROUTE } from "../utilis/consts";

import styles from '../styles/auth.module.css';

const Auth = () => {
    // Поля для регистрации 
    const [name, setName] = useState(""); 
    // const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
  
    // Поля для проверки ошибки 
    const [error, setError] = useState(false); 
  
    // Обработка изменения имени 
    const handleName = (e) => { 
        setName(e.target.value); 
    }; 
  
    // Обработка изменения почты 
    // const handleEmail = (e) => { 
    //     setEmail(e.target.value); 
    //     setSubmitted(false); 
    // }; 
  
    // Обработка изменения пароля
    const handlePassword = (e) => { 
        setPassword(e.target.value); 
    }; 
  
    // Обработка отправки формы 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (name === "" || /*email === "" || */ password === "") { 
            setError(true); 
        } else { 
            setError(false); 
        } 
    }; 
  
    // Отображение сообщения об ошибке, если ошибка является истинной 
    const errorMessage = () => { 
        return ( 
            <div 
                className={styles.error}
                style={{ 
                    display: error ? "" : "none", 
                }} 
            > 
                <p>Пожалуйста, заполните все поля</p> 
            </div>
        ); 
    }; 

    return ( 
        <div className={styles.form}> 
            <div> 
                <h1>Авторизация</h1> 
            </div> 
  
            {/* Вызов сообщений */} 
            <div className={styles.messages}> 
                {errorMessage()} 
                {/* {successMessage()}  */}
            </div> 
  
            <form> 
                <label className={styles.label}></label> 
                <input 
                    onChange={handleName} 
                    className={styles.input}
                    value={name} 
                    type="text"
                    placeholder='Логин'
                /> 
  
                {/* <label className={styles.label}></label> 
                <input 
                    onChange={handleEmail} 
                    className={styles.input}
                    value={email} 
                    type="email"
                    placeholder='Почта'
                />  */}
  
                <label className={styles.label}></label> 
                <input 
                    onChange={handlePassword} 
                    className={styles.input}
                    value={password} 
                    type="password"
                    placeholder='Пароль'
                /> 

                <label className={styles.label}>
                    <input type="checkbox" />
                    <span class={styles.checkmark}></span>
                    Запомните меня
                </label>
                <a>Забыли пароль?</a>

                <button onClick={handleSubmit} className={styles.button} type="submit"> 
                    Вход 
                </button> 
                <p>Нет аккаунта? <a href={REGISTRATION_ROUTE}>Регистрация</a></p>
            </form> 
        </div> 
    );
}

export default Auth;