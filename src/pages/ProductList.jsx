import React from 'react'
import { Announcement } from './components/Announcement'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { Products } from './components/Products'
import styled from 'styled-components'

const Container = styled.div``;
const Title = styled.h1`
margin-left: 20px;
`;
const FilterContainer = styled.div`
display:flex;
margin: 20px;
justify-content:space-between;
`;
const Filter = styled.div`
display:flex;
align-items:center;

`;
const FilterText = styled.h3`
margin-right: 8px;`;
const Select = styled.select`
margin-right:10px;
background-color: white;
border: 1px solid lightgray;
padding:10px;
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
         <Navbar />
         <Announcement />
        
         <Title>Dresses </Title>
         <FilterContainer>
             <Filter>
           <FilterText>
              Filter Products:
           </FilterText>
           <Select>
               <Option disabled selected>Colour </Option>
               <Option>White</Option>
               <Option>Black </Option>
               <Option>Red</Option>
               <Option>Blue</Option>
               <Option>Green </Option>
               <Option>Yellow</Option>
           </Select>

           <Select>
               <Option disabled selected>Size</Option>
               <Option>XS</Option>
               <Option>S</Option>
               <Option>M</Option>
               <Option>L</Option>
               <Option>XL</Option>
               <Option>Free size</Option>
           </Select>
           </Filter>
           <Filter>
           <FilterText>
              Sort Products:
           </FilterText>
           <Select>
               <Option>Newest</Option>
               <Option>Popular</Option>
               <Option selected>Relevant</Option>
               <Option>Price low to high</Option>
               <Option>price high to low</Option>
               
           </Select>

          
           </Filter>


         </FilterContainer>
         <Products />
         <Newsletter />
         <Footer />

    </Container>
  )
}
