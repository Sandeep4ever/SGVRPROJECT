import React,{useContext} from 'react';
import styled from 'styled-components';
import img from '../../../Assets/Images/Images';
import SideNav from '../../../Utils/SideNav';
import Searchbar from '../../../Utils/Searchbar';
import Cardlistcontext from '../../../ContextApi/Cardlistcontext';
import Form from './Form';


const MainContainer =styled.div`
display: flex;
justify-content: space-between;
`
const CardContainer=styled.div`
width: 350px;
height: 213px;
margin-top: 24px;
padding: 13px 9px 14px 13px;
margin-left:20px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 6px #0000000F;
`
const HeadContainer=styled.header`
display: flex;
`
const Deleteicon =styled.div`
display: flex;
justify-content: flex-end;
`
const Location=styled.div`
display: flex;
padding-top: 5px;
div{
    display: flex;
    span{
        margin-left: 3px;
        font-family: 'Roboto', sans-serif;
    font-size: 10px;
color: #A0A0A0;
    }
}
p{
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
color: #A0A0A0;
padding-left: 9px;
}
`
const Contact=styled.div`
display: flex;
padding-top:17px;
`
const PhoneNo=styled.div`
display: flex;
p{
    padding-left: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    color: #8C8B9E;
}
`
const Mail=styled.div`
display: flex;
padding-left: 20px;
p{
    padding-left: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    color: #8C8B9E;
}
`
const Editbutton=styled.div`
flex-grow:Editbutton;
display: flex;
align-items: center;
justify-content: center;
width: 328px;
height: 37px;
background: #F8EECD 0% 0% no-repeat padding-box;
border: 1px solid #E0D7B9;
border-radius: 4px;
margin-top: 15px;
font-family: poppins;
font-size: 14px;
color: #BF9D2C;
`
const Wrapertwo =styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
const Usersdetails=styled.div`
padding-left: 7px;
padding-top: 5px;
h{
    font-size: 16px;
    font-weight: 500;
    font-family:Roboto ;
color: #1A1616;
}
`
const Name=styled.div`
color: #1A1616; 
font-size:12px;
font-family:Roboto;
 margin-top:12px;
 font-weight: 500;
`
const ForRow =styled.div`
display: flex;
padding-left:10px;
flex-wrap: wrap;
`
const Onbordinglist = () => {
   let data = useContext(Cardlistcontext);
    // console.log(data.OnbordingData)
    const openForm=()=>{
        // console.log("its working")
        data.setCardlistClose(!data.cardlistClose)
    }
    return (
        <MainContainer>
             <SideNav/>
             {data.cardlistClose && 
              <Wrapertwo>
              <Searchbar openForm={openForm} title= "Onboarding list"/>
 <ForRow>
              {data.OnbordingData.map((data,index)=>(
<CardContainer key={index}>
<Deleteicon>
    <img src={img.del} alt='delete'/>
</Deleteicon>

<HeadContainer>
  <div>
<img src={data.image} alt='avatar'/>
</div>

<Usersdetails>
      <h>{data.Jevellery}</h>
       <Name> {data.name} </Name>
       <Location>
  <div>
     <img src={img.location} alt='phone'/>
    <span>{data.city} </span>
</div>
<p>{data.address} </p>
</Location>

</Usersdetails>



</HeadContainer>

<Contact>
 <PhoneNo>
    <img src={img.phone} alt='phone'/>
     <p>{data.phone}</p>
 </PhoneNo>
 <Mail>
    <img src={img.mail} alt='mail'/>
    <p>{data.email}</p>
 </Mail>
</Contact>

 <Editbutton>
     Edit
 </Editbutton>
</CardContainer>

              ))}
 </ForRow>
           
     </Wrapertwo>

             
             }
             {!data.cardlistClose &&
               <Form/>
             }
          
         </MainContainer>
    )
}

export default Onbordinglist
