import { BrowserRouter as Router,Route, Link, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path= "/movie/:id" element={<Detail />}/>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/hello" element={<h1>hello</h1>}/>
      </Routes>
  </Router>
}

export default App;
