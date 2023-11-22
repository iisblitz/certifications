const DB = [{
    id:1,
    certification: "FrontEnd",
    name:"RandomQuote",
    shortDescription: "Objective: Build an app that is functionally similar to this: https://random-quote-machine.freecodecamp.rocks/.",
    Description: "Fulfill the below user stories and get all of the tests to pass. /n Use whichever libraries or APIs you need. Give it your own personal style.You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. /n Happy coding!",
    UserStories:[
        'User Story #1: I can see a wrapper element with a corresponding id="quote-box".',
        'User Story #2: Within #quote-box, I can see an element with a corresponding id="text".',
        'User Story #3: Within #quote-box, I can see an element with a corresponding id="author".',
        'User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".',
        'User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".',
        'User Story #6: On first load, my quote machine displays a random quote in the element with id="text".',
        'User Story #7: On first load, my quote machine displays the random quotes author in the element with id="author".',
        'User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.',
        'User Story #9: My quote machine should fetch the new quotes author when the #new-quote button is clicked and display it in the #author element.',
        'User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.',
        'User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browsers zoom level at 100% and page maximized.'
        ],
    Status: "complete"
},
{
    id:2,
    certification: "FrontEnd",
    name:"BuildaMarkdownPreviewer",
    shortDescription: "Objective: Build an app that is functionally similar to this: https://markdown-previewer.freecodecamp.rocks/.",
    Description: "Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style. /n You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!",
    UserStories:[
        'User Story #1: I can see a textarea element with a corresponding id="editor".',
        'User Story #2: I can see an element with a corresponding id="preview".',
        'User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.',
        'User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You dont need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).',
        'User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.  ',
        'User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.',
        'Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.'
        ],
    Status:"complete"
},
{
    id:3,
    certification: "FrontEnd",
    name:"DrumMachine",
    shortDescription: "Build an app that is functionally similar to this: https://drum-machine.freecodecamp.rocks/.",
    Description: "Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.<br/> You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!",
    UserStories:[
        'User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.',
        'User Story #2: Within #drum-machine I can see an element with a corresponding id="display".',
        'User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.',
        'User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).',
        'User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.',
        'User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).',
        'User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).'
        ],
    Status: "in progress"
},
{
    id:4,
    certification: "FrontEnd",
    name:"JavaScriptCalculator",
    shortDescription: "Objective: Build an app that is functionally similar to this: https://javascript-calculator.freecodecamp.rocks/.",
    Description: "Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style. </br> You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!",
    UserStories:[
        'User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".',
        'User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".',
        'User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".',
        'User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".',
        'User Story #5: My calculator should contain a clickable element with an id="clear".',
        'User Story #6: My calculator should contain an element to display values with a corresponding id="display".',
        'User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.',
        'User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.',
        'User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.',
        'User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.',
        'User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.',
        'User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.',
        'User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).',
        'User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.',
        'User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).'
        ],
    Status: "Complete"
},
{
    id:5,
    certification: "FrontEnd",
    name:"Pomodoro",
    shortDescription: "Objective: Build an app that is functionally similar to this: https://25--5-clock.freecodecamp.rocks.",
    Description: "Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style./n    You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!",
    UserStories:[
        'User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").',
        'User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").',
        'User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".',
        'User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".',
        'User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.',
        'User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.',
        'User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").',
        'User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).',
        'User Story #9: I can see a clickable element with a corresponding id="start_stop".',
        'User Story #10: I can see a clickable element with a corresponding id="reset".',
        'User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.',
        'User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.',
        'User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.',
        'User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.',
        'User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.',
        'User Story #16: I should not be able to set a session or break length to <= 0.',
        'User Story #17: I should not be able to set a session or break length to > 60.',
        'User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.',
        'User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).',
        'User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.',
        'User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.',
        'User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.',
        'User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.',
        'User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.',
        'User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.',
        'User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".',
        'User Story #27: The audio element with id="beep" must be 1 second or longer.',
        'User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.',
        ],
    Status: "Complete"
},
{
    id:1,
    certification: "DataVisualization",
    name:"GDP",
    shortDescription: "Objective: Build an app that is functionally similar to this: https://bar-chart.freecodecamp.rocks.",
    Description: "Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style./br    You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.",
    UserStories:[
        'User Story #1: My chart should have a title with a corresponding id="title".',
        'User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".',
        'User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".',
        'User Story #4: Both axes should contain multiple tick labels, each with a corresponding class="tick".',
        'User Story #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.',
        'User Story #6: Each .bar should have the properties data-date and data-gdp containing date and GDP values.',
        'User Story #7: The .bar elements data-date properties should match the order of the provided data.',
        'User Story #8: The .bar elements data-gdp properties should match the order of the provided data.',
        'User Story #9: Each .bar elements height should accurately represent the datas corresponding GDP.',
        'User Story #10: The data-date attribute and its corresponding .bar element should align with the corresponding value on the x-axis.',
        'User Story #11: The data-gdp attribute and its corresponding .bar element should align with the corresponding value on the y-axis.',
        'User Story #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.',
        'User Story #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.',
        ],
    Status: "in progress"
},
{
    id:2,
    certification: "DataVisualization",
    name:"DopingInProfessionalBicyleRacing",
    shortDescription: "Objective: Build an app that is functionally similar to this: https://scatterplot-graph.freecodecamp.rocks.",
    Description: "Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style. /n You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.",
    UserStories:[
        'User Story #1: I can see a title element that has a corresponding id="title".',
        'User Story #2: I can see an x-axis that has a corresponding id="x-axis".',
        'User Story #3: I can see a y-axis that has a corresponding id="y-axis".',
        'User Story #4: I can see dots, that each have a class of dot, which represent the data being plotted.',
        'User Story #5: Each dot should have the properties data-xvalue and data-yvalue containing their corresponding x and y values.',
        'User Story #6: The data-xvalue and data-yvalue of each dot should be within the range of the actual data and in the correct data format. For data-xvalue, integers (full years) or Date objects are acceptable for test evaluation. For data-yvalue (minutes), use Date objects.',
        'User Story #7: The data-xvalue and its corresponding dot should align with the corresponding point/value on the x-axis.',
        'User Story #8: The data-yvalue and its corresponding dot should align with the corresponding point/value on the y-axis.',
        'User Story #9: I can see multiple tick labels on the y-axis with %M:%S time format.',
        'User Story #10: I can see multiple tick labels on the x-axis that show the year.',
        'User Story #11: I can see that the range of the x-axis labels are within the range of the actual x-axis data.',
        'User Story #12: I can see that the range of the y-axis labels are within the range of the actual y-axis data.',
        'User Story #13: I can see a legend containing descriptive text that has id="legend".',
        'User Story #14: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.',
        'User Story #15: My tooltip should have a data-year property that corresponds to the data-xvalue of the active area.',
        ],
    Status: "Complete"
},
{
    id:3,
    certification: "DataVisualization",
    name:"HeatMap",
    shortDescription: "Objective: Build an app that is functionally similar to this: https://heat-map.freecodecamp.rocks.",
    Description: "Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style. /n You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. Required DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.",
    UserStories:[
        'User Story #1: My heat map should have a title with a corresponding id="title".',
        'User Story #2: My heat map should have a description with a corresponding id="description".',
        'User Story #3: My heat map should have an x-axis with a corresponding id="x-axis".',
        'User Story #4: My heat map should have a y-axis with a corresponding id="y-axis".',
        'User Story #5: My heat map should have rect elements with a class="cell" that represent the data.',
        'User Story #6: There should be at least 4 different fill colors used for the cells.',
        'User Story #7: Each cell will have the properties data-month, data-year, data-temp containing their corresponding month, year, and temperature values.',
        'User Story #8: The data-month, data-year of each cell should be within the range of the data.',
        'User Story #9: My heat map should have cells that align with the corresponding month on the y-axis.',
        'User Story #10: My heat map should have cells that align with the corresponding year on the x-axis.',
        'User Story #11: My heat map should have multiple tick labels on the y-axis with the full month name.',
        'User Story #12: My heat map should have multiple tick labels on the x-axis with the years between 1754 and 2015.',
        'User Story #13: My heat map should have a legend with a corresponding id="legend".',
        'User Story #14: My legend should contain rect elements.',
        'User Story #15: The rect elements in the legend should use at least 4 different fill colors.',
        'User Story #16: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.',
        'User Story #17: My tooltip should have a data-year property that corresponds to the data-year of the active area.'
        ],
    Status: "Complete"
}
]

export {DB}