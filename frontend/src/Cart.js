import React from 'react'
import {useCart} from 'react-use-cart'

function Cart() {
    const {isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart

} = useCart();
if(isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>
  return (
    <div className='container'>
        <div className="row ">
            <div className="col" >
                <h5>Cart:({totalUniqueItems}) total items: ({totalItems})</h5>
               <div className='table-responsive'>
               <table className='table table-light table-hover m-0'>
                   <tbody>
                   {items.map((item,index)=>{
                        return(
                            <tr key={index}>
                            <td>
                                <img src={item.image} style={{height:"6rem"}}/>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>Quantity ({item.quantity})</td>
                            <td>
                                <button className='btn btn-inf0 ms-2'
                                onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                <button className='btn btn-inf0 ms-2'
                                onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                <button className='btn btn-danger ms-2'
                                onClick={()=>removeItem(item.id)}>Remove Item</button>
                            </td>
                        </tr>
                        )
                    })}

                   </tbody>
                </table>
               </div>
            </div>
            <div className='col-10 col-md-10 '>
                <h3>Total Price: Rs.{cartTotal}</h3>
            </div>
            <div className='col-10 col-md-10'>
                <button className='btn btn-danger m-2'
                onClick={()=>emptyCart()}>Clear Cart</button>
                <button className='btn btn-primary'>Buy Now</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cart