# HTML & CSS Complete Beginner Notes

> Structured beginner-friendly notes for revision, practice, and GitHub upload.

---

# What is HTML?

HTML (HyperText Markup Language) is used to create the structure of webpages.

Example:
```html
<h1>Hello World</h1>
```

---

# What is CSS?

CSS (Cascading Style Sheets) is used to style HTML elements.

Example:
```css
h1{
    color:red;
}
```

---

# Basic HTML Boilerplate

Basic structure of every HTML page.

```html
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <link rel="stylesheet" href="style.css">

</head>
<body>

    

</body>
</html>
```

---

# HTML Tags

Tags are predefined keywords used to create webpage elements.

Example:

```html
<h1>Hello</h1>
```

---

# Heading Tags

Used to create headings.

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>
```

| Tag | Size |
|------|------|
| h1 | Largest |
| h6 | Smallest |

---

# Paragraph Tag

Used to write paragraphs.

```html
<p>This is a paragraph</p>
```

### Important Point

Paragraph text is continuous by default.

If you press Enter inside `<p>`, it will not create a new line on webpage.

For line break use:

```html
<br>
```

Example:

```html
<p>
Hello <br>
World
</p>
```

---

# Difference Between `<br>` and `<p>`

| Tag | Purpose |
|------|----------|
| `<br>` | Breaks line without extra spacing |
| `<p>` | Creates new paragraph with spacing |

---

# Lorem

Used to generate random dummy text.

Examples:

```html
lorem10
lorem50
```

Syntax:

```html
<p>lorem50</p>
```

---

# Image Tag

Used to display images.

```html
<img src="image.jpg" alt="image">
```

| Attribute | Purpose |
|-----------|----------|
| src | Image path/link |
| alt | Alternative text if image fails |

---

# Anchor Tag

Used to link another webpage.

```html
<a href="https://google.com">Google</a>
```

### Open Link in New Tab

```html
<a href="https://google.com" target="_blank">
Google
</a>
```

| Attribute | Purpose |
|-----------|----------|
| href | Destination link |
| target="_blank" | Opens in new tab |

---

# Div Tag

Used as container or section of webpage.

```html
<div></div>
```

### Important Points

- Div is a block element.
- Starts from new line.
- Takes full width by default.

Example:

```html
<div>First Div</div>
<div>Second Div</div>
```

---

# Span Tag

Inline container used for styling small text parts.

```html
<p>Hello <span>Jai</span></p>
```

---

# Block Elements

Block elements:
- Start from new line
- Take full width

Examples:
- div
- p
- h1

---

# Inline Elements

Inline elements:
- Take required width only
- Do not start from new line

Examples:
- span
- a

---

# Lists

## Unordered List

Displays bullet points.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
</ul>
```

---

## Ordered List

Displays numbered items.

```html
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
</ol>
```

---

# Table

Used to display data in rows and columns.

```html
<table border="1">

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Jai</td>
        <td>20</td>
    </tr>

</table>
```

---

# Forms

Used to collect user data.

```html
<form>

    <input type="text">

    <button type="submit">
        Submit
    </button>

</form>
```

---

# Input Types

Different types of inputs.

```html
<input type="text">

<input type="password">

<input type="email">

<input type="number">

<input type="checkbox">

<input type="radio">

<input type="file">

<input type="date">
```

---

# Label Tag

Used to connect text with input field.

```html
<label>Email</label>

<input type="email">
```

---

# Placeholder

Shows temporary hint.

```html
<input type="text" placeholder="Enter Name">
```

---

# Required Attribute

Makes field compulsory.

```html
<input type="email" required>
```

---

# Button Types

```html
<button type="submit">Submit</button>

<button type="reset">Reset</button>

<button type="button">Click</button>
```

---

# Semantic Tags

Semantic tags improve structure and SEO.

```html
<header></header>

<nav></nav>

<main></main>

<section></section>

<article></article>

<footer></footer>
```

| Tag | Purpose |
|------|----------|
| header | Top section |
| nav | Navigation links |
| main | Main content |
| section | Content section |
| article | Independent content |
| footer | Bottom section |

---

# Audio Tag

Used to add audio.

```html
<audio controls>
    <source src="song.mp3">
</audio>
```

---

# Video Tag

Used to add video.

```html
<video controls width="400">
    <source src="video.mp4">
</video>
```

---

# iframe

Used to embed another webpage/video.

```html
<iframe src=""></iframe>
```

---

# Comments

Used to write notes in code.

```html
<!-- HTML Comment -->
```

```css
/* CSS Comment */
```

---

# HTML Entities

Used to display reserved symbols.

```html
&lt;  -> <
&gt;  -> >
&amp; -> &
&nbsp; -> Space
```

---

# Strong vs Bold

```html
<strong>Important</strong>

<b>Bold</b>
```

| Tag | Purpose |
|------|----------|
| strong | Important meaning |
| b | Bold styling only |

---

# Em vs Italic

```html
<em>Important</em>

<i>Italic</i>
```

| Tag | Purpose |
|------|----------|
| em | Emphasized text |
| i | Italic styling |

---

# CSS Basics

CSS is used to style HTML elements.

---

# Ways To Add CSS

## Inline CSS

```html
<h1 style="color:red;">Hello</h1>
```

---

## Internal CSS

```html
<style>

h1{
    color:red;
}

</style>
```

---

## External CSS

```html
<link rel="stylesheet" href="style.css">
```

---

# CSS Selectors

## Element Selector

```css
h1{
    color:red;
}
```

---

## Class Selector

```css
.title{
    color:blue;
}
```

---

## ID Selector

```css
#heading{
    color:green;
}
```

---

