import { Link } from "react-router-dom";


const Landing = () => {
    return ( 
    <>
    
    <Link to="./FronEnd" >
    <button className="Cards">
    go to front end
    </button>
    </Link>
    
    <Link to="./DataVisualization" >
    <button className="Cards">
    go to front end
    </button>
    </Link>

    </> 
);
}
 
export default Landing;