const AppReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      case 'SET_CURRENCY':
        return {
          ...state,
          currency: action.payload,
        };
      // Add more cases for other actions
      default:
        return state;
    }
  };
  
  export default AppReducer;