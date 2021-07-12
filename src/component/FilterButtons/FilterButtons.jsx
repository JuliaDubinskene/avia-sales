import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from '../../actions/sort';

import classNames from 'classnames/bind';
import styles from './FilterButtons.module.scss';


const FilterButtons = ({ sortedTickets, THE_CHEAPEST, THE_FASTEST }) => {
    const cn = classNames.bind(styles);
    const className1 = cn('filterbuttons', 'filterbuttons_active');
    const className2 = cn('filterbuttons');
    return (
        <div className={styles.buttons_container}>
            <button 
                type='button' 
                className={sortedTickets.sort.isCheapest === true ? className1 : className2}
                onClick={THE_CHEAPEST}>
            самый дешевый</button>
            <button type='button' 
                className={sortedTickets.sort.isFastest === true ? className1 : className2}
                onClick={THE_FASTEST}>
            самый быстрый</button>
        </div>
    );
}

FilterButtons.propTypes = {
    sortedTickets: PropTypes.objectOf(PropTypes.object),
    THE_CHEAPEST: PropTypes.func,
    THE_FASTEST: PropTypes.func,
};
  
FilterButtons.defaultProps = {
    sortedTickets: () => {},
    THE_FASTEST: () => {},
    THE_CHEAPEST: () => {},
};
  
const mapStateToProps = (state) => {
    return {
      sortedTickets: state,
    };
};
  
export default connect(mapStateToProps, actions)(FilterButtons);