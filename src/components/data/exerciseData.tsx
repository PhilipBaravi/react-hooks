export const exerciseData = {
  useState: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Simple Toggle Button",
      exerciseDescription:
        "Create a button that toggles between 'ON' and 'OFF' states using useState.",
      exerciseTasks: [
        "Initialize a state variable to track the toggle state",
        "Create a button that displays 'ON' or 'OFF' based on the state",
        "Update the state when the button is clicked",
      ],
      workingCode: `
function ToggleButton() {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <button className='border border-black rounded-[20%] p-2 hover:bg-lightGray' onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

render(<ToggleButton />);
`,
      exerciseCode: `function ToggleButton() {
  // Initialize state variable 'isOn'

  return (
    <div>
      {/* Create a button that toggles 'ON' or 'OFF' based on 'isOn' */}
    </div>
  );
}

render(<ToggleButton />);
`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Counter with Step",
      exerciseDescription:
        "Build a counter that increments or decrements by a user-defined step value using useState.",
      exerciseTasks: [
        "Initialize state variables for the count and step value",
        "Create input fields for the count and step",
        "Implement functions to handle incrementing and decrementing the count by the step value",
        "Display the current count",
      ],
      workingCode: `
function CounterWithStep() {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const increment = () => setCount(count + Number(step));
  const decrement = () => setCount(count - Number(step));

  return (
    <div className="flex flex-col gap-[20px] items-start">
    <p>Input: </p>
      <input  
        className="border border-black"
        value={step} 
        onChange={(e) => setStep(e.target.value)} 
        placeholder="Step" 
      />
      <button onClick={decrement}>Decrement</button>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

render(<CounterWithStep />);
`,
exerciseCode: `function CounterWithStep() {
  // Initialize state variables 'count' and 'step'

  return (
    <div>
      {/* Input for 'step' */}
      {/* Buttons to increment and decrement 'count' by 'step' */}
    </div>
  );
}

render(<CounterWithStep />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Quiz Application",
      exerciseDescription:
        "Develop a simple quiz application using useState to manage questions, user answers, and score.",
      exerciseTasks: [
        "Initialize state variables for the current question index, user answers, and score",
        "Create a function to handle user answer selection",
        "Update the score based on correct answers",
        "Navigate between questions",
        "Display the final score at the end of the quiz",
      ],
      workingCode: `
function QuizApp() {
  const questions = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { question: 'What is the capital of France?', options: ['Berlin', 'Paris', 'Rome'], answer: 'Paris' },
    // Add more questions as needed
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);

  const handleAnswer = (option) => {
    setUserAnswers([...userAnswers, option]);
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  if (currentIndex >= questions.length) {
    return <div>Your final score is {score}/{questions.length}</div>;
  }

  return (
    <div className="flex flex-col items-start">
      <h3>{questions[currentIndex].question}</h3>
      {questions[currentIndex].options.map((option, idx) => (
        <button className="text-bold text-[1.2rem] hover:bg-lightGray" key={idx} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

render(<QuizApp />);
`,
      exerciseCode: `function QuizApp() {
  // Define questions array

  // Initialize state variables for 'currentIndex', 'userAnswers', and 'score'

  return (
    <div>
      {/* Display current question and options */}
    </div>
  );
}

render(<QuizApp />);

`,
    },
  ],

  useEffect: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Fetch and Display User Data",
      exerciseDescription:
        "Learn how to use useEffect to fetch data from an API and display it when the component mounts. You will fetch user data from the JSONPlaceholder API and render it on the page.",
      exerciseTasks: [
        "1. Initialize state variables to hold the fetched data and any error.",
        "2. Set up useEffect to fetch data from 'https://jsonplaceholder.typicode.com/users' when the component mounts.",
        "3. Handle the API response, and update the state with fetched data or set an error if the request fails.",
        "4. Render the user data or an error message based on the state.",
      ],
      workingCode: `
    function DataFetcher() {
      const [userData, setUserData] = React.useState([]);
      const [error, setError] = React.useState('');
    
      async function fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
          if (!response.ok) {
            setError('Data did not fetch');
            return;
          }
    
          const data = await response.json();
    
          if (data.length === 0) {
            setError('No data to display');
          } else {
            setUserData(data);
          }
        } catch (err) {
          setError(err.message);
        }
      }
    
      React.useEffect(() => {
        fetchData();
      }, []);
    
      return (
        <div>
          {error && <p>{error}</p>}
          {userData.map((el) => (
            <div key={el.id}>
              <h1>User: {el.name}</h1>
              <h2>Username: {el.username}</h2>
              <h2>Email: {el.email}</h2>
              <h2>Phone: {el.phone}</h2>
            </div>
          ))}
        </div>
      );
    }
    
    render(<DataFetcher />);
    `,
      exerciseCode: `function DataFetcher() {
  // Initialize state variables 'userData' and 'error'

  // Fetch data from API when component mounts

  return (
    <div>
      {/* Display error message if any */}
      {/* Display user data */}
    </div>
  );
}

render(<DataFetcher />);

    `,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Event Listener Cleanup",
      exerciseDescription: "Use useEffect to add and clean up event listeners.",
      exerciseTasks: [
        "Set up an event listener in useEffect",
        "Update state based on the event",
        "Clean up the event listener when the component unmounts",
      ],
      workingCode: `
function WindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Window width: {width}px</div>;
}

render(<WindowWidth />);
`,
      exerciseCode: `function WindowWidth() {
  // Initialize state variable 'width'

  // Update 'width' on window resize

  return <div>Window width: {/* Display width */} px</div>;
}

render(<WindowWidth />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Polling with useEffect",
      exerciseDescription:
        "Implement polling of data at regular intervals using useEffect.",
      exerciseTasks: [
        "Set up useEffect to fetch data at regular intervals",
        "Use setInterval inside useEffect",
        "Clear the interval when the component unmounts",
        "Display the updated data",
      ],
      workingCode: `
function PollingData() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json));
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>: {post.body}
            </li>
          ))}
        </ul>
      ) : (
        'Fetching data...'
      )}
    </div>
  );
}

render(<PollingData />);
`,
      exerciseCode: `function PollingData() {
  // Initialize state variable 'data'

  // Fetch data at regular intervals

  return (
    <div>
      {/* Display data or loading message */}
    </div>
  );
}

render(<PollingData />);

`,
    },
  ],

  useContext: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: User Context",
      exerciseDescription:
        "Use useContext to consume a user context and display user information.",
      exerciseTasks: [
        "Create a UserContext with default values",
        "Provide the context value in a parent component",
        "Consume the context in a child component using useContext",
        "Display the user's name and email",
      ],
      workingCode: `
const UserContext = React.createContext({ name: 'Guest', email: '' });

function UserProfile() {
  const user = React.useContext(UserContext);
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email || 'Not provided'}</p>
    </div>
  );
}

function App() {
  const user = { name: 'Alice', email: 'alice@example.com' };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

render(<App />);
`,
      exerciseCode: `const UserContext = React.createContext({ name: 'Guest', email: '' });

function UserProfile() {
  // Consume UserContext

  return (
    <div>
      {/* Display user's name and email */}
    </div>
  );
}

function App() {
  // Provide context value

  return (
    <div>
      {/* Wrap UserProfile with UserContext.Provider */}
    </div>
  );
}

render(<App />);      
`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Theme Context",
      exerciseDescription:
        "Implement a theme switcher using useContext to toggle between light and dark modes.",
      exerciseTasks: [
        "Create a ThemeContext with 'light' as default value",
        "Provide the context in a parent component",
        "Consume the context in child components to apply the theme",
        "Implement a toggle function to switch themes",
      ],
      workingCode: `
const ThemeContext = React.createContext('light');

function ThemeButton() {
  const theme = React.useContext(ThemeContext);
  return (
    <button
      className={\`px-4 py-2 rounded \${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}\`}
    >
      I am styled by theme context!
    </button>
  );
}

function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={theme}>
      <div className={\`min-h-screen flex flex-col items-center justify-center \${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}\`}>
        <ThemeButton />
        <button
          onClick={toggleTheme}
          className={\`mt-4 px-4 py-2 rounded \${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'}\`}
        >
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

render(<App />);
`,
      exerciseCode: `const ThemeContext = React.createContext('light');

function ThemeButton() {
  // Consume ThemeContext

  return (
    <div>
      {/* Button styled based on theme */}
    </div>
  );
}

function App() {
  // Manage 'theme' state and 'toggleTheme' function

  return (
    <div>
      {/* Provide theme context */}
      {/* Include ThemeButton and toggle button */}
    </div>
  );
}

render(<App />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Multi-Level Context",
      exerciseDescription:
        "Use useContext to manage authentication state across multiple nested components.",
      exerciseTasks: [
        "Create an AuthContext with default values",
        "Provide the context at the top level of the app",
        "Consume the context in deeply nested components",
        "Implement login and logout functions",
        "Display different UI based on authentication state",
      ],
      workingCode: `
const AuthContext = React.createContext({ isAuthenticated: false, user: null });

function Profile() {
  const { isAuthenticated, user } = React.useContext(AuthContext);
  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

function LoginButton() {
  const { isAuthenticated, login, logout } = React.useContext(AuthContext);
  return (
    <button onClick={isAuthenticated ? logout : login}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
}

function App() {
  const [authState, setAuthState] = React.useState({
    isAuthenticated: false,
    user: null,
  });

  const login = () =>
    setAuthState({ isAuthenticated: true, user: { name: 'John Doe' } });
  const logout = () => setAuthState({ isAuthenticated: false, user: null });

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      <Profile />
      <LoginButton />
    </AuthContext.Provider>
  );
}

render(<App />);
`,
      exerciseCode: `const AuthContext = React.createContext({ isAuthenticated: false, user: null });

function Profile() {
  // Consume AuthContext

  return (
    <div>
      {/* Show user info if authenticated */}
    </div>
  );
}

function LoginButton() {
  // Consume AuthContext for 'login' and 'logout'

  return (
    <div>
      {/* Button to login or logout */}
    </div>
  );
}

function App() {
  // Manage authentication state

  return (
    <div>
      {/* Provide AuthContext */}
      {/* Include Profile and LoginButton */}
    </div>
  );
}

render(<App />);
`,
    },
  ],

  useReducer: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Simple Counter with useReducer",
      exerciseDescription:
        "Implement a counter using useReducer instead of useState.",
      exerciseTasks: [
        "Set up a reducer function to handle increment and decrement actions",
        "Initialize state using useReducer",
        "Dispatch actions on button clicks",
        "Display the current count",
      ],
      workingCode: `
function counterReducer(state, action) {
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
  const [count, dispatch] = React.useReducer(counterReducer, 0);

  return (
    <div className="flex flex-col items-start">
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}

render(<Counter />);
`,
      exerciseCode: `function counterReducer(state, action) {
  // Define reducer logic
}

function Counter() {
  // Initialize state with useReducer

  return (
    <div>
      {/* Buttons to increment and decrement */}
      {/* Display count */}
    </div>
  );
}

render(<Counter />);

`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Todo List with useReducer",
      exerciseDescription:
        "Build a todo list application using useReducer to manage the state.",
      exerciseTasks: [
        "Set up a reducer to handle adding and removing todos",
        "Initialize the todos state using useReducer",
        "Implement functions to dispatch add and remove actions",
        "Render the list of todos",
      ],
      workingCode: `
function todoReducer(todos, action) {
  switch (action.type) {
    case 'add':
      return [...todos, { id: Date.now(), text: action.text }];
    case 'remove':
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
}

function TodoApp() {
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  const [text, setText] = React.useState('');

  const addTodo = () => {
    dispatch({ type: 'add', text });
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => dispatch({ type: 'remove', id: todo.id })}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

render(<TodoApp />);
`,
      exerciseCode: `function todoReducer(todos, action) {
  // Define reducer logic
}

function TodoApp() {
  // Initialize 'todos' with useReducer

  return (
    <div>
      {/* Input to add todo */}
      {/* List of todos with remove functionality */}
    </div>
  );
}

render(<TodoApp />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Complex State Management",
      exerciseDescription:
        "Use useReducer to manage complex state involving multiple related values.",
      exerciseTasks: [
        "Set up a reducer to handle multiple actions",
        "Initialize state with useReducer",
        "Implement actions to update different parts of the state",
        "Use the state in the component",
      ],
      workingCode: `
function formReducer(state, action) {
  switch (action.type) {
    case 'setFieldValue':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return { name: '', email: '', password: '' };
    default:
      return state;
  }
}

function SignupForm() {
  const [state, dispatch] = React.useReducer(formReducer, {
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    dispatch({ type: 'setFieldValue', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', state);
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={state.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={state.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={state.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}

render(<SignupForm />);
`,
      exerciseCode: `function formReducer(state, action) {
  // Define reducer logic
}

function SignupForm() {
  // Initialize form state with useReducer

  return (
    <div>
      {/* Form inputs for name, email, and password */}
      {/* Submit button */}
    </div>
  );
}

render(<SignupForm />);

`,
    },
  ],

  useCallback: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Memoized Click Handler",
      exerciseDescription:
        "Use useCallback to memoize a click handler function to prevent unnecessary re-renders.",
      exerciseTasks: [
        "Initialize a state variable for count",
        "Use useCallback to memoize the increment function",
        "Pass the memoized function to a child component",
        "Verify that the child does not re-render unnecessarily",
      ],
      workingCode: `
function ParentComponent() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={increment} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Increment</button>;
}

render(<ParentComponent />);
`,
      exerciseCode: `function ParentComponent() {
  // Initialize 'count' state
  // Memoize 'increment' function

  return (
    <div>
      {/* Display count */}
      {/* Pass 'increment' to ChildComponent */}
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Increment</button>;
}

render(<ParentComponent />);

`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Search Filter Optimization",
      exerciseDescription:
        "Use useCallback to optimize a search filter function in a list component.",
      exerciseTasks: [
        "Initialize state variables for search term and list items",
        "Create a function to filter items based on the search term",
        "Use useCallback to memoize the filter function",
        "Pass the memoized function to a child component",
      ],
      workingCode: `
function SearchList() {
  const [search, setSearch] = React.useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const filteredItems = React.useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  }, [items, search]);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      <ItemList items={filteredItems} />
    </div>
  );
}

function ItemList({ items }) {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  );
}

render(<SearchList />);
`,
      exerciseCode: `function SearchList() {
  // Initialize 'search' state
  // Memoize filtered items

  return (
    <div>
      {/* Search input */}
      {/* ItemList with filtered items */}
    </div>
  );
}

function ItemList({ items }) {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

render(<SearchList />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Complex Function Memoization",
      exerciseDescription:
        "Use useCallback to memoize a complex function that depends on multiple state variables.",
      exerciseTasks: [
        "Initialize multiple state variables",
        "Create a complex function that uses these state variables",
        "Memoize the function using useCallback",
        "Ensure the function updates correctly when dependencies change",
      ],
      workingCode: `
function ComplexCalculator() {
  const [a, setA] = React.useState(1);
  const [b, setB] = React.useState(2);
  const [c, setC] = React.useState(3);

  const computeResult = React.useCallback(() => {
    return a * b + c;
  }, [a, b, c]);

  return (
    <div className="flex flex-col items-start">
    <label> Input a: </label>
      <input value={a} onChange={(e) => setA(Number(e.target.value))} />
      <label>Input b: </label>
      <input value={b} onChange={(e) => setB(Number(e.target.value))} />
      <label> Input c: </label>
      <input value={c} onChange={(e) => setC(Number(e.target.value))} />
      <p>Result: {computeResult()}</p>
    </div>
  );
}

render(<ComplexCalculator />);
`,
      exerciseCode: `function ComplexCalculator() {
  // Initialize 'a', 'b', 'c' state variables
  // Memoize 'computeResult' function

  return (
    <div>
      {/* Inputs for 'a', 'b', 'c' */}
      {/* Display result */}
    </div>
  );
}

render(<ComplexCalculator />);

`,
    },
  ],

  useMemo: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Memoized Factorial Calculation",
      exerciseDescription:
        "Use useMemo to optimize an expensive factorial calculation that depends on a state variable.",
      exerciseTasks: [
        "Initialize a state variable for the input number",
        "Create a function to calculate the factorial of the number",
        "Use useMemo to memoize the factorial result",
        "Ensure the factorial function only recalculates when the input number changes",
      ],
      workingCode: `
function FactorialCalculator() {
  const [number, setNumber] = React.useState(1);

  const factorial = React.useMemo(() => {
    console.log('Calculating factorial');
    const computeFactorial = (n) => {
      if (n <= 1) return 1;
      return n * computeFactorial(n - 1);
    };
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
      />
      <p>Factorial of {number} is {factorial}</p>
    </div>
  );
}

render(<FactorialCalculator />);
`,
      exerciseCode: `function FactorialCalculator() {
  // Initialize 'number' state
  // Memoize factorial calculation

  return (
    <div>
      {/* Input for 'number' */}
      {/* Display factorial result */}
    </div>
  );
}

render(<FactorialCalculator />);

`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Memoized Sorted List",
      exerciseDescription:
        "Use useMemo to optimize sorting a list of items when the list or sort criteria change.",
      exerciseTasks: [
        "Initialize a state variable for the list of items",
        "Create a function to sort items based on a selected criteria",
        "Use useMemo to memoize the sorted list",
        "Ensure the sorting function only runs when dependencies change",
      ],
      workingCode: `
function SortedList() {
  const [items] = React.useState([
    { name: 'Apple', price: 1.5 },
    { name: 'Orange', price: 2.0 },
    { name: 'Banana', price: 1.0 },
    { name: 'Mango', price: 2.5 },
  ]);
  const [sortBy, setSortBy] = React.useState('name');

  const sortedItems = React.useMemo(() => {
    console.log('Sorting items');
    return [...items].sort((a, b) =>
      a[sortBy] > b[sortBy] ? 1 : -1
    );
  }, [items, sortBy]);

  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <ul>
        {sortedItems.map((item, idx) => (
          <li key={idx}>
            {item.name} - $ {item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

render(<SortedList />);
`,
      exerciseCode: `function SortedList() {
  // Initialize 'items' and 'sortBy' state
  // Memoize sorted items

  return (
    <div>
      {/* Dropdown to select sort criteria */}
      {/* Display sorted list */}
    </div>
  );
}

render(<SortedList />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Optimized Fibonacci Sequence",
      exerciseDescription:
        "Use useMemo to optimize generating a Fibonacci sequence up to a specified number of terms.",
      exerciseTasks: [
        "Initialize a state variable for the number of terms",
        "Create a function to generate the Fibonacci sequence",
        "Use useMemo to memoize the generated sequence",
        "Ensure the sequence is regenerated only when the number of terms changes",
      ],
      workingCode: `
function FibonacciSequence() {
  const [terms, setTerms] = React.useState(5);

  const fibonacci = React.useMemo(() => {
    console.log('Generating Fibonacci sequence');
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, terms);
  }, [terms]);

  return (
    <div>
      <input
        type="number"
        value={terms}
        onChange={(e) => setTerms(Number(e.target.value))}
        min="1"
      />
      <p>Fibonacci sequence:</p>
      <ul>
        {fibonacci.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

render(<FibonacciSequence />);
`,
      exerciseCode: `function FibonacciSequence() {
  // Initialize 'terms' state
  // Memoize Fibonacci sequence

  return (
    <div>
      {/* Input for 'terms' */}
      {/* Display Fibonacci sequence */}
    </div>
  );
}

render(<FibonacciSequence />);

`,
    },
  ],

  useRef: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Focus Input",
      exerciseDescription:
        "Use useRef to focus an input element when the component mounts.",
      exerciseTasks: [
        "Create an input element",
        "Use useRef to create a ref for the input",
        "Use useEffect to focus the input on mount",
      ],
      workingCode: `
function FocusInput() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Focus me on mount" />;
}

render(<FocusInput />);
`,
      exerciseCode: `function FocusInput() {
  // Create input ref
  // Focus input on mount

  return (
    <div>
      {/* Input with ref */}
    </div>
  );
}

render(<FocusInput />);
   
`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Stopwatch",
      exerciseDescription:
        "Use useRef to create a stopwatch that starts, stops, and resets using an interval.",
      exerciseTasks: [
        "Initialize state for the timer",
        "Use useRef to hold the interval ID",
        "Create functions to start, stop, and reset the timer",
        "Display the elapsed time",
      ],
      workingCode: `
function Stopwatch() {
  const [time, setTime] = React.useState(0);
  const intervalRef = React.useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  React.useEffect(() => {
    return () => stop(); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-start">
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

render(<Stopwatch />);
`,
      exerciseCode: `function Stopwatch() {
  // Initialize 'time' state
  // Use ref for interval ID
  // Start, stop, and reset functions

  return (
    <div>
      {/* Display time */}
      {/* Control buttons */}
    </div>
  );
}

render(<Stopwatch />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Previous State Tracker",
      exerciseDescription:
        "Use useRef to keep track of the previous state value.",
      exerciseTasks: [
        "Initialize a state variable",
        "Use useRef to store the previous state value",
        "Update the ref in useEffect after each render",
        "Display both current and previous state values",
      ],
      workingCode: `
function PreviousState() {
  const [count, setCount] = React.useState(0);
  const prevCountRef = React.useRef();

  React.useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

render(<PreviousState />);
`,
      exerciseCode: `function PreviousState() {
  // Initialize 'count' state
  // Use ref to store previous count

  return (
    <div>
      {/* Display current and previous counts */}
      {/* Button to increment */}
    </div>
  );
}

render(<PreviousState />);

`,
    },
  ],

  useLayoutEffect: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Measuring DOM Elements",
      exerciseDescription:
        "Use useLayoutEffect to measure a DOM element's dimensions before the browser paints.",
      exerciseTasks: [
        "Create a DOM element",
        "Use useRef to reference the element",
        "Use useLayoutEffect to measure its dimensions",
        "Display the measured dimensions",
      ],
      workingCode: `
function MeasureDom() {
  const divRef = React.useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    const { offsetWidth, offsetHeight } = divRef.current;
    setDimensions({ width: offsetWidth, height: offsetHeight });
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: '50%', height: '100px', backgroundColor: 'salmon' }}
      />
      <p>
        Width: {dimensions.width}px, Height: {dimensions.height}px
      </p>
    </div>
  );
}

render(<MeasureDom />);
`,
      exerciseCode: `function MeasureDom() {
  // Create ref for element
  // Measure dimensions in useLayoutEffect

  return (
    <div>
      {/* Element to measure */}
      {/* Display dimensions */}
    </div>
  );
}

render(<MeasureDom />);

`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Modal with Scroll Lock",
      exerciseDescription:
        "Use useLayoutEffect to lock the body scroll when a modal is open.",
      exerciseTasks: [
        "Create a modal component",
        "Use useLayoutEffect to add and remove 'overflow: hidden' on the body when the modal is open",
        "Ensure the scroll lock is applied before the render",
      ],
      workingCode: `
function Modal({ isOpen, onClose }) {
  React.useLayoutEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <p>This is a modal dialog</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function App() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

render(<App />);
`,
      exerciseCode: `function Modal({ isOpen, onClose }) {
  // Lock scroll when modal is open

  return (
    <div>
      {/* Modal content */}
    </div>
  );
}

function App() {
  // Manage modal state

  return (
    <div>
      {/* Open modal button */}
      {/* Modal component */}
    </div>
  );
}

render(<App />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Synchronize Scrolling Elements",
      exerciseDescription:
        "Use useLayoutEffect to synchronize the scroll positions of two elements.",
      exerciseTasks: [
        "Create two scrollable elements",
        "Use useLayoutEffect to synchronize their scroll positions",
        "Ensure the synchronization happens before the browser paints",
      ],
      workingCode: `
function SyncedScroll() {
  const div1Ref = React.useRef(null);
  const div2Ref = React.useRef(null);

  const onScroll = (e) => {
    if (e.target === div1Ref.current) {
      div2Ref.current.scrollTop = e.target.scrollTop;
    } else {
      div1Ref.current.scrollTop = e.target.scrollTop;
    }
  };

  React.useLayoutEffect(() => {
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;

    div1.addEventListener('scroll', onScroll);
    div2.addEventListener('scroll', onScroll);

    return () => {
      div1.removeEventListener('scroll', onScroll);
      div2.removeEventListener('scroll', onScroll);
    };
  }, []);

  const content = Array.from({ length: 100 }, (_, i) => (
    <p key={i}>Line {i + 1}</p>
  ));

  return (
    <div style={{ display: 'flex' }}>
      <div
        ref={div1Ref}
        style={{ overflowY: 'scroll', height: '200px', width: '50%' }}
      >
        {content}
      </div>
      <div
        ref={div2Ref}
        style={{ overflowY: 'scroll', height: '200px', width: '50%' }}
      >
        {content}
      </div>
    </div>
  );
}

render(<SyncedScroll />);
`,
      exerciseCode: `function SyncedScroll() {
  // Create refs for both elements
  // Synchronize scroll positions

  return (
    <div>
      {/* Two scrollable elements */}
    </div>
  );
}

render(<SyncedScroll />);

`,
    },
  ],

  useDebugValue: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Simple Debug Value",
      exerciseDescription:
        "Use useDebugValue to display a custom label in React DevTools.",
      exerciseTasks: [
        "Create a custom hook",
        "Use useDebugValue inside the custom hook",
        "Observe the custom label in React DevTools",
      ],
      workingCode: `
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = React.useState(null);

  React.useDebugValue(isOnline ? 'Online' : 'Offline');

  // Imagine some logic to determine if friend is online
  React.useEffect(() => {
    // Mocking friend status update
    const timeout = setTimeout(() => {
      setIsOnline(Math.random() > 0.5);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [friendID]);

  return isOnline;
}

function FriendComponent({ friendID }) {
  const isOnline = useFriendStatus(friendID);

  return <div>{isOnline === null ? 'Loading...' : isOnline ? 'Friend is online' : 'Friend is offline'}</div>;
}

render(<FriendComponent friendID={1} />);
`,
      exerciseCode: `function useFriendStatus(friendID) {
  // Initialize 'isOnline' state
  // Use useDebugValue to label status

  return isOnline;
}

function FriendComponent({ friendID }) {
  // Use 'useFriendStatus' hook

  return (
    <div>
      {/* Display online status */}
    </div>
  );
}

render(<FriendComponent friendID={1} />);

`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Formatting Debug Value",
      exerciseDescription:
        "Use useDebugValue with a formatter function to display complex debug information.",
      exerciseTasks: [
        "Create a custom hook that returns multiple pieces of state",
        "Use useDebugValue with a formatter function",
        "Display formatted debug information in React DevTools",
      ],
      workingCode: `
function useFormInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setIsDirty] = React.useState(false);

  React.useDebugValue({ value, isDirty }, ({ value, isDirty }) => {
    return isDirty ? \`Dirty: \${value}\` : \`Pristine: \${value}\`;
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsDirty(true);
  };

  return { value, onChange: handleChange };
}

function InputComponent() {
  const nameInput = useFormInput('');

  return <input {...nameInput} placeholder="Enter your name" />;
}

render(<InputComponent />);
`,
      exerciseCode: `function useFormInput(initialValue) {
  // Initialize 'value' and 'isDirty' state
  // Use useDebugValue with formatter

  return { value, onChange: handleChange };
}

function InputComponent() {
  // Use 'useFormInput' hook

  return (
    <div>
      {/* Input field */}
    </div>
  );
}

render(<InputComponent />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Conditional Debug Value",
      exerciseDescription:
        "Use useDebugValue to conditionally format debug information based on React DevTools settings.",
      exerciseTasks: [
        "Create a custom hook that uses useDebugValue",
        "Use the second argument of useDebugValue to avoid unnecessary calculations",
        "Verify that the formatter function is only called when necessary",
      ],
      workingCode: `
function useFetchData(url) {
  const [data, setData] = React.useState(null);

  React.useDebugValue(url, (u) => {
    // This formatter function is only called when DevTools requests it
    return \`Fetched URL: \${u}\`;
  });

  React.useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (isMounted) setData(json);
      });
    return () => { isMounted = false; };
  }, [url]);

  return data;
}

function DataComponent({ url }) {
  const data = useFetchData(url);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

render(<DataComponent url="https://jsonplaceholder.typicode.com/todos/1" />);
`,
      exerciseCode: `function useFetchData(url) {
  // Initialize 'data' state
  // Use useDebugValue with formatter

  return data;
}

function DataComponent({ url }) {
  // Use 'useFetchData' hook

  return (
    <div>
      {/* Display data or loading message */}
    </div>
  );
}

render(<DataComponent url="https://example.com/data" />);
`,
    },
  ],

  useImperativeHandle: [
    // Easy Exercise
    {
      exerciseNumber: 1,
      exerciseName: "Exercise 1: Forwarding Ref with Custom Methods",
      exerciseDescription:
        "Use useImperativeHandle to expose a custom method from a child component to the parent.",
      exerciseTasks: [
        "Create a child component that uses forwardRef",
        "Use useImperativeHandle to expose a 'focus' method",
        "Parent component uses a ref to call the 'focus' method on the child component",
      ],
      workingCode: `
function CustomInput(props, ref) {
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} />;
}

const ForwardedCustomInput = React.forwardRef(CustomInput);

function ParentComponent() {
  const inputRef = React.useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ForwardedCustomInput ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

render(<ParentComponent />);
`,
      exerciseCode: `function CustomInput(props, ref) {
  // Expose 'focus' method

  return (
    <div>
      {/* Input with internal ref */}
    </div>
  );
}

const ForwardedCustomInput = React.forwardRef(CustomInput);

function ParentComponent() {
  // Use ref to call 'focus' method

  return (
    <div>
      {/* CustomInput and control button */}
    </div>
  );
}

render(<ParentComponent />);

`,
    },
    // Medium Exercise
    {
      exerciseNumber: 2,
      exerciseName: "Exercise 2: Custom Scroll Component",
      exerciseDescription:
        "Use useImperativeHandle to expose a scrollToTop method from a custom scrollable component.",
      exerciseTasks: [
        "Create a ScrollableList component that renders a list of items",
        "Use useImperativeHandle to expose a 'scrollToTop' method",
        "Parent component uses a ref to call 'scrollToTop' on ScrollableList",
        "Test the functionality by adding a button to scroll to the top",
      ],
      workingCode: `
function ScrollableList(props, ref) {
  const listRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      listRef.current.scrollTop = 0;
    },
  }));

  const items = Array.from({ length: 100 }, (_, i) => \`Item \${i + 1}\`);

  return (
    <div
      ref={listRef}
      style={{ height: '200px', overflowY: 'scroll', border: '1px solid black' }}
    >
      {items.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  );
}

const ForwardedScrollableList = React.forwardRef(ScrollableList);

function App() {
  const listRef = React.useRef();

  const scrollToTop = () => {
    listRef.current.scrollToTop();
  };

  return (
    <div>
      <ForwardedScrollableList ref={listRef} />
      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
}

render(<App />);
`,
      exerciseCode: `function ScrollableList(props, ref) {
  // Expose 'scrollToTop' method

  return (
    <div>
      {/* Scrollable content */}
    </div>
  );
}

const ForwardedScrollableList = React.forwardRef(ScrollableList);

function App() {
  // Use ref to control ScrollableList

  return (
    <div>
      {/* ScrollableList and control button */}
    </div>
  );
}

render(<App />);

`,
    },
    // Hard Exercise
    {
      exerciseNumber: 3,
      exerciseName: "Exercise 3: Exposing Multiple Methods",
      exerciseDescription:
        "Use useImperativeHandle to expose multiple methods from a child component.",
      exerciseTasks: [
        "Create a VideoPlayer component that renders a video element",
        "Use useImperativeHandle to expose 'play', 'pause', and 'toggleFullscreen' methods",
        "Parent component uses a ref to control the video playback",
        "Add buttons in the parent component to test each method",
      ],
      workingCode: `
function VideoPlayer(props, ref) {
  const videoRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
    },
    pause: () => {
      videoRef.current.pause();
    },
    toggleFullscreen: () => {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
        videoRef.current.msRequestFullscreen();
      }
    },
  }));

  return (
    <video ref={videoRef} width="400" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}

const ForwardedVideoPlayer = React.forwardRef(VideoPlayer);

function App() {
  const videoRef = React.useRef();

  return (
    <div>
      <ForwardedVideoPlayer ref={videoRef} />
      <div>
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
        <button onClick={() => videoRef.current.toggleFullscreen()}>
          Fullscreen
        </button>
      </div>
    </div>
  );
}

render(<App />);
`,
      exerciseCode: `function VideoPlayer(props, ref) {
  // Expose 'play', 'pause', and 'toggleFullscreen' methods

  return (
    <div>
      {/* Video element */}
    </div>
  );
}

const ForwardedVideoPlayer = React.forwardRef(VideoPlayer);

function App() {
  // Use ref to control VideoPlayer

  return (
    <div>
      {/* VideoPlayer and control buttons */}
    </div>
  );
}

render(<App />);
`,
    },
  ],
};
