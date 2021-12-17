import React,{useContext} from 'react';
import styled from 'styled-components';
import SideNav from '../../Utils/SideNav';
import OnlySearchbar from '../../Utils/OnlySearchbar';
import img from '../../Assets/Images/Images';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';

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
margin-top:15px;
`
const PeoplesDiv=styled.div`
height: 58px;
display: flex;
align-items:center;
border-radius: 8px;
padding-left: 5px;
padding-right: 5px;

&:hover{
    background: #BF9D2C5E 0% 0% no-repeat padding-box;
}
`
const Imagediv=styled.div`
img{
    width: 42px;
    height: 42px;  
    border-radius:50%;
}
`
const ContentDiv=styled.div`
padding-left:10px;
h6{
    font: normal normal 500 16px/19px Rubik;
    color: #2C2C2C;
}
p{
    font: normal normal normal 12px/14px Rubik;
color: #3F546D;
}
`

const DateDiv=styled.div`
font: normal normal normal 12px/14px Rubik;
color: #2C2C2C;
padding-left:8px;
margin-top:-20px;
p{
   
}
`
const ChatBoxContainer=styled.div`
width: 100%;
position: relative;
height: 100%;
`
const Header=styled.div`
display: flex;
align-items:center;
padding-left:26px;
height: 70px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 2px 6px #0000000D;
p{
    font: normal normal 600 24px/30px Gibson;
    color: #000000;
}

`
const TextArea=styled.div`
/* position: relative; */
padding-top:42px;
padding-bottom:42px;
background: #FCFCFC 0% 0% no-repeat padding-box;
`
const Daydiv=styled.div`
display: flex;
align-items:center;
justify-content:center;

p{
    font: normal normal 600 12px/14px Gibson;
color: #78849E;
opacity: 0.56;
}
`
const ChatMessages=styled.div`
padding:34px 59px 34px 29px;
`
const ForUserDiv=styled.div`
display: flex;
flex-direction:row;
`
const ImgDiv=styled.div`
display: flex;
align-items:flex-end;
img{
    width: 42px;
    height: 42px;
    border-radius:50%;
}
`
const UserText=styled.div`
width: 278px;
background: #EFEFEF 0% 0% no-repeat padding-box;
border-radius: 12px;
padding:16px;
margin-left:6px;

p{
    font: normal normal normal 14px/20px Gibson;
    color: #242424;
}

`
const ForYouDiv=styled.div`
margin-top:37px;
display: flex;
flex-direction:column;
align-items:end;
`
const YourText=styled.div`
width: 271px;
background: #B98C13 0% 0% no-repeat padding-box;
border-radius: 12px;
padding:16px;

p{
    font: normal normal normal 14px/20px Gibson;
    color: #FFFFFF;
}
`
const InputSection =styled.div`
display: flex;
position:absolute;
bottom:0px;
/* left:0 */
padding:8px 37px 0px 8px;
input{
    width: 744px;
    height: 54px;
    border-radius: 27px;
    background: #EFEFEF 0% 0% no-repeat padding-box;
    font: normal normal normal 14px/20px Rubik;
    color: #78849E;
    padding-left:34px;
    border:none;
    &:focus-visible{
        outline:none;
    }
} 
`
const SendMessagediv =styled.div`
margin-left:9px;
img{
    width: 54px;
    height: 54px;
}
`
const Messages = () => {
    const state =useContext(Cardlistcontext);
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
             {state.messagesData.map(items=>(
                <PeoplesDiv>
                <Imagediv>
                    <img src={items.image}/>
                </Imagediv>
                <ContentDiv>
                    <h6>{items.name}</h6>
                    <p>{items.content} </p>
                </ContentDiv>
                <DateDiv>
                    <p>{items.date}</p>
                </DateDiv>
                </PeoplesDiv>
             ))}
              </ChatPeoplesSection>
          </ChatSideNav>

          <ChatBoxContainer>
              <Header>
                  <p>Sandeep</p>
              </Header>
              <TextArea>
                  <Daydiv> <p>Today</p> </Daydiv>
                   <ChatMessages>
                       <ForUserDiv>
                           <ImgDiv>
                          <img src={img.people} alt='people'/>
                          </ImgDiv>
                          <UserText>
                              <p>
                                The person who says it cannot be done
                                should not interrupt the person who is doing it.
                            </p>
                          </UserText>
                       </ForUserDiv>
                       <ForYouDiv>
                         <YourText>
                         <p>
                            Remember that not getting what you want
                            is sometimes a wonderful stroke of luck.
                         </p>
                         </YourText>
                       </ForYouDiv>
                   </ChatMessages>
                   <ChatMessages>
                       <ForUserDiv>
                           <ImgDiv>
                          <img src={img.people} alt='people'/>
                          </ImgDiv>
                          <UserText>
                              <p>
                                The person who says it cannot be done
                                should not interrupt the person who is doing it.
                            </p>
                          </UserText>
                       </ForUserDiv>
                       <ForYouDiv>
                         <YourText>
                         <p>
                            Remember that not getting what you want
                            is sometimes a wonderful stroke of luck.
                         </p>
                         </YourText>
                       </ForYouDiv>
                   </ChatMessages>

                  

              </TextArea>
              <InputSection>
                     <input type='text' placeholder='Search your message'/>
                     <SendMessagediv>
                     <img src={img.sendmessage} alt='sendmessage'/>
                     </SendMessagediv>

                   </InputSection>

          </ChatBoxContainer>
        </MainContainer>
    )
}

export default Messages
