import React from 'react'
import { useSelector } from "react-redux";

const Buttons = ({decreaseProgressBar, increaseProgressBar }) => {

   const buttons = useSelector(state => state.appReducer.buttons);

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
            onClick={(e) => clickEvent(e)}
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