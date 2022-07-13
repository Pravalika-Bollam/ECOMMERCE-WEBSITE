
import { Badge } from '@material-ui/core';
import { Search,  ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
color: #000;



`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
align-items: center;


`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;

`;
const Language = styled.span`
font-weight: bold;

`;
const SearchContainer = styled.div`
display: flex;
border: 1px solid grey;
margin: 15px;
padding: 5px 10px;
border-radius: 10px;

`;
const Input = styled.input`
border: none;
`;


const Center = styled.div`
flex:1;
text-align: center;





`;
const Icon = styled.h1`
font-weight:bolder;
`;
const Right = styled.div`
flex:1;
display: flex;
justify-content: space-evenly;


`;
const  Register= styled.div``;
const Signin = styled.div``;
const Cart= styled.div``;



export const Navbar = () => {
  return (
<Container>
    <Wrapper>
        <Left> 
            <Language>EN </Language>
            
            <SearchContainer>

            <Input/>
           <Search style= {{color: 'black', fontSize:17}}/>

                 </SearchContainer>
            
            
            </Left>
        <Center>
          <Icon> Alika</Icon>


        </Center>
        <Right>
            
           <Register> Register</Register> 
           <Signin>Signin</Signin>
           <Cart>
        <Badge badgeContent={4} color="primary">
             <ShoppingCartOutlined/>
             
        </Badge>
        </Cart>


            
            </Right>
    </Wrapper>
</Container>
  )
}
export default Navbar;
