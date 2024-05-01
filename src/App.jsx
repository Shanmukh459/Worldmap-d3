import React from "react";
import { useData } from "./useData";
import { Marks } from "./Marks";

const height = 500;
const width = 960;

function App() {
  const data = useData();

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <svg height={height} width={width}>
      <Marks data={data} />
    </svg>
  );
}

export default App;
