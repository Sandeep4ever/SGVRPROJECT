import React from 'react';
import styled from 'styled-components';
import img from '../Assets/Images/Images';

const MainContainer=styled.div`
display: flex;
`
const Inputdiv=styled.div`
input{
    width: 204px;
    height: 38px;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 8px 0px 0px 8px;
    padding-left:10px;
    font: normal normal normal 13px/20px Poppins;
    /* color: #B3B3B3; */
    &:focus-visible{
        outline:none;
    }

}
`
const Imgdiv=styled.div`
width: 38px;
height: 38px;
display: flex;
align-items:center;
justify-content:center;
background: #D8AE25 0% 0% no-repeat padding-box;
border-radius: 0px 8px 8px 0px;
`
const OnlySearchbar = () => {
    return (
        <MainContainer>
            <Inputdiv>
            <input type='text' placeholder='Search'/>
            </Inputdiv>
        <Imgdiv>
        <img src={img.search} alt='search'/>
        </Imgdiv>
        </MainContainer>
    )
}

export default OnlySearchbar
