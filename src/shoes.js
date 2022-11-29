
function ShoeItem(props){
    return (<button className="shoe" onClick={() => {props.addToCart(props.item)}} >
        <img src={props.item.image} />
        <div display="flex"  flex-direction="row">
        <p> Name:{props.item.name} </p>
        <p> Year: {props.item.year} </p>
        <p> Model: {props.item.model}</p>
        <p> Price: ${props.item.price} </p>
        </div>
        <p> {props.item.description} </p>
        {/* <button onClick={() => {props.addToCart(props.item)}}></button> */}
    </button>)
}

export default ShoeItem;