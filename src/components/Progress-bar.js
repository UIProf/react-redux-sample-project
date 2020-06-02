import React from 'react'

const ProgressBar = ({ Bars, limit }) => {
  return (
    <div className="progress-bar-box">
          { Bars && Bars.map((bar, index) => {
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
      }
      )}
    </div>
  );
};

export default ProgressBar
