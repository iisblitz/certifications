import React from "react"
import {Paper, Box} from '@mui/material';
import {Link} from "react-router-dom"


function App() {
  return (
    <React.Fragment>
      <section className="home">
        <article className= "Test 1">
        <Link to="/Front1">
      <Box className="box">
      <Paper elevation = {13}>
      <h1>This is the first test for the react certification</h1>

      <p>Fulfill the below user stories and get all of the tests to pass.</p>
      <p>Use whichever libraries or APIs you need. Give it your own personal style.</p>
      <p>You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. </p>
      <p>You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. </p>
      <p>Happy coding!</p>
      </Paper>
      
    </Box>
    </Link>
          

        </article>
      </section>
    </React.Fragment>
  );
}

export default App;
