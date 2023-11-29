import { Link } from "react-router-dom";


const Landing = () => {
    return ( 
    <>
    
    <Link to="./FronEnd-React" >
    <button className="Cards">
    <p className="Id">go to front end</p>
    </button>
    </Link>
    
    <Link to="./FronEnd-Angular" >
    <button className="Cards">
    <p className="Id">go to front end</p>
    </button>
    </Link>

    <Link to="./DataVisualization" >
    <button className="Cards">
    <p className="Id">go to front end</p>
    </button>
    </Link>

    </> 
);
}
 
export default Landing;