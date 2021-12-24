import React,{useContext} from 'react';
import styled from 'styled-components';
import SvgIcon from "@material-ui/core/SvgIcon";
import Cardlistcontext from '../../ContextApi/Cardlistcontext';      

const Maincontainer=styled.div`
transition : .2s ease-in-out;
scroll-behavior : smooth;
overflow-x : hidden;
height: 770px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 8px #00000029;
`
const CloseImageDiv=styled.div`
float:right;
margin-top:13px;
color:#363636;
cursor:pointer;
.MuiSvgIcon-root{
font-size:30px;    
}
`
const VendorDetailsDiv=styled.div`
padding:30px 16px 0px 24px;
`
const Header=styled.h6`
font: normal normal 500 20px/20px Roboto;
color: #D4AF37;
`
const BusinessNameDiv=styled.div`
display:flex;
flex-direction:row;
margin-top:23px;

h6{
    width:107px;
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
}
span{
    font: normal normal normal 13px/20px Poppins;
    color: #4D4D4D;
    margin-left:40px;

}
`
const OwnerNameDiv=styled(BusinessNameDiv)`
`
const EmailDiv=styled(BusinessNameDiv)`
`
const PhoneDiv=styled(BusinessNameDiv)`
`
const ServiceProvidesDiv=styled(BusinessNameDiv)`
`
const StateDiv=styled(BusinessNameDiv)`
`
const CityDiv=styled(BusinessNameDiv)`
`
const Address1Div =styled.div`
margin-top:21px;
h6{
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
    margin-bottom:9px;
}
span{
    font: normal normal normal 13px/20px Poppins;
    color: #4D4D4D;
}
`
const Address2Div =styled(Address1Div)`
`
const AboutBusinessDiv =styled(Address1Div)`
`
const VendorDetails = () => {
    const state= useContext(Cardlistcontext);

    const closeVendorDetails=()=>{
        state.setWid("0px")
    }
    return (
        <Maincontainer style={{width : state.wid}} >
            <CloseImageDiv onClick={closeVendorDetails}>
                <SvgIcon>
                    <path id="_7787567_wrong_delete_remove_trash_minus_icon" data-name="7787567_wrong_delete_remove_trash_minus_icon" 
                    d="M39.071,38.2l3.049-3.049a.616.616,0,1,0-.871-.871L38.2,37.329,35.151,34.28a.616.616,0,1,0-.871.871L37.329,38.2,34.28,41.249a.616.616,0,1,0,.871.871L38.2,39.071l3.049,3.049a.616.616,0,1,0,.871-.871Z" transform="translate(-34.1 -34.1)"/>
                </SvgIcon>
            </CloseImageDiv>
            <VendorDetailsDiv>
                <Header>
                    Vendor Details
                </Header>
                     <BusinessNameDiv>
                         <h6>Business Name</h6>
                         <span>Asha Function Hall</span>
                     </BusinessNameDiv>
                     <OwnerNameDiv>
                         <h6>Owner Name</h6>
                         <span>Asha Sing</span>
                     </OwnerNameDiv>
                     <EmailDiv>
                         <h6>Email</h6>
                         <span>Asha.Sing1@gmail.com</span>
                     </EmailDiv>
                     <PhoneDiv>
                         <h6>Phone</h6>
                         <span>+91 8451686256</span>
                     </PhoneDiv>
                     <ServiceProvidesDiv>
                         <h6>Service Provides</h6>
                         <span>Function Hall</span>
                     </ServiceProvidesDiv> 
                     <StateDiv>
                         <h6>State</h6>
                         <span>Karnataka</span>
                     </StateDiv> 
                     <CityDiv>
                         <h6>City</h6>
                         <span>Bangalore</span>
                     </CityDiv> 
                     <Address1Div>
                         <h6>Address 1</h6>
                         <span>Lorem Ipsum is simply dummy
                              text of the printing and</span>
                     </Address1Div> 

                     <Address2Div>
                         <h6>Address 2</h6>
                         <span>Lorem Ipsum is simply dummy 
                             text of the printing and</span>
                     </Address2Div> 
                     <AboutBusinessDiv>
                         <h6>About Business</h6>
                         <span>ALorem Ipsum is simply dummy text
                              of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</span>
                     </AboutBusinessDiv> 
            </VendorDetailsDiv>
        </Maincontainer>
    )
}
export default VendorDetails
