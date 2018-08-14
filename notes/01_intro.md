# What is React?

- Model View Controller: React is a **VIEW** library
- React is based on **COMPONENTS**
- React is a **framework**: It helps us write complex application, and tells us how to write them using a single API.

## ReactDOM.render() is MAGIC!

- It renders html into an element from the dom (and also react components)
- Before you can use the render() function you need to import it from the 'react-dom' package: `import {render} from 'react-dom';`
- To use it, you only need to pass in the HTML you want to render, and the Element you are rendering the HTML into: `render(<html-to-render>, <element-object-to-render-into>);`


## React.Component lets us create wonderful things
- A component is usually a set of HTML elements that come together in a reusable way
- To use components, we must import the React and Component class from the react module into our file: `import React, {Component} from 'react';`
- To create a component, we need to create a class that extends the react `Component` class: `class <component-name> extends Component {}`;
- A component class **must** have at least a `render()` method, that returns the html we want to render:

  ```javascript
  import React, {Component} from 'react';

  class <component-name> extends Component {
    render(){
      return (
        <!-- your html goes here -->
      )
    }
  }

  export default <component-name>;
  ```

## JSX is a templating language for React

- jsx is a little different than html: see the table in [Dominik's tutorial](https://github.com/noreading/react-redux-introduction#41-introduction)
- jsx components can only return **one** html element
- The built in react `Fragment` component can be used to wrap multiple html elements and return them from a components
- To use `Fragment` you need to import it from react: `import React, {Component, Fragment} from 'react';`
- ... and simply wrap your html with a `<Fragment></Fragment>` tag:

  ```javascript
  import React, {Component, Fragment} from 'react';

  class <component-name> extends Component {
    render(){
      return (
        <Fragment>
          <!-- your html goes here -->
          <!-- more html goes here -->
        </Fragment>
      )
    }
  }

  export default <component-name>;
  ```

## Exercise time
- Create a Hello.jsx component that writes "Hello React" to the page (make sure to import and use it in index.js)
- Add another html element to your Hello component which says "This component was created with react" (You must use Fragment in order to return more than one html element from a component)

## Putting JS in jsx
- To use javascript expressions in jsx we need to wrap them in curly braces: `{<js expression>}`:

  ```javascript
  import React, {Component, Fragment} from 'react';

  class <component-name> extends Component {
    render(){
      const name = 'Itamar';
      return (
        <Fragment>
          <p>2 + 2 = {2 + 2}</p>{/* Will print out 4 */}
          <p>Hello {name}</p>{/* Will print out Itamar */}
        </Fragment>
      )
    }
  }

  export default <component-name>;
  ```

- If I want to have pure javascript that I can reuse in many files and components, I can create a new file in the `modules` folder. A common files that exists in most projects is `helpers.js` which contains small helper functions like `getRandomIntInclusive()`

## Exercise time
- In your Hello component create a variable inside the render method, to contain the name you want to display
- Change “Hello React” into “Hello {name}” so that when you change name it would print out the changed name
- Bonus: Create a function to return a random name from a list of names and assign a random name to the name variable so that the component displays a different name each reload
