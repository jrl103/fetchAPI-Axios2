// 통신할 때에는 json-server 켜져있나 확인해야함 !
// 터미널에서 api, json 동시에 켜야 먹힘

import React from "react";
import axios from "axios";

function App() {
  // ------------- Axios
  const axiosPing = async () => {
    //여기서 axios를 통해서 localhost 5001번에 ping으로 요청을 보낼 거임
    const res = await axios.get("http://localhost:5001/ping")
    console.log(res);

    window.alert(res.data.answer);
  }

  // -------------- Fetch
  // : fetch는 promise 반환하기 때문에 애초부터 async await 써놔야함
  // : 객체를 우리가 볼 수 있도록 바꿔주는 json 변환 과정이 필수적으로 들어감
  const fetchPing = async () => {
    const res = await fetch("http://localhost:5001/ping", {
      headers: {"Content-Type": "application/json"}
    } );
    
    // console.log(res);
    // Response ~~ 하는 객체가 찍힘 --> 바로 볼 수 있는 데이터가 아님

    // console.log(res.json()); 
    // json 함수 사용해서 확인할 수 있게 바꿔줌 --> promise 반환함 --> await 써주기

    const data = await res.json();
    console.log(data);
    // data 잘 뜨는 것 보고 alert 설정(다음 것 시작)

    window.alert(data.answer);
  }

  return (
    <div className="App">
      <button onClick={axiosPing}>악시오스를 사용해서 요청!</button>
      <button onClick={fetchPing}>패치를 사용해서 요청!</button>
    </div>
  );
}

export default App;
