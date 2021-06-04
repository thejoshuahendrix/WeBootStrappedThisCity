import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/AppNavBar";
import { Provider } from "react-redux";
import store from "./store";
import AppNavBar from "./components/AppNavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavBar></AppNavBar>

          
            <Route path="/Posts" component={Posts} />
            <Route path="/" exact component={Home} />
          
        </div>
        </Router>
    </Provider>
    
  );
}

export default App;
