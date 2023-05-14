import React, { createContext, useContext, useReducer } from 'react';
import MyReducer, { initialState } from './MyReducer';

// Создание контекста
const MyContext = createContext();

export const useMyContext = () => {
  return useContext (MyContext)
}
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