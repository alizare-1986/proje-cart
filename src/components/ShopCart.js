import React,{useContext} from 'react';
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';
import styles from "./ShopCart.module.css"


const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext)
    return (
        <div className={styles.container} >
            <div className={styles.cartContainer} >
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter  > 0 && <div className={styles.payments} >
                    <p><span>Total Items :</span> {state.itemsCounter} </p>
                    <p><span>Total payments :</span> {state.total} </p>
                    <div className={styles.buttonContainer} >
                    <button className={styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})} >check out</button>
                    <button className={styles.clear} onClick={()=> dispatch({type:"CLEAR"})} >Clear</button>
                    </div>
                    </div>
            }
               


            {
                state.checkout && <div className={styles.complete} >
                    <h3>check out successfully</h3>
                    <Link to="/products" >buy more</Link>
                </div>
            }

             {
                !state.checkout && state.itemsCounter && <div className={styles.complete} >
                    <h3>want to buy</h3>
                    <Link to="/products" >go to shop</Link>
                </div>
            }
           
        </div>
        
    
        
    )
};

export default ShopCart;