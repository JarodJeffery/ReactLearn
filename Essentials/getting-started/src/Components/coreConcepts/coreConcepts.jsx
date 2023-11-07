import './coreConcepts.css';

export default function CoreConcepts({image, title, description}){
    return (
      <li>
        <img className="img" src ={image} alt= {title}/>
        <h3>
          {title}
        </h3>
        <p>{description}</p>
      </li>
    );
}
  