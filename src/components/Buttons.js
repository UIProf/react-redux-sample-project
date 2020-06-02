import React from 'react'

const Buttons = ({ buttons, decreaseProgressBar, increaseProgressBar }) => {
  return (
    <>
      {buttons.map((button, index) => {
        const clickEvent =
          button < 0 ? decreaseProgressBar : increaseProgressBar;

        return (
          <button
            className="btn-p"
            type="button"
            value={button}
            onClick={clickEvent}
            key={index}
          >
            {button}
          </button>
        );
      })}
    </>
  );
};

export default Buttons;