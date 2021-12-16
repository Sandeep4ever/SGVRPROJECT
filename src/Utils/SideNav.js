import React from 'react';
import styled from 'styled-components';
import img from '../Assets/Images/Images';
import { NavLink } from 'react-router-dom';


const MainNavContainer = styled.div`
  width: 222px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
background-color: #D8AE25;
`;
const Logo = styled.header`
display: flex;
align-items: center;
margin-top: 29px;
padding-left: 36px;
img{
  border-radius: 50%;
}
span{
  font: normal normal bold 18px/24px Roboto;
  color: #ffffff;
  padding-left: 9px;
}
`;
const Contant = styled.section`
  margin-top: 55px;
  display: flex;
  flex-direction: column;

  div {
    width: 171px;
    height: 46px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
   border-radius: 8px;
   &:hover {
    background: #BF9D2C 0% 0% no-repeat padding-box;
    /* margin-left:13px; */
  }
  
  }
  
  a{
    text-decoration:none;
    color: #ffffff;
    margin-left: 36px;
    font: normal normal normal 16px/19px Rubik;
  &:active {
    color: red;
  }
  }

  
`;

const SideNav = () => {
    return (
        <>
        <MainNavContainer>
            <Logo>
              <img src={img.admin} alt="img" /><span>Admin Team</span>
            </Logo>
            <Contant>
                  <div>
                  <NavLink  className='navlink' to="/about">Dashboard</NavLink>
                  </div>
                  <div>
                  <NavLink to="/matrimonylist">Matrimony</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about">B2B</NavLink>
                  </div>
                  <div>
                  <NavLink to="/onbordinglist">Jewellery</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about">Social Media</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about">Career and talent</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about">Community</NavLink>
                  </div>
                  <div>
                  <NavLink to="/lastnamelist">Last Name List</NavLink>
                  </div>
                  <div>
                  <NavLink to="/postlist">Add Post</NavLink>
                  </div>
                  <div>
                  <NavLink to="/paymentstatus">Payment</NavLink>
                  </div>
                  <div>
                  <NavLink to="/postlist">Subscription Plan</NavLink>
                  </div>
            </Contant>        
      </MainNavContainer>
      {/* </ForColumn> */}
      </>
    )
}

export default SideNav
