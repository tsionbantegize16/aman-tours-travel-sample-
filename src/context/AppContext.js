import React, { createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  // Define your initial global state here
  user: null,
  isAuthenticated: false,
  currency: 'USD',
  // ... other global state
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions to dispatch to the reducer
  const loginUser = (userData) => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: userData,
    });
  };

  const logoutUser = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const setCurrency = (newCurrency) => {
    dispatch({
      type: 'SET_CURRENCY',
      payload: newCurrency,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        loginUser,
        logoutUser,
        setCurrency,
        dispatch, // You can also provide the dispatch function directly if needed
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, AppContext };