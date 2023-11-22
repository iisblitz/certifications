import React, { useEffect, useState, useRef } from 'react';
import {select, scaleLinear, max, axisBottom, axisLeft} from 'd3';

const GDP = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataset, setDataset] = useState(null);
  const svgRef = useRef();


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDataset(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    if (!dataset) return;

    // Set up svg
    const w = 600;
    const h = 400;
    const svg = select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', '#d3d3d3')
      .style('overflow', 'visible');

    // Set up scaling
    const xScale = scaleLinear()
      .domain([0, dataset.length - 1])
      .range([0, w]);

    const yScale = scaleLinear()
      .domain([0, max(dataset, (d) => d[1])])
      .range([h, 0]);

    // Set up axis
    const xAxis = axisBottom(xScale).ticks(dataset.length / 20).tickFormat((i) => i + 1);
    const yAxis = axisLeft(yScale).ticks(5);

    // Set up data for svg
    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', (d) => yScale(d[1]))
      .attr('width', w / dataset.length)
      .attr('height', (d) => h - yScale(d[1]))
      .attr('fill', 'blue')
      .attr("class","bar")
      .attr("data-date", (d) => d[0]) // User Story #6
      .attr("data-gdp", (d) => d[1]) // User Story #6
      .append("title")
      .text(d => d)

    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${h})`)
      .attr("id", "x-axis")  // User Story #2
      .attr("class", "ticks");

    svg.append('g')
      .call(yAxis)
      .attr("id", "y-axis")  // User Story #3
      .attr("class", "ticks");

    // Title
    svg.append("text")
      .attr("x", w / 2)
      .attr("y", 30)
      .attr("id", "title")  // User Story #1
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text("GDP Bar Chart");

    // Tooltip

  }, [dataset]);

  if (error) {
    return <section><div>Error: {error.message}</div></section>;
  } else if (!isLoaded) {
    return <section><div>Loading...</div></section>;
  } else {
    return (
      <section>
        <svg ref={svgRef}></svg>
      </section>
    );
  }
};

export default GDP;
