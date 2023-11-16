import React, { useEffect, useState, useRef } from 'react';
import {scaleLinear, select,  line, axisBottom, axisLeft, curveCardinal, max } from "d3";



const Head = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataset, setDataset] = useState(null);
const svgRef = useRef()

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDataset(result.data)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    if(!dataset)return;
    //set up svg
    const w = 85
    const h = 85
    const svg = select(svgRef.current)
    .attr("width",w+"vw")
    .attr("height",h+"vh")
    .style("background","#d3d3d3")    
    .style("overflow","visible")
    //set up scaling
    const xScale = scaleLinear()
    .domain([0, dataset.length -1])
    .range([0, w])
    const yScale = scaleLinear()
    .domain([0, max(dataset, d => d[1])])  // Corrected domain definition
    .range([h, 0]);
    const generateScaledLine = line()
    .x((d,i)=> xScale(i))
    .y(yScale)
    .curve(curveCardinal);
    //set up axis
    const xAxis = axisBottom(xScale)
  .ticks(dataset.length / 20)
  .tickFormat(i => i + 1);
    const yAxis= axisLeft(yScale)
    .ticks(5)

    //set up data for svg
    svg.selectAll("line")
    .data([dataset])
    .join("path")
    .attr("d",d => generateScaledLine(d))
    .attr("fill","blue")
    .attr("stroke","black")

    svg.append("g")
    .call(xAxis)
    .attr("transform",`translate(${h},0`)

    svg.append("g")
    .call(yAxis)
    

    
  }, [ dataset]);

  if (error) {
    return <section><div>Error: {error.message}</div></section>;
  } else if (!isLoaded) {
    return <section><div>Loading...</div></section>;
  } else {
    return (
      <section>
        <svg ref={svgRef}>

        </svg>
      </section>
    );
  }
};

export default Head;
