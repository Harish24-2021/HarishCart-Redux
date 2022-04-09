import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductComponent = () => {

  const products = useSelector(state=>state.allProducts.products)

  // const{id,title}=products[0]

  const renderlist = products.map((product)=>{
    const{title,id,price,image,category} = product
    return (
    <div className="four wide column" key={id} >
      <Link to={`/product/${id}`}>
    <div className="ui link card"  >
      <div className="ui card" style={{height:"500px" ,display:"flex" , flexWrap:"wrap"}} >
    <div >
      <img src={image} alt={title} width={"250px"} height={"250px"}  />
    </div>
    <div className="content" style={{display:"flex", flexDirection:"column" ,flexWrap:"wrap"}} >
       <div className='header'>{title}</div>
      <div className='meta price'>${price}</div>
      <div className='meta' >{category}</div>
    {/* <div className="header">{title}</div> */}
    
    </div>
      </div>
    
    
    </div>
    
    </Link>
        </div>)
  })
  return (
    <>{renderlist}</>
  )
}

export default ProductComponent