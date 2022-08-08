//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Ejemplo títutlo para un ítem"}/>
      <ItemDetailContainer />
    </>

    /*<>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> 
        </header>
      </div>
    </>*/
  );
}



export default App;
