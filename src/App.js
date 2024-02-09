// import User from './User'
// import Funcomponent from './Funcomp';
// import Userr from './Classcompo';
// import State from './State';
// eslint-disable-next-line no-unused-vars
import React from "react";
import Employee from "./Employee";

function App() {
  return (
    <div style={{  display: "flex", width: "100%" }}>
      <div style={{ backgroundColor:"pink",flex: 1, textAlign: "center" }}>
        <h1>Names</h1>
        <h1>-------------------------------------------</h1>

        <h1>shahin</h1>
        <h1>-------------------------------------------</h1>

        <h1>aman</h1>
        <h1>-------------------------------------------</h1>

        <h1>busho</h1>
        <h1>-------------------------------------------</h1>

        <h1>muskan</h1>

      </div>

      <div style={{backgroundColor:"blue", flex: 1, textAlign: "center" }}>
        <h1>Data</h1>
        <h1>-------------------------------------------</h1>

        <Employee name={"shahin"} email={"shahin.@com"} />
        <h1>-------------------------------------------</h1>
        <Employee name={"aman"} email={"aman.@com"} />
        <h1>-------------------------------------------</h1>

        <Employee name={"busho"} email={"busho.@com"} />
        <h1>-------------------------------------------</h1>

        <Employee name={"muskan"} email={"muskann.@com"} />
        
      </div>
    </div>
  );
}

export default App;


    {/* <Userr/>
<Funcomponent/>
    <User/>
    <User/>
    <State/> */}

    

