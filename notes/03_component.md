# A Moment with Component


## Multiple Components

- The App cpmponent is a convetinal component found in most react apps which contains all our other components and various other things (like state, or routing)
- The only component added to `src/index.js` is the `App` component
- Any other components will be imported into `App` or other components

## Props

- Props are a way to transfer data from a parent component to a child component
- A child comnponent **CANNOT** change the data passed to it in props. Properties are read only and the compiler will throw an error if you try to.
- The react data flow is **uni-directional** which means that it can only flow from parent to child, not the other way around
- To pass a property into a component, you need to specify it like an attribute in html: `<ShowName name="Itamar" />`
- To use a prop, you can refer to it through the component's `this.props` property:

  ```javascript
  class ShowName extends Component {
    render(){
      const {name} = this.props;

      return (<p>{name}</p>);
    }
  }
  ```
