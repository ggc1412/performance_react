import axios from "axios";

//const key ="";
// const url =
//   "http://www.culture.go.kr/openapi/rest/publicperformancedisplays/period";

/* NodeJs 샘플 코드 */

const url =
  "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty";
let queryParams =
  "?" +
  encodeURIComponent("ServiceKey") +
  "=" +
  encodeURIComponent(
    "4d9vPm7Zg5kyGpOy7iZaq0n440clXZbVarqfEoJTt%2FJuztOA275ZerFRXZz5HKLqqSmGmDEZEXVy8xtLbTWM%2Bw%3D%3D"
  ); /* Service Key*/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" +
  encodeURIComponent("stationName") +
  "=" +
  encodeURIComponent("종로구"); /* */
queryParams +=
  "&" +
  encodeURIComponent("dataTerm") +
  "=" +
  encodeURIComponent("DAILY"); /* */
queryParams +=
  "&" + encodeURIComponent("ver") + "=" + encodeURIComponent("1.3"); /* */

const apiUrl = url + queryParams;

const api = async () => {
  const data = await axios.get(
    "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
  );
  console.log(data);
  return data;
};

const result = async () => {
  const result = await api();
  const rr = result.then();
  console.log(rr);
  return rr;
};

const resu = result();

export default resu;
