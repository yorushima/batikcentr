import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom' // Switch = Routes, Redirect = Navigate
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utilis/consts';

const AppRouter = () => {
  const isAuth = false
  return ( // Разобраться с localhost
    <Routes> 
      {isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} Component={Component} exact/>
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} Component={Component} exact/>
      )}
      {/* <Navigate to={SHOP_ROUTE}/> */} 
    </Routes> // В версии 6 Navigate нельзя использовать внутри Routes
  );
}

export default AppRouter;