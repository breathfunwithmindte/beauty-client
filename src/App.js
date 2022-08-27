import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/index.css';
import './styles/lib.css';
import pages from "./pages";


function App() {

  return (
    <div className="App"> 
      <Routes>
        {pages.map((page, key) => {
          return (
            <Route path={page.path} element={<page.Component />} key={key} />
          )
        })}
      </Routes>
    </div>
  );
}

export default App;
