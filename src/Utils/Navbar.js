import React from 'react';
import styled from 'styled-components';
import img from '../Assets/Images/Images';
import { NavLink } from 'react-router-dom';


const MainNavContainer=styled.div`
width: 100%;
height: 80px;
box-shadow: 0px 0px 11px #0000000F;
display: flex;
align-items: center;
justify-content:space-between;
padding:0 27px 0 27px;
`
const FirstContainer =styled.div`
display: flex;
`
const Logo=styled.div`
img{
   width: 210px;
}
`
const Text=styled.div`
display: flex;
align-items: center;
a{
   margin-left: 83px;
   font: normal normal 500 16px/25px Poppins;
   /* font-family: 'Poppins', sans-serif; */
   /* font-size: 16px; */
   text-decoration: none;
   color: #000000;
   padding: 20px 0px;
   border-bottom: 3px solid transparent;
   &:hover{

      border-bottom: 4px solid #D4AF37;
   }
   &:active{
      border-bottom: 4px solid #D4AF37;
   }
}
`
const SecondContainer=styled.div`
 img{
   margin-right: 31px;
}

`

const Navbar = () => {
    return (
        <MainNavContainer>
           <FirstContainer>
              <Logo>
                 <img src={img.logo} alt='image'/>
              </Logo>
              <Text>
              <NavLink   to="/about"> Shop</NavLink>
              <NavLink   to="/about"> Vendor</NavLink>
              <NavLink   to="/about"> Worker</NavLink>
              </Text>
           </FirstContainer>

           <SecondContainer>
           <NavLink   to="/messages"><img src={img.chat} alt='chat'/></NavLink>
           <NavLink   to="/notification"><img src={img.Notifi} alt='image'/></NavLink>
           </SecondContainer>
        </MainNavContainer>
    )
}

export default Navbar
