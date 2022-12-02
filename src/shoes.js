
function ShoeItem(props){
    return (<div className="card">
        <div className= "card-body">
        <img src={props.item.image} />
        <h5>{props.item.name}</h5>
        <p>{props.item.description}</p>
        <p> Year: {props.item.year} </p>
        <p> Price: ${props.item.price} </p>
        {/* <button type="button" class="btn btn-primary">Primary</button> */}
        <button onClick={() => {props.addToCart(props.item)}}>Add to Cart</button>
        <button onClick={() => {props.removeFromCart(props.item)}}>Remove From Cart</button>
        </div>

       
        {/* <button onClick={() => {props.addToCart(props.item)}}></button> */}
    </div>)
}

export default ShoeItem;