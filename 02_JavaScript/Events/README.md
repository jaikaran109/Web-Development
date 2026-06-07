# events are the things happen to the html elements..
# When JavaScript is used in HTML pages, JavaScript can "react" on these events

# HTML Events
An HTML event can be something the browser does, or something a user does.
Here are some examples of HTML events:
- > An HTML web page has finished loading
- > An HTML input field was changed
- > An HTML button was clicked
Often, when events happen, you may want to do something.
JavaScript lets you execute code when events are detected.
HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

# handler attributes:
 onclick, onchange, onmouseover, onmouseout, onmousedown, onmouseup, ondblclick, onkeydown, onkeyup, onload,onunload, onresize, onselect, onsubmit, onreset, onfocus, onblur.


1. With single quotes:
<element event='some JavaScript'>

2. With double quotes:
<element event="some JavaScript">



- In the following example, an onclick attribute (with code), is added to a <button> element:
Example:

<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
