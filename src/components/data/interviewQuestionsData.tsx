interface QuestionAnswer {
    question: string;
    answer: string;
  }
  
  interface HookQuestions {
    questions: QuestionAnswer[];
  }
  
  interface InterviewQuestionsData {
    useState: HookQuestions;
    useEffect: HookQuestions;
    useContext: HookQuestions;
    useReducer: HookQuestions;
    useCallback: HookQuestions;
    useMemo: HookQuestions;
    useRef: HookQuestions;
    useLayoutEffect: HookQuestions;
    useDebugValue: HookQuestions;
    useImperativeHandle: HookQuestions;
  }
  
  export const interviewQuestionsData: InterviewQuestionsData = {
    useState: {
      questions: [
        {
          question: '1. What is `useState` in React? How does it differ from class component state?',
          answer: `\`useState\` is a Hook in React that allows functional components to manage state. In class components, state is managed by \`this.state\` and updated using \`this.setState()\`.`
        },
        {
          question: '2. How do you update the state using `useState`? Can you demonstrate this with an example?',
          answer: `You update the state by calling the setter function returned by \`useState\`. Example:
          \`\`\`tsx
          const [count, setCount] = useState(0);
  
          return (
            <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          );
          \`\`\``
        },
        {
          question: '3. Why is `useState` asynchronous? How do you handle state updates that depend on the previous state?',
          answer: `\`useState\` is asynchronous to allow React to batch updates for performance reasons. You can use functional updates to handle state that depends on previous values:
          \`\`\`tsx
          setCount(prevCount => prevCount + 1);
          \`\`\``
        },
        {
          question: '4. What happens if you update a state variable with the same value as its current state? Will the component re-render?',
          answer: `If the new state value is the same as the current state, React will not trigger a re-render because it uses shallow comparison for state changes.`
        },
        {
          question: '5. Can you set an initial state value based on props using `useState`? How is this done?',
          answer: `Yes, you can set the initial state using a function if it depends on props or calculations:
          \`\`\`tsx
          const [state, setState] = useState(() => calculateInitialState(props));
          \`\`\``
        }
      ]
    },
    useEffect: {
        questions: [
          {
            question: '1. What is `useEffect` in React and how is it used?',
            answer: `\`useEffect\` is a Hook that lets you perform side effects in functional components, such as fetching data, subscriptions, or manually changing the DOM. It runs after render by default.`
          },
          {
            question: '2. How can you control when `useEffect` runs?',
            answer: `You can control when \`useEffect\` runs by passing a dependency array as the second argument. The effect will only run if the values in the dependency array change:
            \`\`\`tsx
            useEffect(() => {
              // effect logic
            }, [dependency1, dependency2]);
            \`\`\``
          },
          {
            question: '3. What happens if you return a function from `useEffect`?',
            answer: `Returning a function from \`useEffect\` creates a cleanup function that runs when the component unmounts or before the effect runs again (if dependencies change). Example:
            \`\`\`tsx
            useEffect(() => {
              const subscription = subscribe();
              return () => {
                subscription.unsubscribe();
              };
            }, []);
            \`\`\``
          },
          {
            question: '4. How do you avoid infinite loops with `useEffect`?',
            answer: `To avoid infinite loops, ensure that the effect's dependency array contains only the values that are necessary. If you omit dependencies, the effect runs on every render.`
          },
          {
            question: '5. Can you use `async` functions directly inside `useEffect`? If not, how can you handle async calls?',
            answer: `You cannot directly use \`async\` functions in \`useEffect\` because the cleanup function must be synchronous. Instead, you can define and call an async function inside the effect:
            \`\`\`tsx
            useEffect(() => {
              async function fetchData() {
                const result = await apiCall();
              }
              fetchData();
            }, []);
            \`\`\``
          }
        ]
      },
      useContext: {
        questions: [
          {
            question: '1. What is `useContext` and how is it used in React?',
            answer: `\`useContext\` is a Hook that allows you to consume context values in functional components. It simplifies accessing context without needing the \`<Context.Consumer>\` wrapper.`
          },
          {
            question: '2. How do you create and provide a context in React?',
            answer: `You can create context using \`React.createContext()\` and provide the context to child components with \`<Context.Provider>\`. Example:
            \`\`\`tsx
            const ThemeContext = createContext('light');
            
            function App() {
              return (
                <ThemeContext.Provider value="dark">
                  <Toolbar />
                </ThemeContext.Provider>
              );
            }
            \`\`\``
          },
          {
            question: '3. How do you consume a context value using `useContext`?',
            answer: `You can consume context using \`useContext\` like this:
            \`\`\`tsx
            const theme = useContext(ThemeContext);
            \`\`\`
            This will return the nearest value provided by the \`<ThemeContext.Provider>\`.`
          },
          {
            question: '4. What are the advantages of using `useContext` over traditional prop drilling?',
            answer: `\`useContext\` helps avoid "prop drilling," which is when you pass props through many layers of components just to reach a deeply nested child. Context provides a way to pass data through the component tree without passing props manually.`
          },
          {
            question: '5. Can `useContext` trigger re-renders? How can you optimize it?',
            answer: `Yes, \`useContext\` will trigger re-renders if the context value changes. You can optimize it by memoizing the value passed to the \`Provider\`:
            \`\`\`tsx
            const value = useMemo(() => calculateValue(), [dependency]);
            \`\`\``
          }
        ]
      },
      useReducer: {
        questions: [
          {
            question: '1. What is `useReducer` and how is it different from `useState`?',
            answer: `\`useReducer\` is a Hook that is used for more complex state logic compared to \`useState\`. It takes a reducer function and an initial state, and returns the current state along with a dispatch function.`
          },
          {
            question: '2. How do you set up `useReducer`? Can you provide an example?',
            answer: `You set up \`useReducer\` by passing a reducer function and an initial state:
            \`\`\`tsx
            const [state, dispatch] = useReducer(reducer, initialState);
            
            function reducer(state, action) {
              switch (action.type) {
                case 'increment':
                  return { count: state.count + 1 };
                default:
                  return state;
              }
            }
            \`\`\``
          },
          {
            question: '3. What are the advantages of `useReducer` over `useState`?',
            answer: `\`useReducer\` is better suited for managing complex state transitions, such as when the next state depends on the previous one or when there are multiple actions involved. It provides a more predictable state management solution for complex scenarios.`
          },
          {
            question: '4. How do you dispatch actions using `useReducer`?',
            answer: `You dispatch actions by calling the \`dispatch\` function with an action object:
            \`\`\`tsx
            dispatch({ type: 'increment' });
            \`\`\``
          },
          {
            question: '5. Can you use `useReducer` with `useContext`? How?',
            answer: `Yes, you can combine \`useReducer\` with \`useContext\` to provide a centralized state management solution across components. Example:
            \`\`\`tsx
            const CountContext = createContext();
    
            function CountProvider({ children }) {
              const [state, dispatch] = useReducer(reducer, initialState);
              return (
                <CountContext.Provider value={{ state, dispatch }}>
                  {children}
                </CountContext.Provider>
              );
            }
            \`\`\``
          }
        ]
      },
    useCallback: {
        questions: [
          {
            question: '1. What is `useCallback` in React, and when should you use it?',
            answer: `\`useCallback\` is a Hook that returns a memoized version of a callback function that only changes if one of the dependencies has changed. It's useful when passing callbacks to child components to prevent unnecessary re-renders.`
          },
          {
            question: '2. How does `useCallback` help in optimizing performance?',
            answer: `\`useCallback\` prevents the recreation of functions on every render, which can help reduce unnecessary renders in child components that rely on stable references to functions passed as props.`
          },
          {
            question: '3. What is the difference between `useCallback` and `useMemo`?',
            answer: `\`useCallback\` memoizes a function, while \`useMemo\` memoizes the result of a computation. Both are used for performance optimization, but for different types of values.`
          },
          {
            question: '4. Can you provide an example of using `useCallback`?',
            answer: `Example:
            \`\`\`tsx
            const handleClick = useCallback(() => {
              console.log('Button clicked');
            }, []);
    
            return <button onClick={handleClick}>Click me</button>;
            \`\`\``
          },
          {
            question: '5. What are the potential pitfalls of using `useCallback`?',
            answer: `A potential pitfall is overusing \`useCallback\`, as it adds complexity and could hurt performance if used unnecessarily. It's best to use it when you have performance concerns with child components re-rendering.`
          }
        ]
      },
      useMemo: {
        questions: [
          {
            question: '1. What is `useMemo`, and how does it work in React?',
            answer: `\`useMemo\` is a Hook that memoizes the result of a calculation or function. It only recalculates the value if the dependencies change. This is useful for expensive computations that you don’t want to run on every render.`
          },
          {
            question: '2. How is `useMemo` different from `useCallback`?',
            answer: `\`useMemo\` memoizes a computed value, while \`useCallback\` memoizes a function. \`useMemo\` is used for performance optimization when recalculating a value is costly.`
          },
          {
            question: '3. Can you provide an example of using `useMemo`?',
            answer: `Example:
            \`\`\`tsx
            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
            \`\`\`
            This will only recompute the value if \`a\` or \`b\` changes.`
          },
          {
            question: '4. How does `useMemo` help in preventing unnecessary renders?',
            answer: `\`useMemo\` helps prevent unnecessary renders by returning a memoized result. It skips recalculation unless one of its dependencies has changed, thus improving performance when dealing with expensive computations.`
          },
          {
            question: '5. What are some potential pitfalls of using `useMemo`?',
            answer: `A common pitfall is using \`useMemo\` unnecessarily, which adds complexity without measurable performance benefits. It's best used for performance optimization in cases where recalculations are actually costly.`
          }
        ]
      },
      useRef: {
        questions: [
          {
            question: '1. What is `useRef`, and how is it used in React?',
            answer: `\`useRef\` is a Hook that allows you to persist values across renders without triggering a re-render. It’s commonly used to access DOM elements or store mutable values that don't need to cause re-renders.`
          },
          {
            question: '2. How do you access a DOM element using `useRef`?',
            answer: `You can use \`useRef\` to access DOM elements like this:
            \`\`\`tsx
            const inputRef = useRef(null);
    
            useEffect(() => {
              inputRef.current.focus();
            }, []);
    
            return <input ref={inputRef} />;
            \`\`\``
          },
          {
            question: '3. What’s the difference between `useState` and `useRef`?',
            answer: `The main difference is that updating a \`useState\` variable causes a re-render, while updating a \`useRef\` value does not trigger a re-render.`
          },
          {
            question: '4. Can you use `useRef` to store mutable values?',
            answer: `Yes, \`useRef\` is often used to store mutable values that persist between renders. Example:
            \`\`\`tsx
            const countRef = useRef(0);
            countRef.current += 1;
            \`\`\``
          },
          {
            question: '5. How does `useRef` help in improving performance?',
            answer: `\`useRef\` improves performance by allowing you to store values that don’t cause re-renders when updated. This is useful for values that change frequently but don’t affect the UI.`
          }
        ]
      },
      useLayoutEffect: {
        questions: [
          {
            question: '1. What is `useLayoutEffect`, and how is it different from `useEffect`?',
            answer: `\`useLayoutEffect\` fires synchronously after all DOM mutations but before the browser repaints. It's used when you need to make DOM measurements or updates that should happen before the screen updates.`
          },
          {
            question: '2. When should you use `useLayoutEffect` instead of `useEffect`?',
            answer: `You should use \`useLayoutEffect\` when you need to make DOM updates that need to happen before the browser repaints, like measuring layout or synchronizing animations.`
          },
          {
            question: '3. Can you provide an example of using `useLayoutEffect`?',
            answer: `Example:
            \`\`\`tsx
            useLayoutEffect(() => {
              const height = ref.current.offsetHeight;
            }, []);
            \`\`\`
            This will run before the screen repaints, allowing you to make layout measurements.`
          },
          {
            question: '4. What are the performance implications of using `useLayoutEffect`?',
            answer: `Since \`useLayoutEffect\` runs synchronously before the browser repaints, it can block the UI and lead to performance issues if overused. Use it only when necessary.`
          },
          {
            question: '5. Can you use `async` operations inside `useLayoutEffect`?',
            answer: `No, because \`useLayoutEffect\` runs synchronously, you cannot directly use async functions inside it. You should handle async operations in \`useEffect\`.`
          }
        ]
      },
      useDebugValue: {
        questions: [
          {
            question: '1. What is `useDebugValue`, and how is it used?',
            answer: `\`useDebugValue\` is a Hook that lets you display custom labels in React DevTools for custom Hooks. It helps in debugging by providing additional information in the DevTools.`
          },
          {
            question: '2. Can you provide an example of using `useDebugValue`?',
            answer: `Example:
            \`\`\`tsx
            function useCustomHook(value) {
              useDebugValue(value > 0 ? 'Positive' : 'Negative');
            }
            \`\`\`
            This will display "Positive" or "Negative" in the DevTools depending on the value.`
          },
          {
            question: '3. What are the benefits of using `useDebugValue`?',
            answer: `\`useDebugValue\` helps you debug custom Hooks by providing custom labels that can make it easier to understand state or logic flow in the DevTools.`
          },
          {
            question: '4. Is `useDebugValue` called in production builds?',
            answer: `No, \`useDebugValue\` is stripped out in production builds, so it won’t affect performance. It is purely for development and debugging purposes.`
          },
          {
            question: '5. How can you conditionally format a value in `useDebugValue`?',
            answer: `You can format a value like this:
            \`\`\`tsx
            useDebugValue(value, val => val > 0 ? 'Positive' : 'Negative');
            \`\`\`
            This will display a formatted label in the DevTools.`
          }
        ]
      },
      useImperativeHandle: {
        questions: [
          {
            question: '1. What is `useImperativeHandle`, and why would you use it?',
            answer: `\`useImperativeHandle\` is a Hook that allows you to customize the instance value that is exposed to parent components when using \`ref\`. It's used to control what gets exposed to parent components.`
          },
          {
            question: '2. Can you provide an example of using `useImperativeHandle`?',
            answer: `Example:
            \`\`\`tsx
            function CustomInput(props, ref) {
              const inputRef = useRef();
              useImperativeHandle(ref, () => ({
                focus: () => {
                  inputRef.current.focus();
                }
              }));
              return <input ref={inputRef} />;
            }
            export default forwardRef(CustomInput);
            \`\`\``
          },
          {
            question: '3. How is `useImperativeHandle` different from directly using `ref`?',
            answer: `With \`useImperativeHandle\`, you can customize what is exposed via the \`ref\`. This is useful when you want to limit the control of a component or expose only certain methods or properties to the parent.`
          },
          {
            question: '4. What are the risks of using `useImperativeHandle`?',
            answer: `\`useImperativeHandle\` can lead to tight coupling between components if overused, making components less reusable. It should be used sparingly when parent-child communication can't be handled through props.`
          },
          {
            question: '5. When would you avoid using `useImperativeHandle`?',
            answer: `Avoid using \`useImperativeHandle\` unless absolutely necessary. It's better to use props and state for communication between components whenever possible.`
          }
        ]
      }
    };
  