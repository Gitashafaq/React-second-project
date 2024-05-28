import "./Card.css";
function Card(props){
    return(
    <>
        <div class="card">
            <div className="thumb">
            <img src={props.img} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
                <h5 class="card-title">{props.Name}</h5>
                <p class="card-text">{props.age}</p>
                 <p class="card-text">{props.City}</p>
            </div>
            </div>
    </>
    )
} 
export default Card;