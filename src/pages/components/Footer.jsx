import React from 'react'
import styled from 'styled-components'
import {  Facebook, Instagram, Twitter,Pinterest, Room, Phone, Mail} from '@material-ui/icons';


const Container = styled.div`
margin: 30px;
display:flex;`;

const Left = styled.div`
flex:1;
margin-right:10px;`;

const Logo = styled.h1`
margin-bottom:20px;`;

const Info = styled.div`
display: flex;
align-items:center;`;

const Desc = styled.p`
letter-spacing:1.5px;`;

const SocialContainer = styled.div`
display:flex;
margin-top: 20px;`;

const SocialIcon = styled.div`
width: 40px;
height:40px;
border-radius:50%;
border:1px solid black;
display:flex;
align-items:center;
justify-content:center;
margin-right: 5px;
color:white;
background-color: #${(props) => props.color}`;

const Center = styled.div`
flex:1;
margin-right:10px;
display:flex;
flex-direction:column;
`;

const Title = styled.h3`
margin-bottom:20px;
`;

const List = styled.ul`
list-style:none;
padding:0px;
margin:0px;
display:flex;
flex-wrap:wrap;

`;

const ListItem = styled.li`
width:50%;
margin-bottom:5px;
`;

const Right = styled.div`
flex:1;`;

const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`;
const Payment = styled.img`
width:50%;
`;



export const Footer = () => {
  return (
    <Container> 
        <Left>
     <Logo> Alika </Logo>
     <Info>
     <Desc>Everyday is a fashion show and the world is the runway.  </Desc>
     
     </Info>
     <SocialContainer>

 <SocialIcon color="3B5999">
    <Facebook />
 </SocialIcon >
 <SocialIcon  color="E4405F">
    <Instagram />
 </SocialIcon>
 <SocialIcon color="55ACEE">
    <Twitter />
 </SocialIcon>
 <SocialIcon color="E60023">
    <Pinterest />
 </SocialIcon>
 </ SocialContainer>
 </Left>
 <Center>
<Title> Useful Links </Title>
<List>
    
    <ListItem>
       Home
    </ListItem>
    <ListItem>
        Cart
    </ListItem>
    <ListItem>
        Bags
    </ListItem>
      
    <ListItem>
    Footwear
    </ListItem>

    <ListItem>
    My Account
</ListItem>
<ListItem>
    My Wishlist
</ListItem>
<ListItem>
    Track Order
</ListItem>
<ListItem>
    Terms
</ListItem>

</List>

 </Center>
    
<Right>

     <Title> Contact</Title>

    <ContactItem> 
      <Room />Morena Link Road , Gwalior, Madhya Pradesh
    </ContactItem>
    <ContactItem> 
      <Phone /> +91 01 23 45 67 89
    </ContactItem>
    <ContactItem> 
      <Mail />bcs_2020021@iiitm.ac.in
    </ContactItem>

<Payment  src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
</Right>

    </Container>




  )
}
