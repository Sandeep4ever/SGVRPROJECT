import React from 'react';
import styled from 'styled-components';
import img from '../Assets/Images/Images'
const MainContainer=styled.div`
width: 100%;
padding-left: 31px;
padding-right: 31px;
padding-top:23px;
`
const Header=styled.p`
/* font: normal normal medium 16px/25px Poppins; */
font-family: 'Poppins', sans-serif;
    font-size: 16px;
color: #000000;
`
const SearchContainer=styled.div`
    width:100%;
    margin-top: 25px;
    display: flex;
   justify-content: space-between;
`
const SearchingPart =styled.div`
display: flex;
input{
    width:204px;
    height: 38px;
    background: #F9F9F9 0% 0% no-repeat padding-box;
border-radius: 0px 8px 8px 0px;
border-style: none;
border-radius: 8px;
}
img{
    width: 20px;
height: 20px;

}
div{
    width: 38px;
    height: 38px;
    padding: 4px;
background: #D8AE25 0% 0% no-repeat padding-box;
border-radius: 0px 8px 8px 0px;
}
`
const CreatePart =styled.div`
width: 112px;
height: 38px;
background: #D8AE251A 0% 0% no-repeat padding-box;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
p{
    /* font: normal normal medium 14px/21px Poppins; */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
color: #D8AE25;
cursor: pointer;

}
img{
  width: 16px;
  height: 16px;
  margin-left: 16px;
  cursor: pointer;
}
`
const Searchbar = ({openForm , title}) => {
    return (
        <MainContainer >
            <Header>
                {title}
            </Header>
           <SearchContainer>
               <SearchingPart>
               <input type='text' placeholder='search..' />
              <div> <img src={img.search} alt='image'/></div>
              </SearchingPart>
              
              <CreatePart  onClick={openForm}>
                 <p>Create</p>
                 <img  src={img.plus} alt='image'/>
              </CreatePart>
           </SearchContainer>
        </MainContainer>
    )
}
export default Searchbar
