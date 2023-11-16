import React from "react"
import { Link } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <section>
        <Link to="./FrontEnd">click for frontend projects</Link>
        <Link to="./DataVisualization">click for data data visualization projects</Link>
      </section>
    </React.Fragment>
  )
}

export default App;
