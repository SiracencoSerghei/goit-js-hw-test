import React, { createContext, useReducer } from 'react';
import MyReducer, { initialState } from './MyReducer';

// Создание контекста
export const MyContext = createContext();

// Компонент-провайдер контекста
function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(MyReducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
export default MyContextProvider;