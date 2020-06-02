import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState();

  const url =
    "http://www.culture.go.kr/openapi/rest/publicperformancedisplays/d/";

  const API_KEY = decodeURIComponent(
    "4d9vPm7Zg5kyGpOy7iZaq0n440clXZbVarqfEoJTt%2FJuztOA275ZerFRXZz5HKLqqSmGmDEZEXVy8xtLbTWM%2Bw%3D%3D"
  );

  const getData = async () => {
    const res = await axios.get(url, {
      params: {
        ServiceKey: API_KEY,
        ComMsgHeader: "",
        RequestTime: "20100810:23003422",
        CallBackURI: "",
        MsgBody: "",
        seq: 12341,
      },
    });
    const { data } = await res;
    console.log(data);
    setData(data);
  };

  return (
    <div className="App">
      <button onClick={getData}>api</button>
    </div>
  );
};

export default App;
