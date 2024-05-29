import React from 'react';
import { useState } from "react";

import { REGISTRATION_ROUTE } from "../utilis/consts";

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
                className="success"
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
                className="error"
                style={{ 
                    display: error ? "" : "none", 
                }} 
            > 
                <p>Пожалуйста, заполните все поля</p> 
            </div> 
        ); 
    }; 
  
    return ( 
        <div className="form"> 
            <div> 
                <h1>Регистрация</h1> 
            </div> 
  
            {/* Вызов сообщений */} 
            <div className="messages"> 
                {errorMessage()} 
                {successMessage()} 
            </div> 
  
            <form> 
                <label className="label"></label> 
                <input 
                    onChange={handleName} 
                    className="input"
                    value={name} 
                    type="text"
                    placeholder='Логин'
                /> 
  
                {/* <label className="label"></label> 
                <input 
                    onChange={handleEmail} 
                    className="input"
                    value={email} 
                    type="email"
                    placeholder='Почта'
                />  */}
  
                <label className="label"></label> 
                <input 
                    onChange={handlePassword} 
                    className="input"
                    value={password} 
                    type="password"
                    placeholder='Пароль'
                /> 
                <label className="label"></label> 
                <input 
                    onChange={handlePassword} 
                    className="input"
                    value={password} 
                    type="password"
                    placeholder='Повторите пароль'
                /> 
                <button onClick={handleSubmit} className="btn" type="submit"> Регистрация </button> 
            </form> 
        </div> 
    );
}

export default Registration;