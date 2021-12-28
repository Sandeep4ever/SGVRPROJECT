import React from 'react';
import styled from "styled-components";
import img from '../../../Assets/Images/Images';


const MainContainer=styled.div`

`
const HeaderDiv=styled.div`
width:100%;
height: 167px;
background: #CDA830BF 0% 0% no-repeat padding-box;
button{
    background: #DFB93E 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    float:right;
    margin-top:84px;
    margin-right:27px;
    padding:8px 26px;
    border:none;
    color:#ffffff
`

const WrapContantDiv=styled.div`
display:flex;
`
const GallaryDiv=styled.div`
width:230px;
margin-left:34px;
border:1px solid red;
h1{
    font: normal normal 500 16px/25px Poppins;
    color: #DFB93E;
    margin-top:39px;
}
`
const GroomImageDiv =styled.div`
width: 230px;
height: 230px;
 margin-top:-100px;
 padding:4px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 4px;
`
const GallaryImages =styled.div`
display:flex;
flex-wrap:wrap;
margin-top:11px;
gap:11px;

img{
width: 107px;
height: 107px;
}
`

const GroomContentDiv=styled.div`
width: 273px;
margin-left:26px;
border:1px solid red;

`
const GroomDetailsDiv=styled.div`
border:1px solid green;

`
const GroomName=styled.div`
margin-top:-93px;
border:1px solid green;
h3{
    font: normal normal 500 24px/32px Roboto;
    color: #FFFFFF;
}
p{
    font: normal normal 500 18px/24px Roboto;
    color: #FFFFFF;
    margin-top:7px;
}

`
const GroomPersonalDetailsDiv=styled.div`
margin-top:49px;
div{
display:flex;
align-items:center;
border:1px solid red;
img{
  
}
p{
margin-left:18px;
}
}


`
const SiblingDetails =styled.div`

`
const SiblingHeader =styled.div`

`
const SiblingPersonalDetails =styled.div`

`
const FatherAndMotherDetailsDiv=styled.div`

`
const FatherDetailsDiv =styled.div`

`
const FatherPersonalDetails =styled.div`

`
const MotherDetailsDiv =styled.div`

`
const MotherPersonalDetails =styled.div`

`

const GroomonboardingData = () => {
    return (
        <MainContainer>
           <HeaderDiv>
             
                  <button>Remove</button>
             

           </HeaderDiv>

        <WrapContantDiv>
           <GallaryDiv>
              <GroomImageDiv>
                  <img src={img.Groomimg} alt='image'/>
              </GroomImageDiv>
                <h1>Gallery</h1>
              <GallaryImages>
              <img src={img.groom1} alt='image'/>
              <img src={img.groom2} alt='image'/>
              <img src={img.groom3} alt='image'/>
              <img src={img.groom4} alt='image'/>
              </GallaryImages>
           </GallaryDiv>

           <GroomContentDiv>
              <GroomDetailsDiv>
                  <GroomName>
                      <h3>Madhukar Savant, <span>26</span></h3>
                      <p>UI/UX Designer</p>
                  </GroomName>
                <GroomPersonalDetailsDiv>
                    <div>
                       <img src={img.calendar} alt='calendar'/>
                        <p>24 November1994</p>
                    </div>
                    <div>
                       <img src={img.degree} alt='image'/>
                        <p>Studied at National University</p>
                    </div>
                    <div>
                       <img src={img.emailimg} alt='image'/>
                        <p>Surajverma1@gmail.com</p>
                    </div>
                    <div>
                       <img src={img.phoneno} alt='image'/>
                        <p>+91 5842413578</p>
                    </div>
                    <div>
                       <img src={img.city} alt='image'/>
                        <p>Bangalore, Karnataka</p>
                    </div>
                    <div>
                       <img src={img.location2} alt='image'/>
                        <p>Birth place : Bangalore,
                             Karnataka HSR layout sector 7,
                              manganamapalya road.</p>
                    </div>
                </GroomPersonalDetailsDiv>
              </GroomDetailsDiv>
              <SiblingDetails>
                 <SiblingHeader>
                     Sibling Details
                 </SiblingHeader>
                 <SiblingPersonalDetails>
                  <div>
                      <p>Name</p>
                      <span>Ramesh Savant</span>
                  </div>
                  <div>
                      <p>Job</p>
                      <span>Developer</span>
                  </div>
                  <div>
                      <p>Age</p>
                      <span>22</span>
                  </div>
                  <div>
                      <p>Marital Status</p>
                      <span>Single</span>
                  </div>

                 </SiblingPersonalDetails>
              </SiblingDetails>
           </GroomContentDiv>
         
           <FatherAndMotherDetailsDiv>
               <FatherDetailsDiv>
                     <h3>
                        Father Details
                      </h3>
                    <FatherPersonalDetails>
                        <div>
                            <p>Name</p>
                            <span>Suraj Savant</span>
                        </div>
                        <div>
                            <p>Phone NO.</p>
                            <span>+91 5147561485</span>
                        </div>
                        <div>
                            <p>Email</p>
                            <span>Surajverma1@gmail.com</span>
                        </div>
                        <div>
                            <p>Occupation</p>
                            <span>Government Employee</span>
                        </div>
                        <div>
                            <p>Birth Place</p>
                            <span>Birth place : Bangalore,
                                 Karnataka HSR layout sector 7, 
                                 manganamapalya road.
                            </span>
                        </div>
                    </FatherPersonalDetails>
             </FatherDetailsDiv>
            <MotherDetailsDiv>
                <h3>Mother Details</h3>
                <MotherPersonalDetails>
                    <div>
                        <p>Name</p>
                        <span>Suraj Savant</span>
                    </div>
                    <div>
                        <p>Phone NO.</p>
                        <span>+91 5147561485</span>
                    </div>
                    <div>
                        <p>Email</p>
                        <span>Surajverma1@gmail.com</span>
                    </div>
                    <div>
                        <p>Occupation</p>
                        <span>Government Employee</span>
                    </div>
                </MotherPersonalDetails>
            </MotherDetailsDiv>
           </FatherAndMotherDetailsDiv>
        </WrapContantDiv>









        </MainContainer>
    )
}

export default GroomonboardingData
