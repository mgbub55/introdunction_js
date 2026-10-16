# JavaScript Learning Journey & Project Showcase 🚀

Welcome to the **JavaScript Learning Journey & Project Showcase** repository (`introdunction_js`). This repository is a structured collection of fundamental JavaScript exercises, DOM manipulation labs, and interactive web applications built with vanilla JavaScript, HTML5, and CSS3.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Projects & Modules Breakdown](#projects--modules-breakdown)
  - [1. Intro-js (JavaScript Fundamentals)](#1-intro-js-javascript-fundamentals)
  - [2. dom-js (DOM Manipulation & Events)](#2-dom-js-dom-manipulation--events)
  - [3. domtrav-js (DOM Tree Traversal)](#3-domtrav-js-dom-tree-traversal)
  - [4. dom-removal (Dynamic Element Creation & Removal)](#4-dom-removal-dynamic-element-creation--removal)
  - [5. user-inputs (Forms & Input Events)](#5-user-inputs-forms--input-events)
  - [6. readmore-button-solution (UI Component: Read More / Read Less)](#6-readmore-button-solution-ui-component-read-more--read-less)
  - [7. Solution-Search-Bar (Real-Time Product Filter)](#7-solution-search-bar-real-time-product-filter)
  - [8. proj_cookie (Cookie Clicker Game)](#8-proj_cookie-cookie-clicker-game)
  - [9. todo-trial-app (Persistent To-Do Application)](#9-todo-trial-app-persistent-to-do-application)
  - [10. note-maker (Full-Featured Notes App with Dark Mode)](#10-note-maker-full-featured-notes-app-with-dark-mode)
- [Key Concepts Covered](#key-concepts-covered)
- [How to Run Locally](#how-to-run-locally)
- [Author & License](#author--license)

---

## 🌟 Overview

This repository demonstrates the progression from core JavaScript programming concepts to building responsive, dynamic user interfaces without external frontend frameworks.

- **Pure Vanilla JS**: Core language mechanics, modern ES6+ syntax, and native browser APIs.
- **Hands-On DOM**: Selecting, modifying, traversing, creating, and removing DOM nodes.
- **State & Storage**: Handling interactive state and persisting application data with `localStorage`.
- **Interactive UI Components**: Real-time search filters, modal dialogues, accordion/expandable text, and mini-games.

---

## 📂 Repository Structure

```text
introdunction_js/
├── Intro-js/                    # JavaScript syntax, variables, types, arrays & functions
│   ├── index.html
│   └── index.js
├── dom-js/                      # DOM selection, attributes, styling & mouse events
│   ├── index.html
│   ├── app.js
│   ├── lady.png
│   └── portal.png
├── domtrav-js/                  # DOM traversal (parent, children, siblings)
│   ├── index.html
│   └── app.js
├── dom-removal/                 # Creating and deleting dynamic elements
│   ├── index.html
│   └── app.js
├── user-inputs/                 # Input events, text reflection & form submissions
│   ├── index.html
│   └── app.js
├── readmore-button-solution/    # Expandable text cards with CSS line clamp & gradient mask
│   ├── index.html
│   └── style.css
├── Solution-Search-Bar/         # Live product search bar with word-level filtering
│   ├── index.html
│   ├── search.js
│   ├── style.css
│   └── images/
├── proj_cookie/                 # Interactive Cookie Clicker game with upgrades & shop
│   ├── index.html
│   ├── app.js
│   ├── dev.js
│   ├── build.js
│   ├── style.css
│   └── cookie.png
├── todo-trial-app/              # To-Do list with checkboxes, deletion & localStorage
│   ├── index.html
│   └── app.js
├── note-maker/                  # Note taking app with modal editor & light/dark theme toggle
│   ├── index.html
│   ├── app.js
│   └── style.css
└── README.md                    # Project documentation
```

---

## 🔍 Projects & Modules Breakdown

### 1. Intro-js (JavaScript Fundamentals)
- **Path**: `Intro-js/`
- **Key Concepts**:
  - Variable scoping with `let` and `const`.
  - Primitive data types: `String`, `Number`, `Boolean`, `null`, `undefined`.
  - Object literals, property access via dot notation and bracket notation.
  - Array initialization, indexing, and manipulation.
  - Reusable functions and parameterized routines.
  - Conditional branching (`if`, `else if`, `else`), equality operators (`==`, `===`), and logical operators (`&&`, `||`, `!`).

### 2. dom-js (DOM Manipulation & Events)
- **Path**: `dom-js/`
- **Key Concepts**:
  - Element selection using `document.getElementById` and `document.querySelectorAll`.
  - Modifying styles programmatically (`element.style.color`, `element.style.background`).
  - Reading and writing HTML attributes using `getAttribute()` and `setAttribute()`.
  - Interactive event handling: `onclick`, `mouseenter`, `mouseleave`, and `addEventListener`.
  - Dynamic image swapping on hover/click.

### 3. domtrav-js (DOM Tree Traversal)
- **Path**: `domtrav-js/`
- **Key Concepts**:
  - Navigating parent elements (`element.parentElement`).
  - Inspecting child collections (`element.children`) and converting `HTMLCollection` to arrays using `Array.from()` for iteration (`forEach`).
  - Accessing adjacent siblings (`previousElementSibling`, `nextElementSibling`).
  - Querying specific descendant selectors like `:first-child`.

### 4. dom-removal (Dynamic Element Creation & Removal)
- **Path**: `dom-removal/`
- **Key Concepts**:
  - Creating new DOM elements on the fly (`document.createElement`).
  - Setting text content and assigning child elements (`appendChild`).
  - Deleting elements from the DOM tree (`element.remove()` and `parentElement.remove()`).
  - Attaching dynamic delete handlers to newly generated list items.

### 5. user-inputs (Forms & Input Events)
- **Path**: `user-inputs/`
- **Key Concepts**:
  - Extracting values from text inputs (`input.value`).
  - Preventing browser default reload behavior on form submissions with `event.preventDefault()`.
  - Real-time reactive UI updates using the `input` event listener.
  - Multi-field data extraction (e.g. Name, Email) and formatted submission handling.

### 6. readmore-button-solution (UI Component: Read More / Read Less)
- **Path**: `readmore-button-solution/`
- **Key Concepts**:
  - Multi-line text truncation using CSS `-webkit-line-clamp`.
  - Smooth fade-out gradient mask with CSS pseudo-elements (`::after`).
  - Toggling active state classes (`container.classList.toggle('expanded')`).
  - Dynamic button label switching between `"Read More"` and `"Read Less"`.

### 7. Solution-Search-Bar (Real-Time Product Filter)
- **Path**: `Solution-Search-Bar/`
- **Key Concepts**:
  - Building a live search filter for e-commerce shoe products.
  - Comparing exact string matches vs. multi-keyword search.
  - String manipulation and tokenization with `toLowerCase()` and regex whitespace splitting (`split(/\s+/)`).
  - Checking multi-word satisfaction using `Array.prototype.every()`.
  - Conditional element rendering (`display: block` vs. `display: none`).

### 8. proj_cookie (Cookie Clicker Game)
- **Path**: `proj_cookie/`
- **Key Concepts**:
  - Incremental game architecture with global state management.
  - Click interaction incrementing score counter.
  - Automated progression with Cookies-Per-Second (CPS) timer intervals (`setInterval`).
  - In-game store to purchase upgrades (Grandmother, Baker, Factory).
  - Saving and loading progress across sessions using `localStorage`.

### 9. todo-trial-app (Persistent To-Do Application)
- **Path**: `todo-trial-app/`
- **Key Concepts**:
  - Full CRUD task list implementation.
  - Task completion toggling with dynamic line-through text decoration.
  - Rebuilding the DOM list upon page load with `DOMContentLoaded`.
  - Serializing and parsing application state using `JSON.stringify()` and `JSON.parse()`.
  - Synchronizing DOM deletions with `localStorage` array filtering.

### 10. note-maker (Full-Featured Notes App with Dark Mode)
- **Path**: `note-maker/`
- **Key Concepts**:
  - Note creation, updating, and deletion with timestamp-based unique identifiers (`Date.now()`).
  - Modal dialog control for adding and editing notes.
  - Light and Dark theme toggling with instant class switching on `document.body`.
  - Preserving user theme preferences and note collections in `localStorage`.
  - Clean card-based responsive layout with modern CSS transitions.

---

## 🛠️ Key Concepts Covered

| Category | Topics & APIs |
| :--- | :--- |
| **Language Basics** | Variables (`let`, `const`), Data Types, Objects, Arrays, Loops, Conditionals, Functions |
| **DOM Selection** | `getElementById`, `querySelector`, `querySelectorAll`, `closest` |
| **DOM Manipulation** | `createElement`, `appendChild`, `removeChild`, `remove`, `setAttribute`, `classList` |
| **DOM Traversal** | `parentElement`, `children`, `previousElementSibling`, `nextElementSibling` |
| **Events** | `click`, `input`, `submit`, `mouseenter`, `mouseleave`, `DOMContentLoaded`, `e.preventDefault()` |
| **Web Storage** | `localStorage.setItem`, `localStorage.getItem`, JSON serialization (`parse`/`stringify`) |
| **UI Patterns** | Modals, Theme switchers, Expandable text, Live search bars, Game loops |

---

## 🚀 How to Run Locally

You don't need any complex build tools, node modules, or bundlers to run these projects!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mgbub55/introdunction_js.git
   cd introdunction_js
   ```

2. **Open any project**:
   - Double-click any `index.html` file in your file explorer to open it in your browser.
   - Alternatively, use the **Live Server** extension in VS Code:
     1. Right-click the desired `index.html` file (e.g. `note-maker/index.html` or `todo-trial-app/index.html`).
     2. Select **"Open with Live Server"**.

---

## 👤 Author

- **GitHub**: [@mgbub55](https://github.com/mgbub55)
- **Repository**: [introdunction_js](https://github.com/mgbub55/introdunction_js)
