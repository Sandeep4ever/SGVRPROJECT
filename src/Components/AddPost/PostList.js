import React,{useContext} from 'react';
import styled from 'styled-components';
import Searchbar from '../../Utils/Searchbar';
import SideNav from '../../Utils/SideNav';
import img from '../../Assets/Images/Images';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';
import PostForm from './PostForm';

const MainPostContainer=styled.div`
width: 100%;
display: flex;
`
const PostCard=styled.div`
width: 298px;
height: 262px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 10px #00000017;
border-radius: 10px;
margin-top:20px;
margin-left:20px;
`
const Image=styled.div`
span{
    position:absolute;
    img{
    margin-left: -25px;
    margin-top:10px;
    }
}
`
const TextContainer=styled.div`
padding:11px;
p{
    font: normal normal medium 11px/15px Roboto;
color: #A0A0A0;
}
`
const Users=styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 5px;
p{
font: normal normal 500 16px/21px Roboto;
color: #2C2C2C;
}
span{
    font: normal normal normal 13px/18px Roboto;
color: #747474;
}
`
const ButtonSec=styled.div`
display: flex;
flex-wrap: wrap;
margin-top:15px;
`
const Firstsec =styled.div`
width:136px;
height: 37px;
font: normal normal 500 14px/21px Poppins;
color: #BF9D2C;
background: #F8EECD 0% 0% no-repeat padding-box;
border: 1px solid #E0D7B9;
border-radius: 4px;
padding: 9px 55px;
`
const Secbutton=styled(Firstsec)`
padding: 9px 33px;
margin-left: 4px;
`
const Combinetwo=styled.div`
width: 100%;
`
const ForRowCard=styled.div`
display: flex;
flex-wrap:wrap;
margin-left: 21px;
padding-bottom: 20px;
`
const SearchSec=styled.div`
margin-top:-30px;
`
const PostList = () => {
    const PData=useContext(Cardlistcontext);
    let actualData =PData.PostData;
    const openForm =()=>{
        PData.setCardlistClose(!PData.cardlistClose)
    }

    return (
        <MainPostContainer>
            <SideNav/>
            {PData.cardlistClose && 
            <Combinetwo>
            <SearchSec>
               <Searchbar openForm={openForm}/>
             </SearchSec>
             <ForRowCard>
             {actualData.map((items,index)=>(
                 <PostCard key={index}>
                 <Image>
                 <img src={items.image} alt='image'/>
               <span>
                   <img src={img.view} alt='image'/>
                 </span>
                 </Image>
                 <TextContainer>
                     <Users>
                     <p>{items.Jevellery} </p>
                     <span>{items.date}</span>
                     </Users>
                     <p>{items.name}</p>
                     <ButtonSec>
                         <Firstsec>Edit</Firstsec>
                         <Secbutton>Republish</Secbutton>
                     </ButtonSec>
                 </TextContainer>
                 </PostCard>
             )) }       
             </ForRowCard>
             </Combinetwo>
            }
            {!PData.cardlistClose && <PostForm/>}
        </MainPostContainer>
    )
}
export default PostList
