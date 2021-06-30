import React from 'react';

import cn from 'classnames';
import classes from './Ticket.module.scss';

import logo2 from '../../logos/logo2.svg';

const Ticket = () => {
  
    return (
      <div className={classes.ticket}>
        <div className={classes.ticket__header}>
          <div className={classes.ticket__price}>13 400 P</div>
          <img src={logo2} className={classes.ticket__companylogo} alt="loading logo" />
        </div>
        <div className={classes.ticket__info}>
          <div className={cn(classes.ticket__flight, classes.flight)}>
            <div className={classes.flight__inner}>
              <div className={classes.flight__header}>MOW-HKT</div>
              <div className={classes.flight__content}>10:45 - 08:00</div>
            </div>
            <div className={classes.flight__inner}>
              <div className={classes.flight__header}>В пути</div>
              <div className={classes.flight__content}>21ч. 15м.</div>
            </div>
            <div className={classes.flight__inner}>
              <div className={classes.flight__header}>2 ПЕРЕСАДКИ</div>
              <div className={classes.flight__content}>HKG, JNB</div>
            </div>
          </div> 
        </div>
        <div className={classes.ticket__info}>
          <div className={cn(classes.ticket__flight, classes.flight)}>
            <div className={classes.flight__inner}>
              <div className={classes.flight__header}>MOW-HKT</div>
              <div className={classes.flight__content}>10:45 - 08:00</div>
            </div>
            <div className={classes.flight__inner}>
              <div className={classes.flight__header}>В пути</div>
              <div className={classes.flight__content}>21ч. 15м.</div>
            </div>
            <div className={classes.flight__inner}>
              <div className={classes.flight__header}>2 ПЕРЕСАДКИ</div>
              <div className={classes.flight__content}>HKG, JNB</div>
            </div>
          </div> 
        </div>
      </div>
  );
  };


export default Ticket;