import React from 'react';
import styled from 'styled-components';

const Maincontainer=styled.div`
width: 349px;
height: 770px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 8px #00000029;
`

const VendorDetails = () => {
    return (
        <Maincontainer>
            <CloseImageDiv>
                <img src='' alt='close'/>\
            </CloseImageDiv>
            <VendorDetailsDiv>
                <Header>
                    Vendor Details
                </Header>
                    
            </VendorDetailsDiv>


        </Maincontainer>
    )
}

export default VendorDetails
