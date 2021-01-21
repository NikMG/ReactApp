export default function Header(props){
    

    return(
        <div className="cart__header">
            <div className="cart__header-title">
                Shopping Cart 
            </div>
            <button className="cart__header-button" onClick={props.Alert}>
                Procced to checkout
            </button>
        </div>
    );
}

