import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({data:{land, interiors}}) => (
  <g className="marks">
    <path className="sphere" d={path({type:'Sphere'})} />
    {land.features.map((feature) => (
      <path className="land" d={path(feature)} />
    ))}
    <path className="interiors" d={path(interiors)} />
  </g>
)