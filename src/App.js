import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'
import UsersContainer from './containers/UsersContainer'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <Router>
        <main>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Genus">Genus</a></li>
              <li><a href="/species">Species</a></li>
              <li><a href="/user/following">MyFish</a></li>
            </ul>
          </nav>
          <Route path="/" container={UsersContainer}></Route>
        </main>
      </Router> */}
      
      <Login />
      <UsersContainer/>
      </header>
      
    </div>
  );
}

export default App;
