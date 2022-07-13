import React from 'react'
import { popular } from '../../data'
import { Product } from './Product'
import styled from 'styled-components'
const Container  = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-between;
padding: 20px;

`;

export const Products = () => {
  

  return (
    <Container>
        {
       popular.map((item)  => 
        (
       <Product item = {item}  key = {item.id} />

        )
        )   

        }
    </Container>
  )
};
