const filterState = {
    checkboxid1: true,
    checkboxid2: true,
    checkboxid3: true,
    checkboxid4: true,
    checkboxid5: true,
  };
  
  const filterReducer = (state = filterState, action) => {
    switch (action.type) {
      case 'Все':
        if (state.checkboxid1 === true) {
          for (const key in state) {
            state[key] = false;
          }
          return {
            ...state,
          };
        }
  
        if (state.checkboxid1 === false) {
          for (const key in state) {
            state[key] = true;
          }
          return {
            ...state,
          };
        }
  
        break;
  
      case 'Без пересадок':
        return {
          ...state,
          checkboxid2: !state.checkboxid2,
        };
  
      case '1 пересадка':
        return {
          ...state,
          checkboxid3: !state.checkboxid3,
        };
  
      case '2 пересадки':
        return {
          ...state,
          checkboxid4: !state.checkboxid4,
        };
  
      case '3 пересадки':
        return {
          ...state,
          checkboxid5: !state.checkboxid5,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;