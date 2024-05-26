import React from 'react'
import './RTable.css'

const RTable = () => {
  return (
    <div className='table'>
        <h1>Restricted Websites</h1>
        <div className="table-format">
            <p></p>
            <p>Website Name</p>
            <p>Remove Restriction</p>
        </div>
        <div className='listproduct-allproducts'>
            <hr />
            {/* {allproducts.map((product,index)=>{
                return <><div key={index} className="listproduct-format-main listproduct-format">
                    <img alt="" className="listproduct-product-icon" />
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
                </div>
                <hr />
                </>
            })} */}
        </div>
    </div>
  )
}

export default RTable