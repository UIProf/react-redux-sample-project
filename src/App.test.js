import React from 'react';
import App from './App';
import ProgressBar from './components/Progress-bar';
import Buttons from './components/Buttons';

describe('App', () => {

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <App />
      );

      jest.clearAllMocks();
    });

    test("APP container should render ", () => {
        expect(wrapper.find(".container").exists()).toEqual(true);
    });

    test("App should render a ProgressBar component ", () => {
      expect(wrapper.find(ProgressBar).length).toBe(1);
    });

    test("App should render four buttons", () => {
      expect(wrapper.find(Buttons).length).toBe(1);
    })

    test("App should render a Select Element", () => {
      expect(wrapper.find(".bar-handler > .selectbox").length).toBe(1);
    })
});