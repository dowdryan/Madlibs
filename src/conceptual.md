### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is an open-source JavaScript Library used for creating user interfaces. due to it's ability to easily update and render changes made, React is best used for single-page applications, as this creates a much more smooth user experience. Because React has so many benefits such as modularity, performance optimization, as well as being open-source, it has become a great tool for Software Engineers.

- What is Babel? 
  - Babel is a JavaScript compiler that used to create  modern JavaScript code and translate it into a version compatible with older browsers, therby allowing the code to work in any kind of environment.

- What is JSX?
  - JSX/JavaScript XML, is a JavaScript syntax extension that enables users to write HTML within React files to manage the appearance of the application's UI.

- How is a Component created in React?
  - Components in React are generated by defining a class or function, which will either return or extend an existing React component class. 

- What are some difference between state and props? *
  - State:
    - A state is mutable and can be changed with the `setState` method. This alse means that an existing state cannot be accessed outside the component.
    - Initiallized in the component's constructor.
  - Props: 
    - Props are immutable, meaning that they are passed down from a parent component and cannot be modified inside the recieving component/child component. 
    - Used in functional components where states are not utilzed.

- What does "downward data flow" refer to in React?
  - In React, "downward data flow" refers to the method in which data is passed from parent component(s) to its child component(s).

- What is a controlled component?
  - A controlled component is a component whose values (such as state and behavior) are controlled by the parent component.

- What is an uncontrolled component?
  - Contrary to controlled components, uncontrolled components are components capable of managing their own state and behavior. They do not need the parent component to do anything.

- What is the purpose of the `key` prop when rendering a list of components? 
  - The `key` prop is a unique identifier in React used for better optimization during the rendering process by identifying, tracking, and/or managing components within a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? 
  - The reason why it is considered a bad idea to use an array index for a `key` prop when rendering a list of components is because of the potential issues that may arise due to how malleable the array index is. Depending on what items are added, removed, and/or reordered, the array index may not be able to uniquely indentify each component. This is especially harmful for any list with duplicate values. In turn, React will then be unable to detect and update those components, causing some potential bugs and other unforeseen issues.

- Describe useEffect. What use cases is it used for in React components? 
  - `useEffect` is a React Hook used to perform/manage side effects in functional components that cannot be handled synchronously. It can be used for many different types of cases in React Components, such as Data Fetching, DOM Manipulation, and Intervals.

- What does useRef do?  Does a change to a ref value cause a rerender of a component? 
  - `useRef` is another React Hook used to create and return a mutable object (called a ref object). They can hold a  single `.current` property set to the specific initial value provided. Changes made to a ref value do not cause component re-renders, because refs are not reactive. Therefore, component updates should not be triggered anytime one of the values is altered.

- When would you use a ref? When wouldn't you use one? 
  - Ideally you should use when directly interacting with the DOM or when you want to maintain a value across renders without causing re-renders. Alternatively, users should avoid using refs for managing component states or derived values that should trigger re-renders.

- What is a custom hook in React? When would you want to write one?
  - A Custom Hook is a reusable JavaScript function that can be used to encapsulate logic unique logic inside of functional components. You'd want to create a custom hook when reusing logic, hooking into lifecycle methods, and for testing logic.