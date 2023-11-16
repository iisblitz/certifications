import React from 'react';
import {DB} from "../database"
import  Cards  from "../components/Cards"

const DataVisualization = () => {
    return ( 
    <div className="Categories">
    {DB.filter(e=>e.certification === "DataVisualization").map(e => <Cards props={e} key={e.id}/>)}
    </div>
);
}
 
export default DataVisualization;