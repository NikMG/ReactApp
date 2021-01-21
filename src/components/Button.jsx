
 
   


export default function Button(props){
    let Text = props.text;
    return (
        <div>
        <button className="cart__body__product__info__main__qty-min" onClick={props.click}>{Text}</button>
        </div>
    );

         
}

