import React from 'react';
import PropTypes from "prop-types";

import TicketFlightInfoList from '../Ticket-flight-info-list/Ticket-flight-info-list';
import styles from './Ticket.module.scss';

const Ticket = ({Ticket}) => (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <div className={styles.ticket__price}>
          <span>{Ticket.price} Р</span>
        </div>
        <div className={styles.ticket__companylogo}>
          <img src={`https://pics.avs.io/99/36/${Ticket.carrier}.png`} alt="logo"/>
        </div>
      </div>
      <div className={styles.ticket__body}>
        <TicketFlightInfoList Ticket={Ticket} />
      </div>
    </div>
  );

Ticket.propTypes = {
    Ticket: PropTypes.objectOf(PropTypes.object).isRequired
  };

export default Ticket;
