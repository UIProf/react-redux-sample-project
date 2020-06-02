import React from 'react';
import App from './App';
import ProgressBar from './components/Progress-bar';

describe('App', () => {

    let wrapper;
    const buttons = [-18, -13, 10, 38];

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
      expect(wrapper.find("button").length).toBe(4);
    })
});