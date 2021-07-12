import React from 'react-dom';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Spin, Alert, Result } from 'antd';
import * as actions from '../../actions/loading';
import Ticket from '../Ticket/Ticket'
import { useEffect } from 'react';
import styles from '../TiketList/TicketList.module.scss'


const TicketList = ({
    loadedTickets,
    filteredTickets,
    getAllTickets,
    getSearchId,
    searchId,
    checkboxid2,
    checkboxid3,
    checkboxid4,
    checkboxid5,
    isCheapest,
    isFastest,
    isFetching,
    isFetchError
}) => {

    useEffect(() => {
        getSearchId();
    }, [getSearchId]);

    searchId.replace(/"/g, '');
    useEffect(() => {
        getAllTickets(searchId);
    }, [getAllTickets, searchId]);

    checkboxid2 === true//eslint-disable-line
    ? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
      ))
    : filteredTickets;
  checkboxid3 === true//eslint-disable-line
    ? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
      ))
    : filteredTickets;
  checkboxid4 === true//eslint-disable-line
    ? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
      ))
    : filteredTickets;
  checkboxid5 === true//eslint-disable-line
    ? (filteredTickets = loadedTickets.filter(//eslint-disable-line
        (ticket) => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
      ))
    : filteredTickets;

  isCheapest === true//eslint-disable-line
    ? filteredTickets.sort(function (a, b) {//eslint-disable-line
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      })
    : filteredTickets;

  isFastest === true  ? filteredTickets.sort(function (a, b) {//eslint-disable-line
        if (a.segments[0].duration + a.segments[0].duration > b.segments[0].duration + b.segments[1].duration) {
          return 1;
        }
        if (a.segments[0].duration + a.segments[0].duration < b.segments[0].duration + b.segments[1].duration) {
          return -1;
        }
        return 0;
      })
    : filteredTickets;

    function onClickButton() {
      getAllTickets(searchId);
    }
  

  const spinner = isFetching ? (
    <Spin tip="Loading...">
      <Alert />
    </Spin>
  ) : null;

  const error = isFetchError ? <Result subTitle="Sorry, something went wrong." /> : null;

  const noResults =
    filteredTickets.length === 0 && !spinner ? (
      <Result title="Рейсов, подходящих под заданные фильтры, не найдено" />
    ) : null;

  const loadButton =
    !spinner && !noResults ? (
      <button type="button" className={styles['load-button']} onClick={() => onClickButton()}>
        Загрузить еще 5 билетов!
      </button>
    ) : null;
  const elements = filteredTickets.map((item, index) => (index < 5 ? <Ticket Ticket={item} key={uuidv4()} /> : null));

  const content = (
    <>
      <div className={styles['tickets-list']}>
        {elements}
        {loadButton}
      </div>
    </>
  );

    return (
    <>
      {noResults}
      {spinner}
      {error}
      {content}
    </>
    );
}

const mapStateToProps = (state) => {//eslint-disable-line
    return {
      loadedTickets: state.load.tickets,
      filteredTickets: state.load.filteredTickets,
      searchId: state.load.searchId,
      checkboxid2: state.filter.checkboxid2,
      checkboxid3: state.filter.checkboxid3,
      checkboxid4: state.filter.checkboxid4,
      checkboxid5: state.filter.checkboxid5,
      isCheapest: state.sort.isCheapest,
      isFastest: state.sort.isFastest,
      isFetching: state.load.isFetching,
      isFetchError: state.load.isFetchError,
    };
  };
  
  TicketList.propTypes = {
    loadedTickets: PropTypes.objectOf(PropTypes.object).isRequired,
    filteredTickets:  PropTypes.objectOf(PropTypes.object).isRequired,
    searchId: PropTypes.string.isRequired,
    checkboxid2: PropTypes.bool.isRequired,
    checkboxid3: PropTypes.bool.isRequired,
    checkboxid4: PropTypes.bool.isRequired,
    checkboxid5: PropTypes.bool.isRequired,
    isCheapest: PropTypes.bool.isRequired,
    isFastest: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isFetchError: PropTypes.bool.isRequired,
    getAllTickets: PropTypes.func.isRequired,
    getSearchId: PropTypes.func.isRequired
  };
  
  export default connect(mapStateToProps, actions)(TicketList);