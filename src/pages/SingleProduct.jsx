import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Announcement } from './components/Announcement'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { Newsletter } from './components/Newsletter'

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;
const FilterContainer = styled.div``;
const Filter  = styled.div``;
const FilterText = styled.span``;
const FilterColor = styled.span``;
const Select = styled.select``;
const Option = styled.option;
const AddCart = styled.div``;
const QuantityContainer = styled.div``;
const Quantity = styled.div``;
const Button = styled.button``;


 const SingleProduct = () => {
  return (
   <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
          <ImgContainer>
          <Image src = "https://static.zara.net/photos///2022/V/0/1/p/4424/154/503/2/w/1126/4424154503_1_1_1.jpg?ts=1643365888110" />
          </ImgContainer>
          <InfoContainer>
              <Title> V-NECK BASIC T-SHIRT </Title>
              <Desc>Caring for your clothes is caring for the environment.
Lower temperature washes and delicate spin cycles are gentler on garments and help to protect the colour, shape and structure of the fabric. Furthermore, they reduce the amount of energy used in care processes.</Desc>
              <Price> $10</Price>
              <FilterContainer>
                  <Filter>
                  <FilterText>Color</FilterText>
                  <FilterColor color= "black"> </FilterColor>
                  <FilterColor color= "Green"> </FilterColor>
                  <FilterColor color= "white"> </FilterColor>
                  </Filter>
                  <Filter>
                  <Select>
                      <FilterText>Size</FilterText>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                      <Option>free size</Option>
                  </Select>
                  </Filter>
              </FilterContainer>
              <AddCart>
                  <QuantityContainer>
                  <Remove />
                  <Quantity> </Quantity>
                  <Add />
                  </QuantityContainer>
                  <Button> Add To Cart </Button> 
              </AddCart>
          </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />

   </Container>
  )
}

 
export default SingleProduct;
