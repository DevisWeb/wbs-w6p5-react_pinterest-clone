// Import style
import "./App.css";
// Import react modules
import { Switch, Route, Link } from "react-router-dom";
// Import views
import ViewPost from "./views/viewpost";
import ViewPostsAll from "./views/viewpostsall";
import ViewPostsBestRated from "./views/viewpostsbestrated";
import ViewUser from "./views/viewuser";
// Import components
import TopBar from "./components/topbar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
          <Switch>
            <Route path="/users/:id">
              <ViewUser />
            </Route>
            <Route path="/posts/:id">
              <ViewPost />
            </Route>
            <Route path="/best_rated">
              <ViewPostsBestRated />
            </Route>
            <Route path="/:search">
              <ViewPostsAll />
            </Route>
            <Route path="/">
              <ViewPostsAll />
            </Route>
          </Switch>
      </div>
    </div>
  )
}

export default App;
