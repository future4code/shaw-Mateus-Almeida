
import React from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const Navigate = useNavigate()
  const voltarHome = () => {
    localStorage.removeItem("tokenAutorizacao")
    Navigate("/")
  }
  return (
    <div>
      <button onClick={voltarHome}>lougut</button>
      <br>
      </br>
      ola esse e o Feed
    </div>

  );
}

export default Feed;
