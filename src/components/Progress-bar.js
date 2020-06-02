import React from 'react'
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProgressBar = () => {
    const Bars = useSelector(state => state.appReducer.bars);
    const limit = useSelector(state => state.appReducer.limit);
  return (
    <div className="progress-bar-box">
      {Bars && Bars.map((bar, index) => {
        const pvalue = parseInt((bar / limit) * 100);
        const correctValue = pvalue > 100 ? 100 : pvalue < 0 ? 0 : pvalue;
        return (
          <div className="progress-bar" id={`#progress${index}`} key={index}>
            <div
              style={{ width: `${correctValue}%` }}
              className={pvalue >= 100 ? "red" : ""}
            >
              {`${correctValue}%`}
            </div>
          </div>
        );
      })}
    </div>
  );
}

Buttons.propTypes = {
  Bars: PropTypes.array,
  limit: PropTypes.array
};

export default ProgressBar
