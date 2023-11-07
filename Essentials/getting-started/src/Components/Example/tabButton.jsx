import './examples.css';

export default function TabButton(props){
    return (
        <li><button>{props.children}</button></li>
    );
}