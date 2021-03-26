Optimise performance with PureComponent
***************************************
This involves the Player component.
The problem is that, initially, React re-renders every player on the board every
time one of them is updated (e.g. with the + or - score button). It's basically because
of the way <Player /> is rendered in App.js; this is sometimes called a wasted render.

React provides a special kind of component called a pure component that helps avoid 
unnecessary re-renders like this. If your component renders the same result, given the
same props and state, you can use this pure component thing to help boost performance.

As a matter of interest - PureComponent runs a lifecycle method called 
shouldComponentUpdate in the background; it shallow-compares props and state before
re-rendering a component. Because it does all this stuff, then in a small app like
this where there are only a handful of renders, it may not add any net gain in 
performance. But bear it in mind.

NOTE: A PureComponent should only contain weans that are also PureComponents.

*******************
Destructuring Props
*******************
This just refers to the ... syntax for destructuing arrays and stuff. The idea is
simply to save writing this.props. and props. over and over again. You can do this
with a variable assignment (see <Header />), or in the function's parameters (see 
<Counter />). <Player /> is a class rather than a function component, so it's a
bit more complex and you need to use variable assignment (because props are passed
in implicitly rather than through an explicit parameter).

Personally, I'm in two minds as to whether this actually makes code easier to read.
I've always had misgivings about the idea of two variables with the same name in
a class or function.

****************
Refs and the DOM
****************
There may be times when you need to target and modify another component outside of the 
normal component-based data-flow. Refs let you access DOM notes created in the render()
method. They're comonly used to access form elements and get their values. So, the
example component used here is <AddPlayerForm />.

Controlled components have internal state and require functions to update it. But this
does make it easier to validate user input, say, or filter results in real time based
on user input (c.f. the keyup event in a search form). They control render on every
keystroke. You can use refs, though, in function components as well (in the same 
way as demonstrated in <AddPlayerForm />).

*****************************
Validate Props with PropTypes
*****************************
This refers to making sure props are of the right type. Three popular ways to 
handle type-checking in React:
 - PropTypes
 - TypeScript
 - Flow
Here, we're looking at the PropTypes library. It used to be part of React, but was
moved off into a library. So you want:
npm install --save prop-types
Props are validated in each of the components here.
Using PropTypes gives you console errors in the browser if a prop of the wrong type
is passed to a suitably type-checked component.

**********************************
Static PropTypes and Default Props
**********************************
Static means, as usual, applied to a class rather than to an instance.
Defaults can be set up using .defaultProps = {}.
Examples are set out in <Player /> and <Header />.