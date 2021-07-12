import { getSearchIdAction, getAllTicketsAction, toggleIsFetching, setFetchError, setStopLoading } from '../store/loadingReducer';

export const getSearchId = () => {
  return (dispatch) => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => response.json())
      .then((json) => dispatch(getSearchIdAction(json)));
  };
};

export const getAllTickets = (searchId) => {
  return (dispatch) => {
    try {
      fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
        .then((response) => response.json())
        .then((json) => {
          dispatch(getAllTicketsAction(json));
          dispatch(toggleIsFetching(false));
          dispatch(setStopLoading(true));
        });
    } catch (error) {
      dispatch(setFetchError(true));
      dispatch(toggleIsFetching(false));
    }
  };
};