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
padding-left: 30px;
img{
  border-radius: 50%;
}
span{
  font: normal normal 500 16px/24px Roboto;
  color: #ffffff;
  padding-left: 9px;
}
`

const Contant = styled.section`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  div {
    width: 171px;
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   border-radius: 8px;
   &:hover {
    background: #BF9D2C 0% 0% no-repeat padding-box;
  }
  }
  a{
    text-decoration:none;
    width:100%;
    height:100%;
    color: #ffffff;
    padding-left: 30px;
    border-radius: 8px;
    font: normal normal normal 16px/19px Rubik;
  }
`

const SideNav = () => {
    return (
        <>
        <MainNavContainer>
            <Logo>
              <img src={img.admin} alt="img" /><span>Admin Team</span>
            </Logo>
            <Contant>
                  <div >
                  <NavLink  className='navlink' to="/about" 
                   style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Dashboard</NavLink>
                  </div>
                 <div>
                  <NavLink to="/matrimonylist" 
                    style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Matrimony</NavLink>
                  </div>
                  <div >
                  <NavLink to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >B2B</NavLink>
                  </div>
                  <div>
                  <NavLink to="/onbordinglist" 
                   style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Jewellery</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Social Media</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Career and talent</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Community</NavLink>
                  </div>
                  <div>
                  <NavLink to="/lastnamelist"
                   style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Last Name List</NavLink>
                  </div>
                  <div>
                  <NavLink to="/postlist"
                   style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Add Post</NavLink>
                  </div>
                  <div>
                  <NavLink to="/paymentstatus"
                   style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                     background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Payment</NavLink>
                  </div>
                  <div>
                  <NavLink to="/postlist"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : '#fff',
                    background: isActive && '#BF9D2C',
                    lineHeight:'46px',
                  })}
                  >Subscription Plan</NavLink>
                  </div>
            </Contant>        
      </MainNavContainer>
      {/* </ForColumn> */}
      </>
    )
}

export default SideNav
