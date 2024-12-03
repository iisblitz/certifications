import React from 'react';
import {DB} from "../database"
import  Cards  from "../components/Cards"

const FrontEndReact = () => {
    return ( 
    <div className="Categories">
    {DB.filter(e=>e.certification === "Backend").map(e => <Cards props={e} key={e.id}/>)}
    </div>
);
}
 
export default FrontEndReact;