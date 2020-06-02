import React from 'react'
import Buttons from '../Buttons'


describe('ProgressBar', () => {

    let wrapper;
    const buttons = [-18, -13, 10, 38];
    beforeEach(() => {
        wrapper = shallow(
          <Buttons 
          buttons={buttons} 
          decreaseProgressBar={() => {}}
          increaseProgressBar={() => {}}
          />
        );

        jest.clearAllMocks();
    });

    test("All Buttons should render ", () => {
        wrapper.setProps({ buttons: buttons})
        expect(wrapper.find(".btn-p").length).toBe(4);
    });
});