import './App.css'

function App() {
  let cellsStyle = "text-white text-lg font-bold";
  cellsStyle += " hover:text-blue-500 hover:border hover:border-blue-500 "
  return (
      <div>
        <span className="text-3xl font-bold underline">
          this is text inside a span label with text-3xl font-bold underline
        </span>

        <h3 className={"mt-20 mb-4"}>and this is a 2x2 grid, made with one div
          containing 4 divs, and applying <pre>grid grid-cols-2</pre>
        </h3>
        <div className={"grid grid-cols-2 border border-blue-400 bg-blue-500 "}>
          <div className={"text-white text-lg font-bold"}>1-1</div>
          <div className={"text-white text-lg font-bold"}>1-2</div>
          <div className={"text-white text-lg font-bold"}>2-1</div>
          <div className={"text-white text-lg font-bold"}>2-2</div>
        </div>

        <h3 className={"mt-5"}>
          And this is a nice effect, achieved by using <pre style={{display: "inline"}}>hover</pre>-prefixed
          properties
        </h3>

        <div className={"grid grid-cols-2 border border-blue-400 bg-blue-500 hover:bg-white hover:border-0"}>
          <div className={cellsStyle}>1-1</div>
          <div className={cellsStyle}>1-2</div>
          <div className={cellsStyle}>2-1</div>
          <div className={cellsStyle}>2-2</div>
        </div>
      </div>
  )
}

export default App
