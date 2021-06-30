import React from 'react-dom';

import TicketList from '../TiketList/TicketList';
import TicketFilter from '../TicketFilter/TicketFilter'

import logo from '../../logos/Logo.png';

import classes from './App.module.scss';




function App() {
  return (
    <div>
    <header className={classes.header}>
      <img src={logo} className={classes.header__logo} alt="Logo" />
    </header>
      <div className={classes.content}>
        <div className={classes.content__filter}><TicketFilter /></div>
        <div><TicketList /></div>
      </div>
      
    </div>
  );
}



export default App;
