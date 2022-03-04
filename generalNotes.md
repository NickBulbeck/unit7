Setting up a react project 
Two common ways to add React to a project are:
1) create React App, which is a cli that we'll generally use later
2) the React CDN which you can link to in your HTML file.
The latter is analogous to linking to jQuery at the top of your HTML file instead
of downloading it to your own folder. Pro's and con's in each case. We used it in
course 1 React Basics, to focus on the react components themselves, but it's not
great for a production website because it requires all the babel code to be 
uploaded to (800mb) and run by the browser. create-react-app transpiles and webpacks
all of this behind the scenes on the server side.

In React, everything is a component - just like in Java everything is a nobject.
A component is a re-usable piece of UI. There are 2 steps towards creating a component:
1) Define it as a JavaScript function or class
2) Display it in the UI with a JSX tag
A JSX tag is like an HTML tag, except that we define it ourselves. So it needn't
be just a header or a paragraph: it can be a block (in the BEM sense) that we
want to re-use.

Props:
======
Properties, or props, are analogous to attributes in HTML elements. They're how we
get data into and out of a React component. 
1) Define the props in a component's JSX tag.
2) Enable the use of props in the component. 
A component cannot modify its own props. In fact it must be a pure function (no
side effects) or React will throw an error. 

State:
========
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

Create react app:
==================
Installs all the tools like babel and webpack for you. You use the command
npx create-react-app my-app-name
create-react-app is part of React itself, BTW. These starter files were created with
the command npx create-reacdt-app scoreboard, as 'scoreboard' is the name of the 
project. npx, btw, is a subset of npm; it downloads and executes a package all in one
command. Without npx, create-react-app has to be installed globally so that you can
npm it. (This can be done, of course.) npx always uses the latest version, though. So
after npx create-react-app, you npm install and then npm start.

React Context
=============
Prop drilling is the name given to passing props down multiple layers of components. It
was experimental in earlier versions, but is now part of the stable version.
There are three basic parts to the context API;
1) the createContext() method;
2) a Provider; 
3) a Consumer
So, React.createContext() sets up a context and returns a nobject with a Provider and 
a Consumer. Provider appears as high as possible in the component tree; it allows a
Consumer to subscribe to any changes that happen. Hence, API. The Consumers access 
the Provider to get data they need. They're constantly communicating - via the API.
