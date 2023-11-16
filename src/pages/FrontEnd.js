import React from 'react';
import {DB} from "../database"
import  Cards  from "../components/Cards"

const FrontEnd = () => {
    return ( 
    <div className="Categories">
    {DB.filter(e=>e.certification === "FrontEnd").map(e => <Cards props={e} key={e.id}/>)}
    </div>
);
}
 
export default FrontEnd;