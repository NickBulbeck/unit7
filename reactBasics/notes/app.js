// Look at the following refactorings of notes/Pre-JSX-app.js :
const title = <h1>My first React element</h1>;
const desc = <p>I just learned how to create a React node and render it to the DOM</p>;
// This is neither HTML nor vanilla JS; it's JSX. This illustrates the point that JSX is
// an extension to the JavaScript language itself. If we tried to render title and desc with
// ReactDOM.render directly, it wouldn't work. We write stuff in JSX, then transpile it 
// using babel. There are various ways of doing this, and later on, we'll use Create React App
// to do it. For the noo, we've done it by adding the script tag
// <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
// to index.html.
// If you copy the above into babel-repl, you'll see that babel transpiles it into 
// a series of React.createElement's. Normally, we'd use webpack or similar as a build
// tool.
// The 'title' variable is still a nobject, not a nelement:
console.log(title);

const header = React.createElement(
    'header',
    null,
    title, // Actually, you can have any number of things here - everything after the
    desc   // second argument is considered to be the children/content of the element.
)

// Now, we'll look at how to embed JavaScript expressions into JSX.
// In a nutshell, you use curly braces.

const myTitleID = 'main-title';
const name = 'Nick';
const desc2 = "...which, admittedly, looks odd in this design. But design's unimportant here."
const header2 = (
    <header>
        {/* Notice that a comment is in braces too */}
        <h1 id={myTitleID}>{name}'s First JSX embed hingmy</h1>
        <p className="main-desc">{desc2}</p> {/* className, not class, because this */}
    </header>                                // is JavaScript, NOT html 
) // You don't have to use these brackets - you can just leave them out and put
  // your JSX over multiple lines without them - but they help readability.

ReactDOM.render(
    header,
    document.getElementById('root')
);
ReactDOM.render(
    header2,
    document.getElementById('root2')
);
