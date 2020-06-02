import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './components/Progress-bar'
import Buttons from "./components/Buttons";
import {
  fetchAppData,
  updateAddedBarArray,
  updateSubtractBarArray
} from "./actions/AppAction";
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [progressbar, setProgressBar] = useState(0)
  const bars = useSelector(state => state.appReducer.bars);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchAppData());
  }, [dispatch]);

  const replaceAt = (array, index, value) => {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }

  const increaseProgressBar = e => {
    const BValue = e.target.value;
    const newVal = parseInt(bars[progressbar] + parseInt(BValue));
    const newarray = replaceAt(bars, progressbar, newVal);
    dispatch(updateAddedBarArray(newarray));
  }

  const decreaseProgressBar = e => {
    const BValue = e.target.value;
    const newVal = bars[progressbar] - parseInt(BValue.substring(1, 3));
    const newarray = replaceAt(bars, progressbar, newVal);
    dispatch(updateSubtractBarArray(newarray));
  }
  return (
    <div className="container">
      <h1>Progress Bar Demo</h1>
      <ProgressBar />
      <div className="bar-handler">
        <select
          className="selectbox"
          onChange={e => setProgressBar(e.target.value)}
        >
          {bars &&
            Object.keys(bars).map((key, index) => (
              <option value={key} key={index}>{`#progress${key}`}</option>
            ))}
        </select>

        <Buttons
          decreaseProgressBar={decreaseProgressBar}
          increaseProgressBar={increaseProgressBar}
        />
      </div>
    </div>
  );
}

App.propTypes = {
  bars: PropTypes.array,
  buttons: PropTypes.array,
  limit: PropTypes.number,
  fetchAppData: PropTypes.func,

};



export default App;