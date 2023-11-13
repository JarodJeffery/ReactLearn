export default function Inputs({ name, initialValue , inputId, onHandleChange }){
    return(
        <p>
            <label>{name}</label>
            <input type="number" value={initialValue} required onChange={(event) => onHandleChange(event.target.value, inputId)}/>
        </p>
    );
}