import React from 'react';
import api from "./api";

let data = {};

const getApi = () => {
  
}

const App = () => {
  api.res.then(res => console.log(res));
  return (
    <div className="App">
      apitest중
    </div>
  );
}

export default App;
