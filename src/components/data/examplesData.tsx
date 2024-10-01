interface HookCodeExamples {
    [key: string]: string;
  }
  
  export const codeExamples: HookCodeExamples = {
    useState: `
      // useState example: A simple counter component
      function Counter() {
        // Declare a new state variable called "count", initialized to 0
        const [count, setCount] = React.useState(0);
  
        // Function to increment the count
        const increment = () => {
          setCount(count + 1);
        };
  
        // Function to decrement the count
        const decrement = () => {
          setCount(count - 1);
        };
  
        return (
          <div className="flex flex-col items-start">
            {/* Display the current count */}
            <h1>Count: {count}</h1>
  
            {/* Button to increment the count */}
            <button onClick={increment}>Increase</button>
  
            {/* Button to decrement the count */}
            <button onClick={decrement}>Decrease</button>
          </div>
        );
      }
  
      // Render the Counter component
      render(<Counter />);
    `,
  
    useEffect: `
      // useEffect example: Updating document title based on count
  
      function Counter() {
        // Declare a state variable "count" initialized to 0
        const [count, setCount] = React.useState(0);
  
        // useEffect to update the document title whenever count changes
        React.useEffect(() => {
          document.title = \`You clicked \${count} times\`;
        }, [count]); // Dependency array includes count
  
        return (
          <div>
            {/* Display the current count */}
            <p>You clicked {count} times</p>
  
            {/* Button to increment the count */}
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      }
  
      // Render the Counter component
      render(<Counter />);
    `,
  
    useContext: `
      // useContext example: Consuming a theme context
  
      // Create a ThemeContext with a default value of 'light'
      const ThemeContext = React.createContext('light');
  
      function ThemedButton() {
        // Access the current theme from context
        const theme = React.useContext(ThemeContext);
  
        return (
          <button
            style={{
              backgroundColor: theme === 'dark' ? '#333' : '#CCC',
              color: theme === 'dark' ? '#FFF' : '#000',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            I am styled by theme context!
          </button>
        );
      }
  
      function App() {
        // State to hold the current theme
        const [theme, setTheme] = React.useState('light');
  
        // Function to toggle the theme
        const toggleTheme = () => {
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        };
  
        return (
          // Provide the theme value to child components
          <ThemeContext.Provider value={theme}>
            <ThemedButton />
            {/* Button to toggle the theme */}
            <button onClick={toggleTheme} style={{ marginTop: '10px' }}>
              Toggle Theme
            </button>
          </ThemeContext.Provider>
        );
      }
  
      // Render the App component
      render(<App />);
    `,
  
    useReducer: `
      // useReducer example: Counter using useReducer
  
      // Reducer function to manage state transitions
      function reducer(state, action) {
        // Define how state should change based on action type
        switch (action.type) {
          case 'increment':
            return state + 1;
          case 'decrement':
            return state - 1;
          default:
            return state;
        }
      }
  
      function Counter() {
        // Initialize useReducer with the reducer function and initial state 0
        const [count, dispatch] = React.useReducer(reducer, 0);
  
        return (
          <div>
            {/* Display the current count */}
            <p>Count: {count}</p>
  
            {/* Dispatch actions to update the state */}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          </div>
        );
      }
  
      // Render the Counter component
      render(<Counter />);
    `,
  
    useCallback: `
      // useCallback example: Optimizing child component rendering
  
      // Child component that displays an item
      function ListItem({ item, onClick }) {
        console.log('Rendering ListItem:', item);
        return (
          <li onClick={() => onClick(item)}>
            {item}
          </li>
        );
      }
  
      // Memoize the ListItem component to prevent unnecessary re-renders
      const MemoizedListItem = React.memo(ListItem);
  
      function ItemList() {
        const [items] = React.useState(['Apple', 'Banana', 'Cherry']);
        const [selectedItem, setSelectedItem] = React.useState(null);
  
        // useCallback to memoize the onClick handler
        const handleClick = React.useCallback((item) => {
          setSelectedItem(item);
        }, []);
  
        return (
          <div>
            <ul>
              {items.map((item) => (
                <MemoizedListItem key={item} item={item} onClick={handleClick} />
              ))}
            </ul>
            {selectedItem && <p>You selected: {selectedItem}</p>}
          </div>
        );
      }
  
      // Render the ItemList component
      render(<ItemList />);
    `,
  
    useMemo: `
      // useMemo example: Memoizing an expensive calculation
  
      function Fibonacci({ n }) {
        // Expensive calculation function
        const fib = (n) => {
          if (n <= 1) return n;
          return fib(n - 1) + fib(n - 2);
        };
  
        // Memoize the result of the expensive calculation
        const fibValue = React.useMemo(() => fib(n), [n]);
  
        return <p>Fibonacci of {n} is {fibValue}</p>;
      }
  
      function App() {
        const [count, setCount] = React.useState(1);
  
        return (
          <div>
            {/* Display the Fibonacci number */}
            <Fibonacci n={count} />
  
            {/* Button to increment the count */}
            <button onClick={() => setCount(count + 1)}>Next Fibonacci</button>
          </div>
        );
      }
  
      // Render the App component
      render(<App />);
    `,
  
    useRef: `
      // useRef example: Accessing a DOM element
  
      function TextInputWithFocusButton() {
        // Create a ref to store the input DOM element
        const inputEl = React.useRef(null);
  
        const onButtonClick = () => {
          // 'current' points to the mounted text input element
          inputEl.current.focus();
        };
  
        return (
          <div>
            {/* Attach the ref to the input element */}
            <input ref={inputEl} type="text" />
  
            {/* Button to focus the input */}
            <button onClick={onButtonClick}>Focus the input</button>
          </div>
        );
      }
  
      // Render the component
      render(<TextInputWithFocusButton />);
    `,
  
    useLayoutEffect: `
      // useLayoutEffect example: Measuring DOM element size
  
      function MeasureExample() {
        const [height, setHeight] = React.useState(0);
        const divRef = React.useRef(null);
  
        React.useLayoutEffect(() => {
          // Measure the height of the div
          const divHeight = divRef.current.getBoundingClientRect().height;
          setHeight(divHeight);
        }, []);
  
        return (
          <div>
            <div ref={divRef} style={{ padding: '20px', border: '1px solid black' }}>
              <p>Some content here</p>
              <p>More content</p>
            </div>
            <p>The above div is {height}px tall</p>
          </div>
        );
      }
  
      // Render the MeasureExample component
      render(<MeasureExample />);
    `,
  
    useDebugValue: `
      // useDebugValue example: Custom hook with debug value
  
      function useFriendStatus(friendID) {
        const [isOnline, setIsOnline] = React.useState(null);
  
        // Use useDebugValue to display a label in React DevTools
        React.useDebugValue(isOnline ? 'Online' : 'Offline');
  
        // Simulate a friend status change
        React.useEffect(() => {
          const timer = setTimeout(() => {
            setIsOnline(true);
          }, 1000);
          return () => clearTimeout(timer);
        }, [friendID]);
  
        return isOnline;
      }
  
      function FriendStatus() {
        const isOnline = useFriendStatus(1);
  
        if (isOnline === null) {
          return 'Loading...';
        }
        return isOnline ? 'Online' : 'Offline';
      }
  
      // Render the FriendStatus component
      render(<FriendStatus />);
    `,
  
    useImperativeHandle: `
      // useImperativeHandle example: Exposing methods to parent components
  
      // A custom input component that uses forwardRef
      const FancyInput = React.forwardRef((props, ref) => {
        const inputRef = React.useRef();
  
        // Expose a focus method to the parent component
        React.useImperativeHandle(ref, () => ({
          focus: () => {
            inputRef.current.focus();
          },
        }));
  
        return <input ref={inputRef} />;
      });
  
      function App() {
        const fancyInputRef = React.useRef();
  
        return (
          <div>
            {/* Use the forwarded ref to access the child component's methods */}
            <FancyInput ref={fancyInputRef} />
  
            {/* Button to focus the input */}
            <button onClick={() => fancyInputRef.current.focus()}>Focus the input</button>
          </div>
        );
      }
  
      // Render the App component
      render(<App />);
    `,
  };
  