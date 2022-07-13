import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'
import { sliderItems } from '../../data';
import { useState } from 'react';

const Container = styled.div`

width:100%;
height: 100vh;
position:relative;
display:flex;
overflow:hidden;



`;
const Arrow = styled.div`
width:50px;
height:50px;
border-radius: 50%;
position: absolute;
top:0;
bottom:0;
margin:auto;
display:flex;
align-items:center;
justify-content: center;
left: ${(props) => props.direction==="left" && "10px"};
right: ${(props) => props.direction==="right" && "10px"};
cursor: pointer;
opacity: 0.5;


`;
const Wrapper = styled.div`
display: flex;
height:100%;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
display:flex;
align-items: center;
background-color:${(props) => props.bg};
width: 100vw;
height: 100vh;

`;
const ImgContainer = styled.div`
flex: 1;
height: 100%;


`;
const Image = styled.img`
height: 80%;

`;
const InfoContainer = styled.div`
flex : 1;
letter-spacing:3px;
padding: 50px;
`;
const Title = styled.h1`
font-size: 70px;

`;
const Desc = styled.p`
font-size: 20px;
font-weight: 500;
margin: 30px 0px;

`;
const Button = styled.button`
padding: 10px 30px;
margin: 50px;
cursor:pointer;
background-color: transparent;
border-radius: 10px;


`;





export const Slider = () => {

  const[slideIndex, setSlideIndex] = useState(0);

   const handleClick = (direction)=>
    {
  
      if(direction==="left")
        {
          setSlideIndex(slideIndex>0?slideIndex-1:2);
        }
      if(direction==="right")

         {
            setSlideIndex(slideIndex<2? slideIndex+1:0);
         }
    };

  return (
    <Container>
        <Wrapper slideIndex = {slideIndex}> 
          {
        sliderItems.map((item) => (
          <Slide bg ={item.bg} key = {item.id} >
           
            
              <ImgContainer >
              <Image src ={item.img}/>
              </ImgContainer>
              <InfoContainer>

              <Title>{item.title}</Title>
              <Desc>{item.description}</Desc>
              <Button>SHOP </Button>
              </InfoContainer >
          </Slide>
        )
        )
          }
         
  </Wrapper>
<Arrow direction = "left" onClick={()=>handleClick("left")}>
<ArrowLeftOutlined />
</Arrow>

<Arrow direction = "right" onClick={()=>handleClick("right")}>
    <ArrowRightOutlined />
</Arrow>
    </Container>
  )

        }