import React from 'react';
import {DB} from "../database"
import  Cards  from "../components/Cards"

const FrontEndAngular = () => {
    return ( 
    <div className="Categories">
        <h1>UNDER CONSTRUCTION</h1>
    {DB.filter(e=>e.certification === "FrontEnd-Angular").map(e => <Cards props={e} key={e.id}/>)}
    </div>
);
}
 
export default FrontEndAngular;