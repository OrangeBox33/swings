import { useState } from "react";
import { PageController } from "./Components/PageController";
import "./app.css";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="myClassname">
        <button onClick={() => setPage(1)}>Page1</button>
        <button onClick={() => setPage(2)}>page2</button>
        <button onClick={() => setPage(3)}>page3</button>
      </div>
      <div>
        <PageController page={page} />
      </div>
    </>
  );
}

export default App;
