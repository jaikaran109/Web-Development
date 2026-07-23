#Use Effect - ye main jo process chl rhi hoti h usko chlne deta h and baki process ko side by side chlata h



# React `useEffect` Hook

`useEffect` is a React Hook used to perform **side effects** in functional components.

Side effects means those tasks which are not directly related to returning JSX/UI, but they affect something outside the component.

Examples:

```txt
API calling
Fetching data from backend
Setting document title
Using timers
Adding event listeners
Working with localStorage
```

---

## Simple Meaning

`useEffect` runs after the component renders.

React first shows the UI, then `useEffect` runs the extra work.

Example:

```txt
Component render hua
↓
UI screen par show hua
↓
useEffect run hua
↓
API call / timer / side effect execute hua
```

---

## Important Point

`useEffect` does not directly mean asynchronous code.

But mostly we use it for tasks like API calling, which are asynchronous.

Simple line:

```txt
useEffect component ke render hone ke baad side effects run karne ke liye use hota hai.
```

---

## Import Syntax

```jsx
import { useEffect } from "react";
```

If using state also:

```jsx
import { useState, useEffect } from "react";
```

---

## Basic Syntax

```jsx
useEffect(() => {
  // code here
}, []);
```

Example:

```jsx
useEffect(() => {
  console.log("Component rendered");
}, []);
```

---

# Dependency Array

The second argument of `useEffect` is called the **dependency array**.

```jsx
useEffect(() => {
  // effect code
}, [dependency]);
```

Dependency array decides **when useEffect will run**.

---

## 1. Empty Dependency Array `[]`

```jsx
useEffect(() => {
  console.log("Runs only once");
}, []);
```

### Meaning

This runs only one time when the component first loads.

Use case:

```txt
API call on page load
Initial data fetching
```

Example:

```jsx
useEffect(() => {
  getData();
}, []);
```

---

## 2. No Dependency Array

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

### Meaning

This runs after every render.

This can be dangerous if we update state inside it, because it can cause infinite re-rendering.

Example:

```jsx
useEffect(() => {
  console.log("Every render");
});
```

---

## 3. With Dependency

```jsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

### Meaning

This effect will run:

```txt
1. When component first renders
2. Whenever count changes
```

Example:

```jsx
useEffect(() => {
  console.log("Count updated:", count);
}, [count]);
```

---

# API Calling Using `useEffect`

Example:

```jsx
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const result = await response.json();

      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>UseEffect API Example</h1>

      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>Status: {data.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
```

---

## Flow of Above Code

```txt
Component loads
↓
data state initially null
↓
UI shows Loading...
↓
useEffect runs
↓
getData() function calls API
↓
API returns data
↓
setData(result) updates state
↓
Component re-renders
↓
Final data appears on screen
```

---

# Why We Use `useEffect` for API Calls?

If we directly call API function inside component body, it will run again and again on every render.

Wrong:

```jsx
const App = () => {
  getData();

  return <h1>Hello</h1>;
};
```

Problem:

```txt
Component render
↓
getData call
↓
state update
↓
component re-render
↓
getData again call
↓
infinite loop
```

Correct:

```jsx
useEffect(() => {
  getData();
}, []);
```

Now API call happens only once when page loads.

---

# Cleanup Function in `useEffect`

Sometimes we need to clean old effects.

Example:

```txt
Timers
Intervals
Event listeners
Subscriptions
```

Syntax:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

### Meaning

```txt
useEffect starts interval
↓
return function cleans interval
↓
cleanup runs when component unmounts
```

---

# Example: Document Title Change

```jsx
import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default App;
```

### Meaning

Whenever `count` changes, browser tab title also changes.

---

# Common Mistakes

## Mistake 1: Forgetting to import `useEffect`

Wrong:

```jsx
import { useState } from "react";
```

Correct:

```jsx
import { useState, useEffect } from "react";
```

---

## Mistake 2: Calling function outside `useEffect`

Wrong:

```jsx
getData();
```

Correct:

```jsx
useEffect(() => {
  getData();
}, []);
```

---

## Mistake 3: Making `useEffect` directly async

Avoid this:

```jsx
useEffect(async () => {
  const res = await fetch(url);
}, []);
```

Better:

```jsx
useEffect(() => {
  async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  getData();
}, []);
```

Or define function outside:

```jsx
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

useEffect(() => {
  getData();
}, []);
```

---

## Mistake 4: Missing Dependency

Wrong:

```jsx
useEffect(() => {
  console.log(count);
}, []);
```

If the effect depends on `count`, then better:

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

---

# Dependency Array Summary

| Syntax | When it runs |
|---|---|
| `useEffect(() => {})` | After every render |
| `useEffect(() => {}, [])` | Only once after first render |
| `useEffect(() => {}, [value])` | First render + when value changes |

---

# Real Life Use Cases

```txt
1. Fetch data from backend
2. Search results update when input changes
3. Update document title
4. Start/stop timer
5. Add/remove event listener
6. Save data to localStorage
```

---

# Simple Interview Explanation

`useEffect` is a React Hook that runs after rendering the component.  
It is used to handle side effects like API calls, timers, subscriptions, DOM updates, and localStorage operations.

Example:

```jsx
useEffect(() => {
  getData();
}, []);
```

This means `getData()` will run only once when the component first loads.

---

# Final Short Definition

```txt
useEffect is used to run side-effect code after component rendering.
```

In simple words:

```txt
React pehle UI render karta hai,
phir useEffect ke andar likha hua extra kaam run karta hai.
```
