import React from 'react';
import { useState } from "react";

import styles from '../styles/auth.module.css';


const Registration = () => {
    // Поля для регистрации 
    const [name, setName] = useState(""); 
    // const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
  
    // Поля для проверки ошибки 
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 
  
    // Обработка изменения имени 
    const handleName = (e) => { 
        setName(e.target.value); 
        setSubmitted(false); 
    }; 
  
    // Обработка изменения почты 
    // const handleEmail = (e) => { 
    //     setEmail(e.target.value); 
    //     setSubmitted(false); 
    // }; 
  
    // Обработка изменения пароля
    const handlePassword = (e) => { 
        setPassword(e.target.value); 
        setSubmitted(false); 
    }; 
  
    // Обработка отправки формы 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (name === "" || /*email === "" || */ password === "") { 
            setError(true); 
        } else { 
            setSubmitted(true); 
            setError(false); 
        } 
    }; 
  
    // Отображение сообщения об успешном завершении 
    const successMessage = () => { 
        return ( 
            <div 
                className={styles.success}
                style={{ 
                    display: submitted ? "" : "none", 
                }} 
            > 
                <p>Пользователь {name} успешно зарегистрирован!</p> 
            </div> 
        ); 
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
                <h1>Регистрация</h1> 
            </div> 
  
            {/* Вызов сообщений */} 
            <div className={styles.messages}> 
                {errorMessage()} 
                {successMessage()} 
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
                <label className={styles.label}></label> 
                <input 
                    onChange={handlePassword} 
                    className={styles.input}
                    value={password} 
                    type="password"
                    placeholder='Повторите пароль'
                /> 
                <button onClick={handleSubmit} className={styles.button} type="submit"> Регистрация </button> 
            </form> 
        </div> 
    );
}

export default Registration;