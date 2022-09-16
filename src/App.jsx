import React from "react";
import ProductList from "./Components/ProductList";
import PureComp from "./Components/PureComponent";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <h1>Higher Order Components</h1>
        <p>
          Higher Order Function is a function which takes a wrapped Component as
          an input argument and returns a new enhanced Component.
          <br />
          Higher-Order Components are not part of the React API. They are the
          pattern that emerges from React's compositional nature. <br />
          The component transforms props into UI, and a higher-order component
          converts a component into another component. <br />
          The examples of HOCs are Redux's connect and Relay's createContainer.
          <br />
          However, they have to render some UI. In such a case, React hooks seem
          to be a perfect mechanism for code reuse. Hence, HOCs are inconvenient
          when you want to share some non-visual logic. In such a case, React
          hooks seem to be a perfect mechanism for code reuse.
          <br />
        </p>
        <ProductList />
        <h1>Pure Components</h1>
        <p>
          A React component is considered pure if it renders the same output for
          the same state and props. For this type of class component, React
          provides the PureComponent base class. Class components that extend
          the React.
          <br />
          PureComponent Is Primarily Used for Performance Optimization. <br />{" "}
          As outlined in the React docs: If your React component's render()
          function renders the same result given the same props and state, you
          can use React. PureComponent for a performance boost in some cases.
        </p>
        <PureComp />
      </div>
    </>
  );
}
export default App;
