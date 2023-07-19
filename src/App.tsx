import React from 'react';


// @ts-ignore
import { DM3 } from 'dm3-react';

function App() {
  return (
    <div className="App">

      <DM3
        defaultContact="help.dm3.eth"
        defaultServiceUrl={process.env.REACT_APP_DEFAULT_SERVICE}
        showAlways={true}
   
      />
    </div>
  );
}

export default App;
