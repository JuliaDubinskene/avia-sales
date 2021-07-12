import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Ticket-flight-info-item.module.scss';

const TicketFlightInfoItem = ({ origin, destination, date, duration, stops }) => {
  const seconds = moment(date).unix();
  const allSeconds = seconds + duration * 60;
  const timeDeparture = moment.unix(allSeconds).utc().format('hh:mm');
  const durationFlight = moment
    .unix(duration * 60)
    .utc()
    .format('hh:mm');

  let transfers;
  if (stops.length === 0) {
    transfers = 'БЕЗ ПЕРЕСАДОК';
  }
  if (stops.length === 1) {
    transfers = '1 ПЕРЕСАДКА';
  }
  if (stops.length === 2) {
    transfers = '2 ПЕРЕСАДКИ';
  }
  if (stops.length === 3) {
    transfers = '3 ПЕРЕСАДКИ';
  }

  return (
    <div className={styles['ticket-flight-content']}>
      <div className={styles['ticket-flight-info__block-1']}>
        <p className={styles['ticket-flight-info__label']}>
          {origin} - {destination}
        </p>
        <p className={styles['ticket-flight-info__value']}>
          {date.substring(11, 16)}-{timeDeparture}
        </p>
      </div>
      <div className={styles['ticket-flight-info__block-2']}>
        <p className={styles['ticket-flight-info__label']}>В пути</p>
        <p className={styles['ticket-flight-info__value']}>{durationFlight}</p>
      </div>
      <div className={styles['ticket-flight-info__block-3']}>
        <p className={styles['ticket-flight-info__label']}>{transfers}</p>
        <p className={styles['ticket-flight-info__value']}>{stops.join()}</p>
      </div>
    </div>
  );
};

TicketFlightInfoItem.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  stops: PropTypes.instanceOf(Array).isRequired
};

export default TicketFlightInfoItem;
