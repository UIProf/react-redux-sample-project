import React from 'react'
import ProgressBar from '../Progress-bar'


describe('ProgressBar', () => {

    let wrapper;
    const Bars = [23, 34, 56];
    beforeEach(() => {
      wrapper = shallow(
        <ProgressBar
            Bars={Bars}
            limit={130}
         />
      );

      jest.clearAllMocks();
    });

    test("Progressbar container should render ", () => {
        expect(wrapper.find(".progress-bar-box").exists()).toEqual(true);
    });

    test("all Progressbar render as per set props length ", () => {
        wrapper.setProps({ Bars: Bars });
        expect(wrapper.find(".progress-bar").length).toEqual(Bars.length);
    });
});