import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import BrowseShelves from "./BrowseShelves";
import MyShelves from "./MyShelves"
import ShelfPage from "./ShelfPage";

function App() {
  const [bookshelves, setBookshelves] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5555/bookshelves")
      .then((r) => r.json())
      .then((bookshelves) =>setBookshelves(bookshelves));
  }, []);

  return(
     <Router>
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="body-content">
          <Switch>
            <Route path="/my-shelves">
              <MyShelves bookshelves={bookshelves} />
            </Route>
            <Route exact path="/browse">
              <BrowseShelves bookshelves={bookshelves} />
            </Route>
            <Route path="/browse/:id">
              <ShelfPage />
            </Route>
          </Switch>
        </div>
    </Router> 
  );
}

export default App;


// NavBar, Login, BrowseShelves, MyShelves