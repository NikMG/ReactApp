import {Header, Body} from '.';
import React from 'react';

export default function Cart(props){
    const [shipPrice, setShipPrice] = React.useState(23.80);
    const [grandPrice, setGrandPrice] = React.useState(23.80);
    const [visible, setVisible] = React.useState(true);

    const Alert = () =>{
        if(grandPrice > 23.8){
            setVisible(!visible);
            alert('Your order has been submitted successfully');
        }
    }
    return(
        <div className="cart">
            <Header Price={grandPrice} setVisible={setVisible} visible={visible} Alert={Alert}/> 
            <Body shipPrice={shipPrice} setShipPrice={setShipPrice} grandPrice={grandPrice} setGrandPrice={setGrandPrice} visible={visible} setVisible={setVisible} Alert={Alert}/>
        </div>
    );
}

