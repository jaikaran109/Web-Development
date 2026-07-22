# Tailwind CSS Complete Beginner Notes

> Beginner-friendly notes covering the most frequently used Tailwind CSS classes with examples.

---

# What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework** that lets you style websites directly using predefined classes without writing custom CSS.

Example:

```html
<h1 class="text-red-500 text-4xl font-bold">
    Hello Tailwind
</h1>
```

---

# Why Tailwind?

- Faster Development
- No custom CSS for most designs
- Highly Responsive
- Easy to Maintain
- Mobile First
- Utility Classes

---

# Installation (CLI)

```bash
npm install tailwindcss @tailwindcss/cli
```

Create input file

```css
@import "tailwindcss";
```

Run Tailwind

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

---

# Linking CSS

```html
<link rel="stylesheet" href="output.css">
```

---

# Background Colors

Used to change background color.

```html
bg-red-500

bg-green-500

bg-blue-500

bg-black

bg-white
```

---

# Text Color

Changes text color.

```html
text-white

text-red-500

text-blue-500

text-green-400
```

---

# Font Size

```html
text-xs

text-sm

text-base

text-lg

text-xl

text-2xl

text-4xl

text-6xl
```

---

# Font Weight

```html
font-thin

font-light

font-normal

font-medium

font-semibold

font-bold

font-extrabold
```

---

# Width

```html
w-full

w-screen

w-1/2

w-6/12

w-80

w-96
```

---

# Height

```html
h-full

h-screen

min-h-screen

h-80

h-96
```

---

# Margin

Outer spacing.

```html
m-4

mt-10

mb-5

ml-5

mr-5

mx-10

my-10
```

---

# Padding

Inner spacing.

```html
p-4

px-10

py-5

pt-5

pb-5
```

---

# Border Radius

```html
rounded

rounded-md

rounded-lg

rounded-xl

rounded-full
```

---

# Border

```html
border

border-2

border-black

border-red-500
```

---

# Display

```html
block

inline

inline-block

hidden

flex

grid
```

---

# Flexbox

Enable Flexbox

```html
flex
```

---

# Flex Direction

```html
flex-row

flex-col
```

---

# Justify Content

Horizontal alignment.

```html
justify-start

justify-center

justify-end

justify-between

justify-around

justify-evenly
```

---

# Align Items

Vertical alignment.

```html
items-start

items-center

items-end

items-stretch
```

---

# Gap

Spacing between flex/grid items.

```html
gap-2

gap-4

gap-6

gap-10
```

---

# Position

```html
relative

absolute

fixed

sticky
```

---

# Top Bottom Left Right

```html
top-0

left-0

right-0

bottom-0
```

---

# Z Index

```html
z-10

z-20

z-50
```

---

# Overflow

```html
overflow-hidden

overflow-scroll

overflow-auto
```

---

# Background Image

```html
bg-[url('image.jpg')]

bg-cover

bg-contain

bg-center

bg-no-repeat
```

---

# Object Fit (For Images)

```html
object-cover

object-contain

object-fill
```

---

# Shadows

```html
shadow

shadow-md

shadow-lg

shadow-xl
```

---

# Hover

```html
hover:bg-black

hover:text-white

hover:scale-110
```

---

# Transition

```html
transition

duration-300

ease-in-out
```

---

# Transform

```html
scale-110

rotate-45

translate-x-5

translate-y-5
```

---

# Cursor

```html
cursor-pointer

cursor-not-allowed
```

---

# Opacity

```html
opacity-0

opacity-50

opacity-100
```

---

# Responsive Design

| Prefix | Screen Size |
|---------|-------------|
| sm: | ≥640px |
| md: | ≥768px |
| lg: | ≥1024px |
| xl: | ≥1280px |
| 2xl: | ≥1536px |

Example

```html
<div class="text-xl md:text-4xl lg:text-6xl">
```

---

# Grid

```html
grid

grid-cols-2

grid-cols-3

grid-cols-4

grid-rows-2
```

---

# Common Utility Classes

```html
select-none

uppercase

lowercase

capitalize

italic

underline

truncate
```

---

# Frequently Used Combination

Center anything

```html
flex items-center justify-center
```

---

Full Screen

```html
min-h-screen w-full
```

---

Circle Image

```html
rounded-full
```

---

Responsive Image

```html
w-full h-auto object-cover
```

---

Button

```html
bg-green-500
text-white
px-5
py-2
rounded-lg
hover:bg-green-600
transition
duration-300
```

---

Card

```html
bg-white
shadow-lg
rounded-xl
p-6
```

---

Container

```html
max-w-7xl
mx-auto
px-5
```

---

# Most Used Tailwind Classes

| Class | Purpose |
|--------|----------|
| flex | Flexbox |
| grid | Grid |
| justify-center | Horizontal Center |
| items-center | Vertical Center |
| gap-5 | Space Between Items |
| p-5 | Padding |
| m-5 | Margin |
| w-full | Full Width |
| h-screen | Screen Height |
| min-h-screen | Minimum Screen Height |
| bg-black | Background |
| text-white | Text Color |
| rounded-full | Circle |
| shadow-lg | Shadow |
| transition | Smooth Animation |
| hover:* | Hover Effect |
| object-cover | Image Fit |

---

# Best Practices

- Prefer Flexbox for layouts.
- Use Grid for complex layouts.
- Use Responsive Prefixes (`sm`, `md`, `lg`).
- Keep class names organized.
- Avoid unnecessary custom CSS.
- Use reusable components.
- Use `min-h-screen` instead of `h-screen` when content can grow.

---

# Folder Structure

```text
Project/
│
├── index.html
├── input.css
├── output.css
├── package.json
├── package-lock.json
│
├── images/
├── assets/
└── icons/
```

---

# Next Topics

- Flexbox Deep Dive
- Grid Layout
- Responsive Design
- Dark Mode
- Tailwind Components
- Animations
- React + Tailwind
- Portfolio Projects
