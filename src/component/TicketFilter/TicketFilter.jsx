
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/filter'

import styles from '../TicketFilter/TicketFilter.module.scss';



const TicketFilter = ({ checked, ALL, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS }) => {

    const checkFilter = Object.values(checked.filter, (checked.filter.checkboxid1 = undefined));
    const filtered = checkFilter.filter((el) => el === true);
    if (filtered.length >= 4) {
        checked.filter.checkboxid1 = true;
    } else if (filtered.length < 4) {
        checked.filter.checkboxid1 = false;
    }

    return (
        <div className={styles.ticketfilter}>
            
            <div className={styles.ticketfilter__list}>
                <div className={styles.ticketfilter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <label className={styles.ticketfilter__item}>
                    <input 
                    type="checkbox"
                    className={styles.myinput}
                    onChange={ALL} 
                    checked={checked.filter.checkboxid1} />
                Все</label>
                <label className={styles.ticketfilter__item}>
                    <input 
                    type="checkbox" 
                    className={styles.myinput}
                    onChange={NO_TRANSFERS} 
                    checked={checked.filter.checkboxid2} />
                Без пересадок</label>
                <label className={styles.ticketfilter__item}>
                    <input 
                    type="checkbox" 
                    className={styles.myinput}
                    onChange={ONE_TRANSFER} 
                    checked={checked.filter.checkboxid3} />
                1 пересадка</label>
                <label className={styles.ticketfilter__item}>
                    <input 
                    type="checkbox" 
                    className={styles.myinput}
                    onChange={TWO_TRANSFERS} 
                    checked={checked.filter.checkboxid4} />
                2 пересадки</label>
                <label className={styles.ticketfilter__item}>
                    <input 
                    type="checkbox" 
                    className={styles.myinput}
                    onChange={THREE_TRANSFERS} 
                    checked={checked.filter.checkboxid5} />
                3 пересадки</label>
            </div>
        </div>
    );
}

TicketFilter.propTypes = {
    checked: PropTypes.objectOf(PropTypes.object),
    ALL: PropTypes.func,
    NO_TRANSFERS: PropTypes.func,
    ONE_TRANSFER: PropTypes.func,
    TWO_TRANSFERS: PropTypes.func,
    THREE_TRANSFERS: PropTypes.func
};

TicketFilter.defaultProps = {
    ALL: () => {},
    NO_TRANSFERS: () => {},
    ONE_TRANSFER: () => {},
    TWO_TRANSFERS: () => {},
    THREE_TRANSFERS: () => {},
    checked: () => {}
}

const mapStateToProps = (state) => {
    return {
        checked: state,
    };
};

export default connect(mapStateToProps, actions)(TicketFilter);