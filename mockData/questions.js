import { createElement } from "react";

const questionData = [
  {
    id: 1,
    question: `What is react?`,
    answer: `React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.`,
  },
  {
    id: 2,
    question: `What are the major features of React?`,
    answer: `The major features of React are:

      It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
      Supports server-side rendering.
      Follows Unidirectional data flow or data binding.
      Uses reusable/composable UI components to develop the view.`,
  },
  {
    id: 3,
    question: `What is JSX?`,
    answer: `JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.`,
  },
  {
    id: 4,
    question: `What is the difference between Element and Component?`,
    answer: `An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.`,
  },
  {
    id: 5,
    question: `How to create components in React?`,
    answer: `There are two possible ways to create a component.

      Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:

      Class Components: You can also use ES6 class to define a component. The above function component can be written as:

      }`,
  },
  {
    id: 6,
    question: `When to use a Class Component over a Function Component?`,
    answer: `If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component.`,
  },
  {
    id: 7,
    question: "Explain memory leak?",
    answer: `Go to below link`,
    links: [`https://codesandbox.io/s/explain-memory-leak-0wtoc`],
    embed: createElement("iframe", {
      src: "https://codesandbox.io/embed/explain-memory-leak-0wtoc?fontsize=14&hidenavigation=1&theme=dark",
      style: {
        width: "100%",
        height: "500px",
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
      },
      title: "explain-memory-leak",
      allow:
        "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
      sandbox:
        "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
    }),
  },
  {
    id: 8,
    question: `explain useCallback hook?`,
    answer: `https://dmitripavlutin.com/dont-overuse-react-usecallback/`,
  },
  {
    id: 9,
    question: `explain useMemo hook?`,
    answer: ``,
  },
  {
    id: 10,
    question: `difference b/w useCallback & useMemo hook?`,
    answer: ``,
  },
  {
    id: 11,
    question: `difference b/w useCallback & useMemo hook?`,
    answer: ``,
  },
];

export default questionData;
