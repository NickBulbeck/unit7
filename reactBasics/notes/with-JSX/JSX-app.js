const title = React.createElement(
    'h1',
    { id: 'mainTitle', title: 'A foadyb title'},
    'My first React element'
);
//  createElement takes three arguments:
//  1) The DOM element 
//  2) The attributes the element will have; this can be {} or null, but you have to
//     declare it either way. Note the syntax - it's a JavaScript object, not JSON!
//  3) The content or children of the element. This can be text, child elements or
//     other React components. (In the above case, it'll be rendered as a text node.)

// Note also that it doesn't create a DOM node; it's just an object representation of a 
// DOM node. It's NOT the same, iow, as document.createElement in vanilla JS. So, doing
// console.log(title); logs out an object.

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it to the DOM.'
)

const header = React.createElement(
    'header',
    null,
    title, // Actually, you can have any number of things here - everything after the
    desc   // second argument is considered to be the children/content of the element.
)

// So, here, we use ReactDOM to connect to the DOM itself. The method you'll use the mostest
// is ReactDOM.render, which takes a React element and renders it to the DOM.
// It takes two arguments:
ReactDOM.render(
    header, // The React object you want to render
    document.getElementById('root') // The existing DOM element inside which you want to
                // render it. Note that this element must already exist! Here, it's the div
                // element we've created in index.html. There's no syntactic significance to 
                // the name 'root' - it's a bit like 'wrapper' or 'container'. In React
                // terminology, we're said to be *mounting* our React app within the 'root'
                // div.
);
// So: is ReactDOM.render() equivalent to element.appendChild? No. It's element.innerHTML = -
// that is, everything inside the element will be replaced. On occasion, you can feature this
// by having actual HTML that starts with "Loading..."

