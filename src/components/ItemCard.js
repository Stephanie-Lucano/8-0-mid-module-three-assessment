import formatPrice from "../helpers/formatPrice";

const ItemCard = (props) => {
    const { name, price, description, img } = props.item

    return (
        <div className="item-container">
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <button
                onClick={() => props.handleAddToCartClick(props.item)}
            >
                Add To Cart
            </button>
            <div className="item-image">
                <img src={img} alt={name}/>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ItemCard;