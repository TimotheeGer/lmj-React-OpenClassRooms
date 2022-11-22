import '../styles/Cart.css'
import { useState } from 'react'

function Cart({cart, updateCart} : any) {
    
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce((acc : any, plantType : any) => acc + plantType.amount * plantType.price, 0)

    return  isOpen ?
    (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}> Fermer </button>
            <h2>Panier</h2>
            {
                cart.map(({name , price , amount, index} : any) => (
                    <div key={price++}>
                        {name} {price}€ x {amount}
                    </div>
                ))
            }
            <h3>Total : {total}€</h3>
            <button className='lmj-cart-toggle-button' onClick={() => updateCart([])}> Vider le pannier </button>
        </div>
    )
    :
    (
    	<div className='lmj-cart-closed'>
    		<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}> Ouvrir le Panier </button>
    	</div>
    )
}

export default Cart