export default function Total(props){
    return(
        <div className="cart__body__total">
                <div className="cart__body__total__ship">
                    <div className="cart__body__total__ship-title">SHIPPING</div>
                    <div className="cart__body__total__ship-price">${props.shipPrice}</div>
                </div>
                <div className="cart__body__total__amounts">
                        <div className="cart__body__total__amounts-title">CART TOTALS</div>
                    <div className="cart__body__total__amounts__subTotal">
                        <div className="cart__body__total__amounts__subTotal-title">Subtotal</div>
                        <div className="cart__body__total__amounts__subTotal-price">${props.Price}</div>
                    </div>
                    <hr className="cart__body__total__amounts-line" />
                    <div className="cart__body__total__amounts__grandTotal">
                        <div className="cart__body__total__amounts__grandTotal-title">Grand Total</div>
                        <div className="cart__body__total__amounts__grandTotal-price">${props.grandPrice}</div>
                    </div>
                    <button className="cart__body__total__amounts-btn" onClick={props.Alert}>Procced to checkout</button>
                </div>
            </div>
    );
}

