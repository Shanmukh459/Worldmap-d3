import React, {useEffect, useState} from "react"
import { useData } from "./useData"

const height = 500
const width = 960

function App() {
  const data = useData()
  if(!data) {
    return <h1>Loading...</h1>
  }

  console.log(data)
  return (
    <svg height={height} width={width} >
      {/* {data.map()} */}
    </svg>
  )
}

export default App
