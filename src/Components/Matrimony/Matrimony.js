import React,{useState,useContext} from 'react';
import styled from 'styled-components';
import img from '../../Assets/Images/Images';
import data from './Data';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';
import SideNav from '../../Utils/SideNav';
import OnlySearchbar from '../../Utils/OnlySearchbar';
// import viewpic from '../../Assets/Images/viewpic.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import Pagination from '../../Utils/Pagination';
import Dropdown from './Dropdown';

const Matrimony = () => {
    return (
        <WrapContainer>
                <SideNav/>
                <WrapPaginationandMainList>
        <MainListContainer>
            <Header>
                Onboarding list
            </Header>
            <Section>
                <VendorsDiv>Vendors</VendorsDiv> 
                <GroomDiv>Groom</GroomDiv>
               <BrideDiv>Bride</BrideDiv>
            </Section>
           <SearchContainer>
              <OnlySearchbar/>
              {/* <select>
                <option> 
                   Function Hall
                    </option>
                <option>
                  Function Hall
                    </option>
                <option>
                  Function Hall
                    </option>
                <option>
                    Select Category
                    </option>
              </select> */}
              <Dropdown/>
           </SearchContainer>
           <WrapCardConta>
           {data.map((items,index)=>{
               return(
                <CardContainer key={index}>
                <ViewIconDiv>
                    {/* <img src={viewpic} alt='delete'/> */}
                    <SvgIcon>
         <path id="Path_8127" data-name="Path 8127"
          d="M7.366,4C2.491,4-.012,8.915-.012,8.915A8.076,8.076,0,0,0,7.366,13.83c4.971,0,7.377-4.9,7.377-4.9S12.317,4,7.366,4Zm.011,7.987A3,3,0,0,1,4.306,8.915,3,3,0,0,1,7.377,5.843a3,3,0,0,1,3.071,3.072A3,3,0,0,1,7.377,11.987Zm0-4.915A1.843,1.843,0,1,0,9.219,8.915,1.864,1.864,0,0,0,7.377,7.072Z" 
          transform="translate(0.012 -4)" />
                    </SvgIcon>
                </ViewIconDiv>
              <Head>
                 {items.name}
              </Head>
              <Location>
                  <div>
                     <img src={img.location} alt='phone'/>
                    <span>{items.city} </span>
                </div>
                <p>{items.address} </p>
              </Location>
              <Contact>
                 <PhoneNo>
                    <img src={img.phone} alt='phone'/>
                     <p>{items.phone}</p>
                 </PhoneNo>
                 <Mail>
                    <img src={img.mail} alt='mail'/>
                    <p>{items.email}</p>
                 </Mail>
              </Contact>
              <Text>
               <div> <p>{items.Jevellery}  </p></div>
              </Text>
              <ButtonDiv>
                 <Approve>
                 Approve
                 </Approve>
                 <Reject>
                 Reject
                 </Reject>
              </ButtonDiv>
            </CardContainer>
               )
           })
           }
</WrapCardConta>     

        </MainListContainer>
            <PaginationDiv>
                <Pagination styled={{paddingRight:"42px"}}/>
            </PaginationDiv>
       </WrapPaginationandMainList>
     </WrapContainer>
    )
}
export default Matrimony;

const WrapContainer=styled.div`
display: flex;
`
const WrapPaginationandMainList =styled.div`

`
const MainListContainer=styled.div`
width: 100%;
padding-left: 31px;
padding-right: 31px;
padding-top:23px;
`
const Header=styled.header`
font: normal normal 500 16px/25px Poppins;
color: #000000;
`
const Section =styled.div`
display:flex;
flex-direction:row;
margin-top:31px;
`
const VendorsDiv =styled.div`

width: 108px;
height: 38px;
display: flex;
align-items:center;
justify-content: center;
cursor: pointer;
font: normal normal 500 16px/25px Poppins;
color: #606060;
&:active{
    background: #DFB93E0D 0% 0% no-repeat padding-box;
border: 1px solid #DFB93E;
border-radius: 8px;
color: #DFB93E;
}
`
const GroomDiv =styled(VendorsDiv)`

`
const BrideDiv =styled(VendorsDiv)`

`
const SearchContainer=styled.div`
   display:flex;
   margin-top:31px;
   border:1px solid red;
   select{
    width: 145px;
    height: 38px; 
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #A3A3A3;
    border-radius: 4px;
    font: normal normal normal 12px/20px Poppins;
    color: #979797;
    margin-left:10px;
    padding-left:13px ;
    option{
        padding:20px !important;
    }
    &:focus-visible{
        outline:none;
    }
   }
`
const CardContainer=styled.div`
width: 350px;
height: 197px;
margin-top: 21px;
padding: 13px 9px 14px 13px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 6px #0000000F;
`
const Head=styled.header`
margin-top: -12px;
font: normal normal medium 16px/21px Roboto;
font-family: 'Roboto', sans-serif;
    font-size: 16px;
color: #1A1616;
`
const ViewIconDiv =styled.div`
display: flex;
justify-content: flex-end;
    .MuiSvgIcon-root{
        color:#C5C5C5;
        transition:0.2s ease-in;
        &:hover{
            color: #D8AE25 ;
        }

    }
`

const Location=styled.div`
display: flex;
padding-top: 5px;

div{
    display: flex;

    span{
        margin-left: 3px;
        font: normal normal medium 10px/13px Roboto;
        font-family: 'Roboto', sans-serif;
    font-size: 10px;
color: #A0A0A0;
    }
}
p{
    font: normal normal medium 11px/15px Roboto;
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
    /* font-family: normal normal medium 11px/15px Roboto; */
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    color: #8C8B9E;
}

`
const Text=styled.div`
display: flex;
justify-content: space-between;
padding-top: 16px;

div{
    width: 87px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F2F2F2 0% 0% no-repeat padding-box;
border-radius: 4px;
p{
    font: normal normal medium 11px/15px Roboto;
    font-family: 'Roboto', sans-serif;
color: #8C8B9E;
font-size: 11px;
}
}
`
const ButtonDiv=styled.div`
display: flex;
margin-top:15px;

`
const Approve=styled.button`
padding: 9px 52px;
background: #D8AE25 0% 0% no-repeat padding-box;
border-radius: 4px;
font: normal normal medium 14px/21px Poppins;
color: #FFFFFF;
border:none;
&:hover{
    background: #CDA830 0% 0% no-repeat padding-box;    
}
`
const Reject=styled.button`
background: #E1E1E119 0% 0% no-repeat padding-box;
border: 1px solid #E1E1E1;
border-radius: 4px;
padding:9px 60px;
margin-left:6px;
font: normal normal medium 14px/21px Poppins;
color: #C5C5C5;
transition:0.3s ease-in ;
&:hover{
    background: #D8AE25 0% 0% no-repeat padding-box;
    color: #FFFFFF;
}
`
const WrapCardConta =styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const PaginationDiv =styled.div`
margin-top:12px;
// padding-left:42px;
// padding-right:42px;
`


