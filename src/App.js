import React, {useState, useEffect } from "react"
import {DB} from "./database"
import  Cards  from "./components/Cards"


function App() {
  return (
    <React.Fragment>
      <section>
        {DB.map(e => <Cards props={e} key={e.id}/>)}
      </section>
    </React.Fragment>
  )
}

export default App;
