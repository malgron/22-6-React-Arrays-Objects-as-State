import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const timestamps = [1000000000000, 1000000001000];
  const [buttonClicks, setButtonClicks] = useState([]);
 const handleButtonClicks =  (newTimestamps)=>{
    setButtonClicks([...buttonClicks, newTimestamps])
  }
                                                   
  return (
    <div>
      <TimestampsDisplay timestamps={buttonClicks} />
      <ClickTimes buttonClicks={handleButtonClicks} />
    </div>
    );
}

export default App;
