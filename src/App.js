import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_PATH } from "./constants/Path";
import ProgressBar from './components/Progress-bar'
import Buttons from './components/Buttons'

function App() {
  const [bars, setBars] = useState([])
  const [buttons, setButtons] = useState([])
  const [limit, setLimit] = useState()
  const [progressbar, setProgressBar] = useState(0)

  useEffect(() => {
    axios
      .get(API_PATH)
      .then(response => {
        console.log(response.data);
        setBars(response.data.bars);
        setButtons(response.data.buttons.reverse());
        setLimit(response.data.limit);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const replaceAt = (array, index, value) => {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }

  const increaseProgressBar = e => {
    const BValue = e.target.value;
    const newVal = parseInt(bars[progressbar] + parseInt(BValue));
    const newarray = replaceAt(bars, progressbar, newVal);
    setBars(newarray);
    
    
  } 

  const decreaseProgressBar = e => {
    const BValue = e.target.value;
    const newVal = bars[progressbar] - parseInt(BValue.substring(1, 3)) ;
    const newarray = replaceAt(bars, progressbar, newVal);
    setBars(newarray);
  } 


  return (
    <div className="container">
      <h1>Progress Bar Demo</h1>
      <ProgressBar Bars={bars} limit={limit} />
      <div className="bar-handler">
        <select
          className="selectbox"
          onChange={e => setProgressBar(e.target.value)}
        >
          {Object.keys(bars).map((key, index) => (
            <option value={key} key={index}>{`#progress${key}`}</option>
          ))}
        </select>
        <Buttons
          buttons={buttons}
          decreaseProgressBar={decreaseProgressBar}
          increaseProgressBar={increaseProgressBar}
        />
        
      </div>
    </div>
  );
}

export default App;

