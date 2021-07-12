import React from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import TicketFlightInfoItem from '../Ticket-flight-info-item/Ticket-flight-info-item';
import styles from './Ticket-flight-info-list.module.scss';

const TicketFlightInfoList = ({ Ticket }) => {
  const route = Ticket.segments.map((item) => (
    <TicketFlightInfoItem
      origin={item.origin}
      destination={item.destination}
      date={item.date}
      duration={item.duration}
      stops={item.stops}
      key={uuidv4()}
    />
  ));

  return <div className={styles['ticket-flight-list']}>{route}</div>;
};

TicketFlightInfoList.propTypes = {
  Ticket: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TicketFlightInfoList;
