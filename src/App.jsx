import React from "react"
import './App.css';
import './Practice.css';
import Practice from "./Components/Practice";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FindPage from "./Components/Find";

function App() {
  return (
    <>
      <div className="App">
        <FindPage/>
      </div>
      <Practice/>
    </>
  );
}

export default App;
