import React ,{ useState } from "react";

function State() {
  const [data, setdata] = useState("shahin")
  function updatedata() {
    setdata("aman");
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={updatedata}>update data</button>
    </>
  );
}
export default State;
