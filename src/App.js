import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'
import UsersContainer from './containers/UsersContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Login />
      <UsersContainer/>
      </header>
      
    </div>
  );
}

export default App;
