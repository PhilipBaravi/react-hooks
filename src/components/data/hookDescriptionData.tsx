export const hookDescriptionData = {
  useState: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useState</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Adds state to functional components. In traditional React components (class-based), state was managed using the <strong className="font-medium text-gray-800">this.state</strong> syntax. <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useState</code> brings the same functionality to functional components, allowing them to store and manage state.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useState</code> initializes a state variable with a default value. It returns an array with two values: the current state and a function to update it. When the update function is called, React re-renders the component to reflect the new state.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>The state persists across re-renders.</li>
            <li>The update function can be passed a new value or a function that takes the previous state and returns a new state.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Managing form inputs, checkboxes, or toggle buttons.</li>
            <li>Tracking dynamic data like counters, timers, or other user interactions.</li>
            <li>Storing UI states like modal visibility or selected tabs.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useState" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
        
      </div>
    </div>
  ),
  // End of useState

  // Start of useEffect
  useEffect: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useEffect</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Allows you to perform side effects in functional components. It replaces lifecycle methods like <strong className="font-medium text-gray-800">componentDidMount</strong>, <strong className="font-medium text-gray-800">componentDidUpdate</strong>, and <strong className="font-medium text-gray-800">componentWillUnmount</strong> in class components.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useEffect</code> takes two arguments: a function that contains the side-effect logic, and an optional array of dependencies. The effect runs after every render by default, but you can control when it runs by specifying dependencies.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Effects run after every render cycle by default.</li>
            <li>You can return a cleanup function from your effect to handle any necessary cleanup.</li>
            <li>The dependency array allows you to optimize when effects run.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Fetching data from an API.</li>
            <li>Setting up subscriptions or event listeners.</li>
            <li>Manually changing the DOM.</li>
            <li>Logging, analytics, or other side effects.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useEffect" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),
  // End of useEffect

  // Start of useContext
  useContext: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useContext</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Allows you to consume values from a React context without nesting consumer components. It provides a way to pass data through the component tree without having to pass props down manually at every level.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useContext</code> accepts a context object (created by <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">React.createContext</code>) and returns the current context value for that context.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>The component calling useContext will always re-render when the context value changes.</li>
            <li>It only lets you read the context, not provide it.</li>
            <li>You still need a Context.Provider somewhere in the parent tree.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Sharing global data (e.g., user authentication status, theme preferences).</li>
            <li>Avoiding prop drilling in deeply nested component structures.</li>
            <li>Managing application-wide state without using a state management library.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useContext" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div> ),

  useReducer: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useReducer</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Manages complex state logic in React components. It's an alternative to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useReducer</code> accepts a reducer function and an initial state. It returns the current state and a dispatch function to update it. The reducer function takes the current state and an action, and returns the new state.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Useful for managing state objects with multiple sub-values.</li>
            <li>The reducer function must be pure and should not produce side effects.</li>
            <li>Dispatch function can be passed down to child components instead of callbacks.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Managing form state with multiple fields.</li>
            <li>Implementing complex state transitions in game logic.</li>
            <li>Handling state in data-heavy applications or components.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useReducer" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),

  useCallback: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useCallback</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Returns a memoized version of a callback function. This optimization helps to prevent unnecessary re-renders of child components that depend on callback functions.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useCallback</code> takes two arguments: the callback function you want to memoize, and an array of dependencies. The memoized function only changes if one of the dependencies has changed.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</li>
            <li>Should be used in conjunction with React.memo for child components to see the full benefit.</li>
            <li>The dependency array works similarly to useEffect.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Optimizing performance in large applications with many child components.</li>
            <li>Preventing unnecessary re-renders in list items with callback props.</li>
            <li>Stabilizing callbacks used in useEffect dependencies.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useCallback" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),

  useMemo: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useMemo</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Memoizes the result of a computation. It's used to optimize performance by avoiding expensive calculations on every render.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useMemo</code> takes two arguments: a function that returns the computed value, and an array of dependencies. The memoized value only recomputes when one of the dependencies has changed.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Helps to avoid expensive calculations on every render.</li>
            <li>Should be used for computationally expensive operations.</li>
            <li>The dependency array works similarly to useEffect and useCallback.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Memoizing the results of complex calculations.</li>
            <li>Optimizing rendering of components that depend on large data sets.</li>
            <li>Preventing unnecessary re-computation in deeply nested component structures.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useMemo" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),

  useRef: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useRef</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Creates a mutable reference that persists across re-renders. It's commonly used to access DOM elements directly or to store mutable values that don't require re-renders when updated.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useRef</code> returns a mutable ref object with a <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">current</code> property. This object persists for the full lifetime of the component.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Changing the ref.current value doesn't cause a re-render.</li>
            <li>Useful for storing any mutable value, similar to instance properties in class components.</li>
            <li>When used with the ref attribute on an element, the ref.current will be set to the corresponding DOM node.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Accessing DOM elements or React components imperatively.</li>
            <li>Storing mutable values that don't require re-renders (e.g., timers, counters).</li>
            <li>Caching values across re-renders without triggering updates.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useRef" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),

  useLayoutEffect: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useLayoutEffect</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Performs side effects synchronously after all DOM mutations. It's similar to useEffect, but it fires synchronously before the browser has a chance to paint.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useLayoutEffect</code> works identically to useEffect, but it fires synchronously after all DOM mutations. This can be useful for reading layout from the DOM and then performing DOM mutations.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Runs synchronously immediately after React has performed all DOM mutations.</li>
            <li>Can potentially block visual updates, so use with caution.</li>
            <li>Prefer useEffect when possible to avoid blocking visual updates.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Measuring DOM nodes layout before the browser paints.</li>
            <li>Updating the DOM synchronously before the browser paints.</li>
            <li>Performing animations that require immediate DOM measurements.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useLayoutEffect" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),

  useDebugValue: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useDebugValue</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Displays a label for custom hooks in React DevTools. It's used to add labels to custom hooks for debugging purposes.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useDebugValue</code> accepts a value to display and an optional formatting function. It doesn't affect the behavior of your component; it's purely for debugging.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Only works in custom hooks.</li>
            <li>The formatting function is only called when the hooks are actually inspected.</li>
            <li>Should be used sparingly and only for information that's valuable for debugging.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Adding labels to custom hooks in complex applications.</li>
            <li>Providing additional context for hook values in React DevTools.</li>
            <li>Debugging and inspecting the internal state of custom hooks.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useDebugValue" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),

  useImperativeHandle: (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding useImperativeHandle</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Purpose:</h3>
          <p className="text-gray-600">
            Customizes the instance value that is exposed when using <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">ref</code> on a component. It allows parent components to access specific functions or properties of a child component.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">How it works:</h3>
          <p className="text-gray-600">
            <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">useImperativeHandle</code> takes three arguments: a ref object, a function that returns an object with the methods you want to expose, and an optional array of dependencies.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Details:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Should be used sparingly, as it breaks component encapsulation.</li>
            <li>Useful for exposing imperative methods to parent components.</li>
            <li>Often used in conjunction with <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded">forwardRef</code>.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Common Use Cases:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Exposing focus methods for input components.</li>
            <li>Allowing parent components to trigger animations in child components.</li>
            <li>Providing access to specific DOM elements or methods in complex components.</li>
          </ul>
        </section>
        <div className="mt-[30px]">
        <a href="https://react.dev/reference/react/useImperativeHandle" target="_blank" className="text-[1000] text-[1.5rem] hover:bg-lightGray underline">Learn More</a>
        </div>
      </div>
    </div>
  ),
};