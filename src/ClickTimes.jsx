import React from "react";

function ClickTimes({ buttonClicks }) {
  return (
    <React.Fragment>
      <button onClick={()=> buttonClicks(new Date())}>
       Display Button Clicks
      </button>
    </React.Fragment>
  )
}

export default ClickTimes;
