/*global chrome*/
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState();
  // function processRequest(dict) {
  //   console.log("inside test");
  //   console.log(dict);
  // }
  // console.log("first");

  useEffect(() => {
    console.log("first");
    // chrome.webRequest.onCompleted.addListener(processRequest, {
    //   urls: ["https://developer.chrome.com/*"],
    //   types: ["font"],
    // });

    axios
      .get(`https://erp.sprintx.net/api/attendances/`)
      .then((res) => {
        setFirst("done");
        console.log(res);
      })
      .catch((e) => {
        setFirst(
          `${e?.response?.config?.method}: ${e?.response?.request?.responseURL}`
        );
        console.log(e);
      });
  }, []);

  console.log("outside test");

  return <div className="App">{first}</div>;
}

export default App;
