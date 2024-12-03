import React from "react"
import {DB} from "./database"
import  Cards  from "./components/Cards"

function App() {
  return ( 
    <div className="Categories">
    {DB.filter(e=>e.certification === '').map(e => <Cards props={e} key={e.id}/>)}
    </div>
)}  

export default App;