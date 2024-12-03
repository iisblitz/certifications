import React, { useEffect, useState, useRef } from "react";
import { select, scaleLinear, scaleBand, axisBottom, axisLeft, scaleSequential, interpolateRgb} from 'd3';

const HeatMap = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const svgRef = useRef();
  const divRef = useRef();
  const [xdata, setXdata] = useState([]);
  const [ydata, setYdata] = useState([]);
  const [data, setData] = useState([]);
  const [baseT, setBaseT] = useState(0)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json")
      .then((resp) => resp.json())
      .then((result) => {
        setData(result.monthlyVariance);
        setXdata(result.monthlyVariance.map(e => e.year));
        setYdata(result.monthlyVariance.map(e => e.month));
        setBaseT(result.baseTemperature)
        setIsLoaded(true);
      }, error => {
        setError(error);
        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (error) console.log(error);

    const w = 800;
    const h = 600;

    const svg = select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', "visible");

   
    const setX = [...new Set(xdata)];
    const setY = [...new Set(ydata)];

    // Set up scaling
    const xScale = scaleLinear()
      .domain([Math.min(...setX), Math.max(...setX)])
      .range([0, w]);

    const yScale = scaleBand()
      .domain(setY)
      .range([0, h])
      .padding(0.1);

    // Set up axis
    const xAxis = axisBottom(xScale).ticks(setX.length / 15);
    const yAxis = axisLeft(yScale).tickFormat(d => new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(2000, d - 1, 1)));

    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${h})`)
      .attr("id", "x-axis")
      .attr("class", "ticks")
      .append("title")
      .text("year");

    svg.append('g')
      .call(yAxis)
      .attr("id", "y-axis")
      .attr("class", "ticks")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .style("text-anchor", "end")
      .append("title")
      .text("Month");

    // Color scale
    const colorScale = scaleSequential()
    .domain([Math.min(...data.map(d => d.variance)), Math.max(...data.map(d => d.variance))])
    .interpolator(interpolateRgb("blue","red"));
      


    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr("x", d => xScale(d.year))
      .attr("y", d => yScale(d.month))
      .attr("width", w / setX.length)
      .attr("height", yScale.bandwidth())
      .attr("fill", d => colorScale(d.variance))
      .append("title")
      .attr("data-html", "true")
      .html(d=> 
        `year = ${d.year} month = ${d.month}, <br> temperature: ${baseT + d.variance}, <br> variance: ${d.variance}`
        )


      
  }, [xdata, ydata, data, error, baseT]);

  if (error) {
    return <section><div>Error: {error.message}</div></section>;
  } else if (!isLoaded) {
    return <section><div>Loading...</div></section>;
  } else {
    return (
      <section>
        <div ref={divRef}></div>
        <svg ref={svgRef}></svg>
      </section>
    );
  }
};

export default HeatMap;
