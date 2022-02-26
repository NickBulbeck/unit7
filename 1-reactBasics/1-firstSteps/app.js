const title1= <h1>My first React element</h1>;
const desc1 = <p>I just learned how to create a React node and render it into the DOM.</p>;
// The above is JSX, which is an extension to React. On its own this would (obviously)
// produce a syntax error. You need babel to transpile it into javascript before it can be 
// used to create React elements. Create react app cli does this for you, but manually, you
// can add the jQuery-like script tag to index.html.
// Mind and add type=text/babel to the <script> tag pulling in app.js...


const header1 = React.createElement( // This isn't actually a DOM element; it's an object that represents one...
  'header', // HTML tag name
  {}, // properties, like id or class or other HTML attributes. 
  title1, // you can have any number of args after the {}. React considers them all
  desc1   // to be weans of (in this case) header
)
// Now we'll do this using JSX
const title = "first React element";
const desc = "I just learned how to create a React node and render it into the DOM.";
const myTitleId = 'main-title';
const myName="Nick";
const header = (
  <header>
  {/* This is a JSX comment (VS Code does this automatically, BTW) */}
    <h1 id={myTitleId}>{myName}'s {title}</h1>
    <p className="main-desc">{desc}</p>
  </header>
) // One thing to remember here: className instead of class. That's because class is a reserved
// wurrd in JavaScript.

const root = document.getElementById('root');
ReactDOM.render(
  header,
  root // 'root' is a foadyb name, not a keyword. You have to create one
       // - in this case it's hard-coded into index.html
)
// ReactDOM.render() overwrites whatever is in the element set up in its second parameter. So, you can
// start out with root containing "Loading..." and then .render() will add the content in. Interesting...

// Nothing happens in the DOM until .render() creates actual elements. It's analogous to a res.etc()
// call in Express.