import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatsPage from "./pages/ChatsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/chats" component={ChatsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
