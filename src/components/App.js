import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRemainingTime } from '../actions/timeActions';
import timeService from '../services/timeService';
import Header from './header/Header';

import './App.scss';

// const GET_REMAINING_TIME_TIMER = 10 * 1000; // every 10 seconds
const GET_REMAINING_TIME_TIMER = 1000; // every second

const App = () => {
    const [currentTime, setCurrentTime] = useState('');
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.mode.darkMode);

    const updateTime = async () => {
        let timeRemaining
        if(currentTime === 50 || currentTime %10 !== 0){
            // console.log(currentTime, ' - Not called!');
            timeRemaining = currentTime-1;
        } else {
            // console.log(currentTime, ' - Called!');
            timeRemaining = await timeService.requestUpdatedTime();
        }
        setCurrentTime(timeRemaining);
        dispatch(setRemainingTime(timeRemaining));
    };

    React.useEffect(() => {
        setTimeout(function(){
            updateTime();
        },GET_REMAINING_TIME_TIMER);
    }, [currentTime]);

    return (
        <div className="app-wrapper default">
            <Header />
            <div className="body">
                <h1>Welcome to your Inspera exam</h1>
                <hr />
                <div className="text-interaction">
                    <label>
                        <p>What is your answer?</p>
                        <input
                            placeholder="Type your text here..."
                            aria-label="What is your answer? Type your text here..."
                            tabIndex={2}
                        />
                    </label>
                </div>
                <hr />
                <div className={darkMode ? "mpc-interaction dark-mode" : "mpc-interaction"}>
                    <label>
                        <input type="checkbox" value="Alternative 1" aria-label='Alternative 1' tabIndex={3} />
                        <p>Alternative 1</p>
                    </label>
                    <label>
                        <input type="checkbox" value="Alternative 2" aria-label='Alternative 2' tabIndex={4} />
                        <p>Alternative 2</p>
                    </label>
                    <label>
                        <input type="checkbox" value="Alternative 3" aria-label='Alternative 3' tabIndex={5} />
                        <p>Alternative 3</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default App;
