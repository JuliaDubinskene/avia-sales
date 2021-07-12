const sortState = {
    isCheapest: true,
    isFastest: false,
  };
  
  const sortReducer = (state = sortState, action) => {
    switch (action.type) {
      case 'Самый дешевый':
        return {
          ...state,
          isCheapest: !state.isCheapest,
          isFastest: !state.isFastest,
        };
  
      case 'Самый быстрый':
        return {
          ...state,
          isCheapest: !state.isCheapest,
          isFastest: !state.isFastest,
        };
  
      default:
        return state;
    }
  };
  
  export default sortReducer;