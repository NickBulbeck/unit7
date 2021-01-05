// Look at the following refactorings of notes/Pre-JSX-app.js :
const title = <h1>My first React element</h1>;
const desc = <p>I just learned how to create a React node and render it to the DOM</p>;
// This is neither HTML nor vanilla JS; it's JSX. This illustrates the point that JSX is
// an extension to the JavaScript language itself. If we tried to render title and desc with
// ReactDOM.render directly, it wouldn't work. We write stuff in JSX, then transpile it 
// using babel. There are various ways of doing this, and later on, we'll use Create React App
// to do it. For the noo, we've done it by adding the script tag
//
// to index.html.

const header = React.createElement(
    'header',
    null,
    title, // Actually, you can have any number of things here - everything after the
    desc   // second argument is considered to be the children/content of the element.
)

ReactDOM.render(
    header,
    document.getElementById('root')
);

