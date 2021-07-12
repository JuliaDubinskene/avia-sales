const loadingState = {
    searchId: '',
    tickets: [],
    filteredTickets: [],
    stop: false,
    isFetching: true,
    isFetcherror: false,
  };
  
  export default function loadingReducer(state = loadingState, action) {
    switch (action.type) {
      case 'Загрузить ID':
        return {
          ...state,
          searchId: action.payload.searchId,
        };
  
      case 'Загрузить билеты':
        return {
          ...state,
          tickets: action.payload.tickets,
        };
  
      case 'Загрузка данных':
        return {
          ...state,
          isFetching: action.isFetching,
        };
  
      case 'Обработка ошибки':
        return {
          ...state,
          isFetchError: action.isFetchError,
        };
  
      case 'Завершение поиска':
        return {
          ...state,
          stop: action.payload.stop,
        };
  
      default:
        return state;
    }
  }
  
  export const getAllTicketsAction = (payload) => ({ type: 'Загрузить билеты', payload });
  
  export const getSearchIdAction = (payload) => ({ type: 'Загрузить ID', payload });
  
  export const toggleIsFetching = (isFetching) => ({ type: 'Загрузка данных', isFetching });
  
  export const setFetchError = (isFetchError) => ({ type: 'Обработка ошибки', isFetchError });
  
  export const setStopLoading = (payload) => ({ type: 'Завершение поиска', payload });