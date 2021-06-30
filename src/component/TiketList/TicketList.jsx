import React from 'react-dom';

import Ticket from '../Ticket/Ticket';

import classes from '../TiketList/TicketList.module.scss';


const TicketList = () => {

    return (
        <div className={classes.ticketlist}>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    );
}

export default TicketList;