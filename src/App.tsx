import logo from "./logo.svg";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1 className="App-header">
        React w/ Typescript App Builder ({process.env.NODE_ENV})
      </h1>
      <img src={logo} alt="react-typescript" className="App-logo" width="500px" />
      <p className="App-info">
        Start editing files in <strong>src</strong> folder to actually{" "}
        <em>START !!</em>
      </p>
    </div>
  );
};

export default App;
