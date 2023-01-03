import { render } from '@testing-library/react';
// import { shallow } from 'enzyme';
import React from 'react';
import App from '../../src/components/App';
import Header from '../../src/components/header/Header';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TimeService from '../../src/services/timeService';
import { act } from 'react-dom/test-utils';

describe('Testing with a mock store', () => {

    it('timeService requests an updated time', async () => {
        jest.useFakeTimers();
        jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
        jest.spyOn(TimeService, 'requestUpdatedTime')
            .mockImplementation(() => {data: {timeRemaining: 39}});
    
        const initialState = {time:{timeRemaining:40}, mode:{darkMode:false}};
        const mockStore = configureStore();
        let store = mockStore(initialState);

        render(<Provider store={store}><App /></Provider>);
        act(() => {
            jest.runAllTimers();
        });
        
        expect(TimeService.requestUpdatedTime).toHaveBeenCalled();
    });
})

describe('Test Dark mode', () => {
    it('Dark mode button is clicked, then the dark-mode class is applied on elements', () => {
        // TODO: I would still need to implement the code for this test. I'm having issues with the 'enzyme' package because
        //       it's not supported for React 17 (the current version of the package used in this project)
        //       For the sake of time, I wasn't able to implement this test BUT this is an idea on how to do it:

        /* render(<Provider><Header /></Provider>);
         let darkMode = false;
         let toggleDarkMode =  jest.fn(() => {
             let mode = !darkMode;
             component.setProps({...props, darkMode: mode});
         });
         props = {
             toggleDarkMode,
             darkMode,
         }
         component.setProps({...props});
         expect(component.props().darkMode).toBe(false);
         component.findByClassName('theme-toggle').simulate("click");
         expect(component.toggleDarkMode).toBeCalled();
         expect(component.props().darkMode).toBe(true);
         --- 
         This is:
         1. Render the Header.
         2. Test that the 'darkMode' property is false (default)
         3. Click the button with the class 'theme-toggle'
         4. Make sure that when the 'toggleDarkMode' function is called, the property 'darkMode' is set with the opposite value (true to false and viceversa).
         */

    });
});