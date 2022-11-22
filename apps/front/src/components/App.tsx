// import './App.css'
import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './footer'
// import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'


function App() {

  const [inputValue, setInputValue] = useState()
  
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <Footer />
    </div> )
}

export default App
