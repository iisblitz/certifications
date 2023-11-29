import React, {useState, useEffect, useRef} from 'react'
import {select, axisLeft, axisRigth} from "d3"


const ChoroplethMap = () => {
const [data, setData] = useState({})
    const [map, setMap] = useState({})
    const [error, setError] = useState({})
    const svgRef = useRef();
    const divRef = useRef();

    useEffect(()=>{
        fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json')
        .then((res)=> res.json())
        .then((result) =>{
            setData(result)
        },error => {
            setError(error)
        })

        fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json')
        .then((res)=> res.json())
        .then((result) =>{
            setMap(result)
        },error => {
            setError(error)
        })
        
    },[])
    useEffect(()=>{
        const w = 500;
        const h = 300;
    
    

    const titleDiv = select(divRef.current)
    .append("div")
    .attr("x", w / 2)
    .attr("y", 30)
    .attr("id", "title")
    .attr("text-anchor", "middle")
    .style("font-size", "25px")
    .text("United States Educational Attainment");

  const subTitlediv = select(divRef.current)
    .append("div")
    .attr("x", w / 2)
    .attr("y", 50)
    .attr("id", "description")
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    .text("Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)");

    

    },[map, data])

    if (error) {
        return <section><div>Error: `${error.message}`</div></section>;
      } else {
        return (
          <section>
            <div ref={divRef}></div>
            <svg ref={svgRef}></svg>
          </section>
        );
      }
    }

export default ChoroplethMap