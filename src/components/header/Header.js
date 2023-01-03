import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../actions/modeActions';

import './Header.scss';

const Header = () => {
    const timeRemaining = useSelector((state) => state.time.timeRemaining);
    const darkMode = useSelector((state) => state.mode.darkMode);
    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkMode));
    }

    return (
        <div className={darkMode === true ? 'header dark-mode' : 'header'} style={{ backgroundColor: 'white' }}>
            <div className="candidate">Front-end Test Candidate</div>
            <div className="time-remaining">
                { timeRemaining }
                {' '}
                seconds remaining
            </div>
            <button onClick={ () => toggleDarkMode() } type="button" tabIndex={1}
                className={darkMode === true ? 'theme-toggle dark-mode' : 'theme-toggle'}>
                {darkMode ? 'Light mode 🌝' : 'Dark mode 🌚' }
            </button>
        </div>
    );
};

export default Header;
