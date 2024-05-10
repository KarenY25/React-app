import "./card.css";

function Card(){
    const myInfo = {
        nombre: "Karen Yareli Pineda González",
        formacion: "Internacionalista",
    };
    return (
        <div className="cardP">
            <h2>{myInfo.nombre}</h2>
            <p>{myInfo.formacion}</p>
        </div>
    )
    
}

export default Card;