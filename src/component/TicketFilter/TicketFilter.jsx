
import React from 'react-dom';

import classes from '../TicketFilter/TicketFilter.module.scss';
import cn from 'classnames';


const TicketFilter = () => {

    return (
        <div className={classes.ticketfilter}>
            
            <div className={cn(classes.ticketfilter__list)}>
                <div className={classes.ticketfilter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <label className={classes.ticketfilter__item}><input type="checkbox" value="all" />Все</label>
                <label className={classes.ticketfilter__item}><input type="checkbox" checked="true" value="null" />Без пересадок</label>
                <label className={classes.ticketfilter__item}><input type="checkbox" checked="true"  value="one" />1 пересадка</label>
                <label className={classes.ticketfilter__item}><input type="checkbox" checked="true"  value="two" />2 пересадки</label>
                <label className={classes.ticketfilter__item}><input type="checkbox" value="three" />3 пересадки</label>
            </div>
        </div>
    );
}

export default TicketFilter;