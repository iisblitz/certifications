import React, { useEffect, useState, useRef } from 'react';
import { scaleLinear, select, axisBottom, axisLeft} from 'd3';

const DopingInProfessionalBicyleRacing = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null)
    const svgRef = useRef();
    const divRef = useRef();

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json")
        .then((res) => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setData(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            });
            
      }
    , []);

  

  useEffect(() => {
    if (!data) return;

    // Set up svg
    const w = 500;
    const h = 300;

    let array = data.map(e => parseFloat(e.Time.split(":").join(".")))
    let years = data.map(e => e.Year)

    const svg = select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', '#d3d3d3')
      .style('overflow', 'visible');

      // Title
      const titleDiv = select(divRef.current)
    .append("div")
    .attr("x", w / 2)
    .attr("y", 30)
    .attr("id", "title")  // User Story #1
    .attr("text-anchor", "middle")
    .style("font-size", "25px")
    .text("Doping in Professional Bicycle Racing");

  // sub-title
  const subtitleDiv = select(divRef.current)
  .append("div")
  .attr("x", w / 2)
  .attr("y", 50)
  .attr("id", "subtitle")  // User Story #1
  .attr("text-anchor", "middle")
  .style("font-size", "15px")
  .text("35 Fastest times up Alpe d'Huez");

    // Set up scaling
    const xScale = scaleLinear()
    .domain([Math.min(...years), Math.max(...years)])
      .range([0, w]);

    const yScale = scaleLinear()
    .domain([Math.min(...array), Math.max(...array)])
      .range([0,h]);
     
    // Set up axis
    const xAxis = axisBottom(xScale).ticks(data.length/5).tickFormat(d => d.toString())
    const yAxis = axisLeft(yScale).ticks(5);
    
    // Set up data for svg
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.Year))
      .attr('cy', (d) => yScale(parseFloat(d.Time.split(":").join("."))))
      .attr("r", 5)
      .attr("fill", d => (d.Doping) ? "orange" : "blue")
      .attr("class","dot")
      .attr("data-x", (d) => d.Time) // User Story #6
      .attr("data-y", (d) => d.Year) // User Story #6
      .append("title")
      .text(d => {
        const {Time, Place, Seconds, Name, Year, Nationality, Doping, URL} = d
        return `Time: ${Time}, Place: ${Place}, Seconds: ${Seconds}, Name: ${Name}, Year: ${Year}, Nationality: ${Nationality}, Doping: ${Doping}, url: ${URL}`
      });
      
      svg.append("rect")
      .attr("x", 250)
      .attr("y", 10)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "blue");
    
    svg.append("text")
      .attr("x", 280)
      .attr("y", 25)
      .text("No doping allegations");
    
    // Add the legend for "Riders with doping allegations"
    svg.append("rect")
      .attr("x", 250)
      .attr("y", 35)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "orange");
    
    svg.append("text")
      .attr("x", 280)
      .attr("y", 50)
      .text("Riders with doping allegations");
      

    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${h})`)
      .attr("id", "x-axis")  // User Story #2
      .attr("class", "ticks");

    svg.append('g')
      .call(yAxis)
      .attr("id", "y-axis")  // User Story #3
      .attr("class", "ticks")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .style("text-anchor", "end")
      .text("Time in minutes");


      svg.append("text")
      .attr("x", w / 2)
      .attr("y", 30)
      .attr("id", "title")  // User Story #1
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(titleDiv);

      
      svg.append("text")
      .attr("x", w / 2)
      .attr("y", 30)
      .attr("id", "title")  // User Story #1
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(subtitleDiv);
    // Tooltip     
      
  }, [data]);

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

}

export default DopingInProfessionalBicyleRacing