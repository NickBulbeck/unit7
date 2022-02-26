Two common ways to add React to a project are:
1) create React App, which is a cli that we'll generally use later
2) the React CDN which you can link to in your HTML file.
The latter is analogous to linking to jQuery at the top of your HTML file instead
of downloading it to your own folder. Pro's and con's in each case.

In React, everything is a component - just like in Java everything is a nobject.
A component is a re-usable piece of UI. There are 2 steps towards creating a component:
1) Define it as a JavaScript function or class
2) Display it in the UI with a JSX tag
A JSX tag is like an HTML tag, except that we define it ourselves. So it needn't
be just a header or a paragraph: it can be a block (in the BEM sense) that we
want to re-use.

Props:
Properties, or props, are analogous to attributes in HTML elements. They're how we
get data into and out of a React component. 
1) Define the props in a component's JSX tag.
2) Enable the use of props in the component. 
A component cannot modify its own props. In fact it must be a pure function (no
side effects) or React will throw an error. 

State:
State, unlike props that are read-only, is mutable. Physically, state is a regular
JavaScript object that contains items defining the pieces of data that change. 
Data from state is still distributed via props. Also: there a function components
and class components. Only class components can have state.
If either props or state changes, React executes the render() method to change what's
displayed to the user. State is local to a component, btw.
There are two main types of state to consider when designing a napp.
1) Application state, or data that is available to the entire app, is the main state
we need to consider. So it'll typically live in the App component and a' the weans will
have access to it.
2) Component state is local to the component and is available only within the component.