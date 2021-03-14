import React from 'react'
import {
    ProductContainer, ProductHeding, ProductWrapper,ProductCart,ProductImg,Productinfo,ProductTitle,Productdesc,ProductPrice,ProductButton
} from './ProductElement'
const Product = ({heading, data}) => {
    return (
       <>
       <ProductContainer>
           <ProductHeding>Heading</ProductHeding>
           <ProductWrapper>
               {data.map((product,index)=>{
                   return(
                       <ProductCart key={index}>
                           <ProductImg src={product.img} alt={product.alt}/>
                           <Productinfo>
                               <ProductTitle>{product.name}</ProductTitle>
                               <Productdesc>{product.desc}</Productdesc>
                               <ProductPrice>{product.price}</ProductPrice>
                               <ProductButton>{product.button}</ProductButton>
                           </Productinfo>
                       </ProductCart>
                   )
               })}
           </ProductWrapper>
       </ProductContainer>
       </>
    )
}

export default Product
