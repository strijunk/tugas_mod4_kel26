import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./useState/Counter";
import Effect from "./useEffect/Index";
import Context from "./useContext/Index";
import Memo from "./useMemo/Index";

function App() {
    return (
        <Router>
            <div className="App-header">
                <nav className="NavBar">
                    <ul className="ul">
                        <li className="li">
                            <Link to="/">Use State</Link>
                        </li>
                        <li className="li">
                            <Link to="/effect"> Use Effect</Link>
                        </li>
                        <li className="li">
                            <Link to="/context"> Use Context</Link>
                        </li>
                        <li className="li">
                            <Link to="/memo"> Use Memo</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" exact element={<Counter />} />
                    <Route path="/effect" exact element={<Effect />} />
                    <Route path="/context" exact element={<Context />} />
                    <Route path="/memo" exact element={<Memo />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