# Difference Between ID and Class

| ID | Class |
|----|--------|
| Unique | Common |
| Access with # | Access with . |
| Mostly one element | Multiple elements |

---

# Colors

```css
color:red;

color:#ff0000;

color:rgb(255,0,0);
```

---

# Background

```css
background-color:black;

background-image:url("img.jpg");
```

---

# Font Styling

```css
font-size:20px;

font-family:Arial;

font-weight:bold;

text-align:center;
```

| Property | Purpose |
|----------|----------|
| font-size | Text size |
| font-family | Font style |
| font-weight | Text thickness |
| text-align | Text alignment |

---

# Width & Height

```css
width:300px;

height:200px;
```

---

# CSS Units

| Unit | Meaning |
|------|----------|
| px | Fixed size |
| % | Parent based |
| vh | Viewport height |
| vw | Viewport width |
| rem | Relative to root |
| em | Relative to parent |

---

# Percentage (%)

Depends on parent size.

```css
width:50%;
```

---

# Viewport Units

## vh

```css
height:100vh;
```

- Full screen height

---

## vw

```css
width:100vw;
```

- Full screen width

---

# HTML & Body Full Screen

```css
html,body{
    width:100%;
    height:100%;
}
```

---

# Margin & Padding

## Margin

Creates outer spacing.

```css
margin:20px;
```

---

## Padding

Creates inner spacing.

```css
padding:20px;
```

---

# Border

```css
border:2px solid black;

border-radius:10px;
```

| Property | Purpose |
|----------|----------|
| border | Adds border |
| border-radius | Rounded corners |

---

# CSS Box Model

Every element contains:

- Content
- Padding
- Border
- Margin

---

# Box Sizing

```css
box-sizing:border-box;
```

Controls width and height calculation.

---

# CSS Reset

Removes default browser spacing.

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

---

# Display Property

Controls element layout.

```css
display:block;

display:inline;

display:flex;

display:grid;
```

| Value | Meaning |
|-------|----------|
| block | Full width |
| inline | Required width only |
| flex | Flexible layout |
| grid | Grid layout |

---

# Flexbox

Used for responsive layouts.

```css
.container{
    display:flex;
}
```

---

# Flex Direction

```css
flex-direction:row;

flex-direction:column;
```

---

# Justify Content

Used for horizontal alignment.

```css
justify-content:center;
```

---

# Align Items

Used for vertical alignment.

```css
align-items:center;
```

---

# Gap

Adds spacing between flex items.

```css
gap:20px;
```

---

# Text Align

Aligns text.

```css
text-align:center;
```

---

# Important Note About Flex

`justify-content` and `align-items` work properly only with:

```css
display:flex;
```

or

```css
display:grid;
```

---

# Flexbox Example

```html
<div class="container">

    <div class="box">1</div>

    <div class="box">2</div>

</div>
```

```css
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
}
```

---

# Position Property

Controls element positioning.

```css
position:relative;

position:absolute;

position:fixed;

position:sticky;
```

| Value | Meaning |
|-------|----------|
| relative | Relative to itself |
| absolute | Relative to parent |
| fixed | Fixed on screen |
| sticky | Sticky while scrolling |

---

# Z-Index

Controls which element appears on top.

```css
z-index:10;
```

Higher value = higher priority.

---

# Overflow

Controls extra content behavior.

```css
overflow:hidden;

overflow:scroll;

overflow:auto;
```

---

# Hover Effect

Applies style on mouse hover.

```css
button:hover{
    background:black;
    color:white;
}
```

---

# Transition

Creates smooth animation.

```css
transition:0.3s;
```

---

# Transform

Used for scaling, moving, rotating.

```css
transform:scale(1.1);

transform:rotate(45deg);

transform:translateX(20px);
```

---

# Cursor

Changes mouse style.

```css
cursor:pointer;
```

---

# List Style

Removes bullets.

```css
list-style:none;
```

---

# Text Decoration

Mostly used with links.

```css
text-decoration:none;
```

---

# Box Shadow

Adds shadow around elements.

```css
box-shadow:0 0 10px gray;
```

---

# Media Query

Used for responsive design.

```css
@media(max-width:768px){

    body{
        background:red;
    }

}
```

---

# Favicon

Adds website icon.

```html
<link rel="icon" href="logo.png">
```

---

# Font Awesome Icons

Used to add icons.

```html
<i class="fa-solid fa-user"></i>
```

---

# VS Code Shortcut

```html
! + Enter
```

Creates HTML boilerplate automatically.

---

# Quick Revision Table

| Topic | Purpose |
|-------|----------|
| HTML | Structure |
| CSS | Styling |
| h1-h6 | Headings |
| p | Paragraph |
| br | Line break |
| img | Add image |
| a | Add link |
| div | Container |
| span | Inline container |
| form | User data |
| display:flex | Side-by-side layout |
| justify-content | Horizontal alignment |
| align-items | Vertical alignment |
| margin | Outer spacing |
| padding | Inner spacing |
| vh/vw | Screen units |
| class | Common selector |
| id | Unique selector |

---

# Best Practices

- Use semantic tags
- Keep CSS separate
- Use meaningful class names
- Prefer class over id
- Use flexbox for layouts
- Write clean indentation
- Make responsive websites
- Keep folder structure clean

---

# Recommended Folder Structure

```bash
project-folder/
│
├── index.html
├── style.css
├── script.js
│
├── images/
├── videos/
└── assets/
```

---

# Next Topics To Learn

- Advanced Flexbox
- CSS Grid
- Animations
- Responsive Design
- JavaScript
- DOM Manipulation
- Git & GitHub
- React
- Tailwind CSS
- APIs
