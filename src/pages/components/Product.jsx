
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
display:flex;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color:rgba(0 ,0 ,0 ,0.2);
opacity:0;
align-items:center;
justify-content:center;


`;


const Container = styled.div`
flex:1;
min-width: 300px;
height: 500px;
margin:5px;
display:flex;
position:relative;
align-items:center;
justify-content:center;

&:hover ${Info}
{
  opacity:1;
  transition:all 0.5 ease;
}


`;
const Circle = styled.div`

`;
const Image = styled.img`
height: 70%;
z-index:2;

`;

const  Icon = styled.div`
width:40px;
height:40px;
background-color: white;
border-radius:50%;
margin:4px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
&:hover
{
  opacity:0.5;
  transform:scale(1.1);
  
}
z-index:3;


`;



export const Product = ({item}) => {
    
  return (
    <Container>
     <Circle />
      <Image src = {item.img}  alt = "hello"/>
      <Info>
         <Icon>
           <ShoppingCartOutlined />
         </Icon> 

         <Icon>
            <SearchOutlined />
          </Icon>

          <Icon>
              <FavoriteBorderOutlined />
           </Icon>
         
      </Info>

    </Container>
  )
};
