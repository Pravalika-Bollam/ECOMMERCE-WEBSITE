import React from 'react'
import styled from 'styled-components';
import { categories } from '../../data'
const Wrapper = styled.div`
display: flex;`;

const Container = styled.div`
display:flex;
flex:1;
flex-direction:column;
position: relative;
height: 70vh;
margin: 15px 5px ;
&:hover
{
   transform :scale(1.1);
   transition: all 0.5s ease;
   z-index:2;
}


`;
const Info = styled.div`
display:flex;
flex-direction:column;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
align-items:center;
justify-content:center;`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;`

const Title = styled.h1`
margin: 10px;
color:white;`;

const Button = styled.button`
padding: 10px 20px;
cursor:pointer;
background-color:transparent;
border-radius:10px;
background-color:white;

`;


export const Categoryitem = () => {
  return (

  <Wrapper>
  {
  categories.map((item) => (
    <Container key = {item.id}>
    <Image src = {item.img}/>
    <Info>
    <Title > {item.title}</Title>
    <Button>Shop</Button>
    </Info>
    </Container>
  )
  )
}
    </Wrapper>

  )
}
