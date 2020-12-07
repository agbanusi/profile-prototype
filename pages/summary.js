import React from 'react'
let head = ['Name', 'Category', 'Price', 'Quantity','Tax Percentage', 'Total']

export default function Summary({data}) {
    
    return (
        <div className='covered'>
            {data.restaurant?<div className='total'>
                <div className='top'>
                    <h1>{data.restaurant.name}</h1>
                    <h5>{data.restaurant.zipcode}</h5>
                    <span><h3>{data.restaurant.street}</h3><h3>{data.restaurant.city+", "+data.restaurant.state}</h3></span>
                </div>
                <div className='data'>
                    <h3>Orders for {data.user.name}</h3>
                    <h5>Order Id: {data.order_id}</h5>
                    <table>
                        <thead>
                            <tr>
                                {head.map(i=><th>{i}</th>)}
                            </tr>  
                        </thead>
                        <tbody>
                            {data.items.map(i=>(
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.category}</td>
                                    <td>{i.price+" "+ i.currency}</td>
                                    <td>{i.quantity}</td>
                                    <td>{i.tax_pct+" %"}</td>
                                    <td>{(i.price * i.quantity) + (i.tax_pct*i.price*i.quantity/100) + " " +i.currency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>:<></>}
        </div>
    )
}
