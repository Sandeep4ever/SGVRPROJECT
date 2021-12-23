import React from 'react';
import styled from 'styled-components';

const Maincontainer=styled.div`
width: 349px;
height: 770px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 8px #00000029;
`
const CloseImageDiv=styled.div`

`
const VendorDetailsDiv=styled.div`

`
const Header=styled.div`

`
const BusinessNameDiv=styled.div`

`
const OwnerNameDiv=styled.div`

`
const EmailDiv=styled.div`

`
const PhoneDiv=styled.div`

`
const ServiceProvidesDiv=styled.div`

`
const StateDiv=styled.div`

`
const CityDiv=styled.div`

`

const VendorDetails = () => {
    return (
        <Maincontainer>
            <CloseImageDiv>
                <img src='' alt='close'/>
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
