import React from 'react';

const Context = React.createContext({
  page: '/',
  carrito: null,
  logueado: false
})

export default Context