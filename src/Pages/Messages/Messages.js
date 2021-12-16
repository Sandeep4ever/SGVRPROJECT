import React from 'react';
import styled from 'styled-components';
import SideNav from '../../Utils/SideNav';
import OnlySearchbar from '../../Utils/OnlySearchbar';
import img from '../../Assets/Images/Images';

const MainContainer=styled.div`
display: flex;
`
const ChatSideNav=styled.div`
width: 292px;
background:#BF9D2C5E;
padding:30px 8px;

hr{
    width: 276px;
border: 0.5px solid #B79421;
}

`
const SearchSection=styled.div`
display: flex;
align-items:center;
justify-content:center;
padding-bottom: 18px ;
`
const BackImg=styled.div`
padding-right:9px;
img{
    width: 24px;
    height: 24px;
}
`
const ChatPeoplesSection=styled.div`

`
const PeoplesDiv=styled.div`
height: 58px;
display: flex;
align-items:center;
/* justify-content:space-between; */
border:1px solid red;

`
const Imagediv=styled.div`
img{
    width: 42px;
height: 42px;  
    border-radius:50%;
}
`
const ContentDiv=styled.div`

`

const DateDiv=styled.div`

`
const ChatBoxContainer=styled.div`
width: 100%;
`
const Header=styled.div`
/* width: 852px; */
height: 70px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 2px 6px #0000000D;
`


const Messages = () => {
    return (
        <MainContainer>
          <SideNav/>
          <ChatSideNav>
              <SearchSection>
              <BackImg> 
                  <img src={img.backicon}/>
              </BackImg>
            <OnlySearchbar/>
            </SearchSection>
              <hr/>
              <ChatPeoplesSection>
                 <PeoplesDiv>
                     <Imagediv>
                         <img src={img.people}/>
                     </Imagediv>
                     <ContentDiv>
                         <h6>Sandeep</h6>
                         <p>Hii How are you </p>
                     </ContentDiv>
                     <DateDiv>
                         Today
                     </DateDiv>
                 </PeoplesDiv>

              </ChatPeoplesSection>
          </ChatSideNav>
          <ChatBoxContainer>
              <Header>
                  <p>Sandeep</p>
              </Header>

          </ChatBoxContainer>


            
        </MainContainer>
    )
}

export default Messages
