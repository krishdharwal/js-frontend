// create elements via react element
import React from "react";

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const ReactElement = React.createElement(
    'a',
    {href:'google.com'},
    "click me",
    anotherElement
)

// this is how to run this

// reactDom.render(
//     ReactElement
// );

export default ReactElement;