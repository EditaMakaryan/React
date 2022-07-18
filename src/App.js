import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import "./Header/header.css"
import Sidebar from "./Sidebar/sidebar.js"
import "./Sidebar/sidebar.css"
import Main from "./Main/main.js"
import "./Main/main.css"

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
      <Sidebar />
      <Main />
    </div>
    </div>
  );
}

export default App;

