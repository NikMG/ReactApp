import x from '../images/x-img.png';
import Headphones from '../images/headphones.png';
import edit from '../images/edit-img.png';
import {Button} from '.';
import React from 'react';
export default function Product(props){
    const [Count, setCount] = React.useState(0.0);
    


    const onClickMinus = () => {
        if(Count === 0){
            setCount(0);
            props.setPrice(0.0);
        }else if(Count > 0){
            setCount((num) => num - 1);
        }
    }

    const onClickPlus = () => {
        setCount((num) => num + 1);
    }

    const onClickUpdate = () => {
        let price = 11.9 * Count;
        props.setPrice(price); 
        if(price >= 100){
            props.setShipPrice(0.0);
            props.setGrandPrice((price+props.shipPrice)); 
        }else{
            props.setShipPrice(23.8);
            props.setGrandPrice((price+props.shipPrice));
        }
    }
    return(
        <div className="cart__body__product">
                <ul className="cart__body__product__titles">
                    <li className="cart__body__product__titles-name">Product Name</li>
                    <li className="cart__body__product__titles-item">Unit Price</li>
                    <li className="cart__body__product__titles-item">Qty</li>
                </ul>
                <hr className="cart__body__product-line" />
                <div className="cart__body__product__info">
                    <button className="cart__body__product__info__x"><img src={x} alt="x" className="cart__body__product__info__x-image" onClick={props.hide}/></button>
                    <img src={Headphones} alt="Product" className="cart__body__product__info-image" />
                    <ul className="cart__body__product__info__main">
                        <li className="cart__body__product__info__main-name">Headphones</li>
                        <li className="cart__body__product__info__main-price">${props.Price}</li>
                        <li className="cart__body__product__info__main__qty">
                            <Button text="-" click={onClickMinus}/>
                            <div className="cart__body__product__info__main__qty-amount">{Count}</div>
                            <Button text="+" click={onClickPlus}/>
                            <button className="cart__body__product__info__main__qty__edit" onClick={onClickUpdate}><img src={edit} alt="edit" className="cart__body__product__info__main__qty__edit-btn" /></button>
                        </li>
                    </ul>
                </div>
                <hr className="cart__body__product-line" />
                <button className="cart__body__product-total" onClick={onClickUpdate}>Update Shopping Cart</button>    
            </div>
    );
}
