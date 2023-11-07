import logo from '../../images/logo.svg';
import './header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
    const description = reactDescriptions[genRandomInt(2)];
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            React Essentials    
        </h1>
        <p>
            {description} components you will need for almost any app you are going to build!
        </p>
        </header>
    );
}