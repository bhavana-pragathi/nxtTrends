import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let count = 0
      cartList.forEach(eachItem => {
        count += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div className="cart-summary-div">
            <h1 className="total-head">
              Order Total: <span className="total-span">Rs: {count}/- </span>
            </h1>
            <p className="total-para">{cartList.length} items in the cart</p>
            <button className="checkout-button" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
