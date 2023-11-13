import logo from '../../images/investment-calculator.png';

export default function Header(){
    return (
        <header id='header'>
            <img src={logo} alt="Missing Logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
}