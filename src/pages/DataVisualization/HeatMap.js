import React, {useEffect, useState, useRef} from "react";
import {select, scaleLinear, max, axisBottom, axisLeft} from 'd3';

const HeatMap = () => {
    const [data, setData] = useState("Check Data")
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [xdata, setXdata] = useState([])
    const [ydata, setYdata] = useState([])
    const svgRef = useRef()
    const divRef = useRef()

    useEffect (()=> {
        fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json")
        .then((resp)=> resp.json())
        .then((result) => {
            setData(result);
            setIsLoaded(true);
            setXdata(data.monthlyVariance.map(e => e.years))
            setYdata(data.monthlyVariance.map(e => e.months))
        }, error => {
            setError(error);
            setIsLoaded(true);
        })
    },[])

    useEffect(()=> {
        if(!data) return;
        if(error) console.log(error)

        const w = 600;
        const h = 400;
        
        const svg = select(svgRef.current)
        .attr('width', w)
        .attr('height', h)
        .style('background', '#d3d3d3')
        .style('overflow', "visible")
        .style("margin","black")

        
        const titleDiv = select(divRef.current)
        .append("div")
        .attr("x", w / 2)
        .attr("y", 30)
        .attr("id", "title")  // User Story #1
        .attr("text-anchor", "middle")
        .style("font-size", "25px")
        .text("Monthly Global Land-Surface Temperature");

        const subTitlediv = select(divRef.current)
        .append("div")
        .attr("x", w / 2)
        .attr("y", 50)
        .attr("id", "title")  // User Story #1
        .attr("text-anchor", "middle")
        .style("font-size", "15px")
        .text("1753 - 2015: base temperature 8.66℃");

        // Set up scaling
    const xScale = scaleLinear()
    .domain([Math.min(...xdata), Math.max(...xdata)])
      .range([0, w]);
      
    const yScale = scaleLinear()
    .domain([Math.min(...ydata), Math.max(...ydata)])
      .range([0,h]);
     
    // Set up axis
    const xAxis = axisBottom(xScale).ticks(data.monthlyVariance)
    const yAxis = axisLeft(yScale).ticks(data.monthlyVariance)
    
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${h})`)
      .attr("id", "x-axis")  
      .attr("class", "ticks");

    svg.append('g')
      .call(yAxis)
      .attr("id", "y-axis")  
      .attr("class", "ticks")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .style("text-anchor", "end")
      .text("Time in minutes");

    svg.append("rect")

      

    },[data])


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

export default HeatMap;