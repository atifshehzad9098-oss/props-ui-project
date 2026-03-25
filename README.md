# React Props UI Project

## Project Overview

This project is a **React UI implementation** built to practice the **Props concept in React**.
The goal of this project is to understand how data flows **from parent components to child components** and how reusable UI components can be created using props.

The UI displays a **customer segmentation section for a digital banking platform**, where each card represents a different type of customer group.

All card data such as:

* index numbers
* images
* titles
* descriptions
* button labels
* styles

are passed dynamically from the **main parent component (`App.jsx`)** to child components.

---

## Key Concepts Practiced

### 1. React Props

Data is passed from **parent components to child components** using props.

Example data flow:

```
App.jsx → Section.jsx → Card.jsx → UI Elements
```

This demonstrates how React handles **unidirectional data flow**.

---

### 2. Component-Based Architecture

The UI is broken into **small reusable components** to improve maintainability and scalability.

Example components used:

* App Component (Root)
* Section Component
* Card Component
* Button Component
* Content Elements

---

### 3. Atomic Design Principles

The UI structure also follows **Atomic Design methodology**.

Atomic design divides UI into small building blocks:

* **Atoms** → basic elements (text, buttons)
* **Molecules** → small component combinations
* **Organisms** → complex UI sections
* **Templates / Pages** → complete layouts

This approach helps create **highly reusable and scalable components**.

---

## Technologies Used

* React
* JavaScript (ES6+)
* Tailwind CSS
* Vite

---

## Features

* Dynamic UI rendering using React props
* Reusable card components
* Clean and modular component structure
* Atomic design inspired UI architecture
* Modern responsive layout

---

## UI Preview

<img width="1911" height="860" alt="image" src="https://github.com/user-attachments/assets/62527a2f-b2e9-482f-ab45-e0883ffcdba3" />

---

## Learning Objectives

This project helped practice:

* React component architecture
* Passing data using props
* Building reusable UI components
* Applying atomic design concepts in real UI projects

---

## Author

**Atif Shehzad**

BSc Student | Aspiring Front-End Developer

Currently learning:

* HTML
* CSS
* JavaScript
* React
* Tailwind CSS

