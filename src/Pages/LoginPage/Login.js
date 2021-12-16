import React from 'react';
import styled from 'styled-components';
import img from '../../Assets/Images/Images';
import { NavLink } from 'react-router-dom';

const MainLoginContainer=styled.div`
width: 100%;
height:100%;
padding:36px 48px;
background-Image:url(${img.backgroundImg});
background-size:cover;
background-position:center;
background-repeat: no-repeat;

`
const Logo=styled.div`

img{
    width: 282px;
height:78px;
}
`
const LoginContainer=styled.div`
width: 100%;
display: flex;
align-items:center;
justify-content:center;
margin-bottom:113px;
`
const Adjust=styled.h4`
width: 466px;
height: 541px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 10px #0000000D;
padding:80px 62px 104px 62px;

`
const Header=styled.div`
h4{
    font: normal normal bold 26px/30px Product Sans;
color: #B98C13;
}
p{
    font: normal normal normal 16px/30px Product Sans;
color: #B98C13;
}
`
const InputField=styled.div`
input{
    width: 339px;
height: 48px;
background: #F0F0F0 0% 0% no-repeat padding-box;
border: 1px solid #E6E6E6;
border-radius: 4px;
margin-top:30px;
}
div{
    margin-top:14px;
    float: right;
    a{
        font: normal normal normal 14px/19px Product Sans;
color: #B98C13;
    }
}
button{
    width: 339px;
height: 54px;
    background: #D4AF37 0% 0% no-repeat padding-box;
border-radius: 4px;
border:none;
margin-top:53px;
}
`
const Login = () => {
    return (
        <MainLoginContainer>
            <Logo>
                <img src={img.logo}/>
            </Logo>
            <LoginContainer>
                <Adjust>
               <Header>
                  <h4> Login</h4>
                  <p>Please sign in to continue</p>
               </Header>
                 <InputField>
                  <input type='text' placeholder='Email/Phone No.'/><br/>
                  <input type='text' placeholder='Password'/>
                  <div>
                  <NavLink to="/about">Forget Password</NavLink>
                  </div>
                 <button>Login</button>
                 </InputField>
               </Adjust>
            </LoginContainer>
        </MainLoginContainer>
    )
}
export default Login
