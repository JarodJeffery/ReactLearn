import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        React Essentials    
      </h1>
      <p>
        Fundimental components you will need for almost any app you are going to build!!!
      </p>
    </header>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>
          Time to start!!!
        </h2>
      </main>
    </div>
  );
}

export default App;
