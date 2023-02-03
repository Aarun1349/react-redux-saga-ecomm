import "./App.css";
import {addToCart,removeFromCart,clearCart} from "./redux/action";
import {getProductList,addProduct,removeProduct} from './redux/productAction'
import {useDispatch,useSelector} from 'react-redux'
function App() {
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.cartData)
  const data={
    id:1,
    name:'condom',
    price:'200₹'
  }
  return <div className="App">
    <div>
      <div>
        
    <button onClick={()=>{dispatch(addToCart(data))}}>Add To Cart</button>
      </div>
      <div>

    <button onClick={()=>{dispatch(removeFromCart(data))}}>Remove From Cart</button>
      </div>
      <div>

    <button onClick={()=>{dispatch(clearCart(data))}}>Clear Cart</button>
      </div>
      <div>

    <button onClick={()=>{dispatch(getProductList())}}>Get Products</button>
      </div>
      <div><h2>{product.length}</h2></div>
    </div>
  </div>;
}

export default App;
