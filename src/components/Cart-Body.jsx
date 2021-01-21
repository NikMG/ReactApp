import {Product, Total} from '.';
import React from 'react';
export default function Body(props){
    const [Price, setPrice] = React.useState(0.0);
    const Hide = () =>{
        props.setVisible(!props.visible);
    }
    if(props.visible === true){
    return(
        <div className="cart__body">
            <Product shipPrice={props.shipPrice} setShipPrice={props.setShipPrice} grandPrice={props.grandPrice} setGrandPrice={props.setGrandPrice} hide={Hide} Price={Price} setPrice={setPrice}/>
            <Total shipPrice={props.shipPrice} grandPrice={props.grandPrice} Price={Price} Alert={props.Alert}/>
        </div>
    );
    }else{
        return(
            <div className="cart__body">
                <Total Price={props.Price} grandPrice={props.grandPrice}/>
            </div>
        );
    }
}

