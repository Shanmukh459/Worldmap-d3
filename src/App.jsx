import React, { useEffect, useState } from "react";
import { useData } from "./useData";
import { geoEqualEarth, geoPath } from "d3";

const height = 500;
const width = 960;

const projection = geoEqualEarth();
const path = geoPath(projection);

function App() {
  const data = useData();

  if (!data) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <svg height={height} width={width}>
      {data.features.map((feature) => (
        <path d={path(feature)} />
      ))}
    </svg>
  );
}

export default App;
