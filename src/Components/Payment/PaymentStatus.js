import React,{useContext} from 'react';
import styled from 'styled-components';
import OnlySearchbar from '../../Utils/OnlySearchbar';
import img from '../../Assets/Images/Images';
import SideNav from '../../Utils/SideNav';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';

const MainPaymentContainer =styled.div`
display: flex;
width: 100%;

`
const WrapPaymentStatus=styled.div`
width: 100%;
padding: 26px 36px 0 42px;

`
const FirstContainer =styled.div`

`
const Header =styled.h6`
font: normal normal 500 18px/20px Rubik;
color: #202124;
`
const SearchSection =styled.div`
display:flex;
justify-content:space-between;
`
const SearchAndCategory =styled.div`
display: flex;
margin-top:23px;
select{
  margin-left:18px;
    width: 145px;
height: 38px;
font: normal normal normal 12px/20px Poppins;
color: #747474;
border:none;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #747474;
border-radius: 4px;
&:focus-visible{
    outline:none;
}
}
`
const Datediv =styled.div`
margin-left:5px;
input{
width: 145px;
height: 38px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #747474;
border-radius: 4px;
&:focus-visible{
    outline:none;
}
}
`
const DownloadImg=styled.div`
`
const TableContainer=styled.div`
margin-top:27px;
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  img{
    margin-left:15px;
    cursor: pointer;
  }
}
th{
    background: #D4AF371A 0% 0% no-repeat padding-box;
  height: 45px !important;
  font: normal normal normal 14px/20px Rubik;
  color: #D4AF37;
}
td, th {
  text-align: left;
  padding: 8px;
  height: 55px;
  font: normal normal normal 13px/20px Poppins;
  color: #3F546D;
}
tr:nth-child(odd) {
  background: #F7F7F7 0% 0% no-repeat padding-box;
}
`
const PaginationContainer =styled.div`
height: 61px;
display: flex;
align-items:center;
justify-content:space-between;
border-top:1px solid #BF9D2C;
border-bottom:1px solid #0000001F;

`
const FirstSection =styled.div`
display:flex;
`
const Previous =styled.p`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #C3C3C3;
border-radius: 2px;
font: normal normal normal 13px/20px Poppins;
color: #B3B3B3;
padding:2px 10px;
`
const Number =styled.div`
display: flex;
align-items:center;
margin-left:10px;
span{
  width: 26px;
height: 24px;
/* background:#D8AE25; */
font: normal normal 600 13px/20px Poppins;
color: #3F546D;
padding:3px 9px;
border-radius:2px;
}
`
const Next =styled.p`
background: #D4AF371A 0% 0% no-repeat padding-box;
border: 1px solid #D4AF37;
border-radius: 2px;
font: normal normal normal 13px/20px Poppins;
color: #D4AF37;
padding:2px 19px;
margin-left:10px;
`
const SecondSection =styled.div`
display:flex;
`
const Para1 =styled.div`
display: flex;
align-items:center;
p{
  font: normal normal normal 13px/20px Poppins;
color: #B3B3B3;
}
div{
  padding:3px 23px;
  background:#F7F7F7;
  margin-left:10px;
  font: normal normal 600 13px/20px Poppins;
color: #3F546D;
}

`
const Para2 =styled.div`
display: flex;
align-items:center;
margin-left:25px;
p{
  font: normal normal normal 13px/20px Poppins;
color: #B3B3B3;

}
div{
  padding:3px 12px;
  background:#F7F7F7;
  width: 31px;
  margin-left:10px;
  font: normal normal 600 13px/20px Poppins;
color: #3F546D;

}
`
const Button =styled.button`
background:#D4AF37 ;
color: white;
padding:3px 7px;
border: none;
margin-left:15px;
border-radius: 2px;
`
const PaymentStatus = () => {
    const paymentstate =useContext(Cardlistcontext);
    return (
        <MainPaymentContainer>
         <SideNav/>
         <WrapPaymentStatus>
            <FirstContainer>
               <Header>
               Payment Status
               </Header>
            <SearchSection>
                <SearchAndCategory>
                <OnlySearchbar/>
                <select name="Select Category">
                    <option value="" disabled selected hidden>Select Category</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                </select>
               <Datediv>
                   {/* <label htmlFor='dates'>
                       <img src={img.upload} alt='Img'/>
                       Date
                   </label> */}
                    <input type="date" id='dates' name='date'/>
               </Datediv>
                </SearchAndCategory>
                 <DownloadImg>
                 <img src={img.downloadImg2} alt='Img'/>
                 </DownloadImg>
            </SearchSection>
            </FirstContainer>
            <TableContainer>
              <table>
                <tr>
                  <th>Date</th>
                  <th>Shop Name</th>
                  <th>Shop Category</th>
                  <th>Product Name</th>
                  <th>Payment Amount</th>
                  <th>Payment Mode</th>
                  <th>Action</th>
                </tr>
                {paymentstate.paymentlistData.map((items,index)=>(
                    <tr>
                    <td>{items.date}</td>
                    <td>{items.shopname}</td>
                    <td>{items.shopcategory}</td>
                    <td>{items.productname}</td>
                    <td style={{color:"green"}} >{items.paymentamount}</td>
                    <td>{items.paymentmode}</td>
                    <td> <img src={img.view2}  alt='view'/></td>
                    </tr>
                 ))}
              </table>
              </TableContainer>
            <PaginationContainer>    
               <FirstSection>
                 <Previous> Previous</Previous>
                 <Number>
                   <span style={{background:"#D8AE25",color:"white"}}> 1</span>
                   <span> 2</span>
                   <span> 3</span>
                   <span> 4</span>
                   <span> 5</span>
                   <span>....</span>
                   <span>50</span>
                 </Number>
                 <Next> Next</Next>
               </FirstSection>
               <SecondSection>
                 <Para1>
                  <p> Per Page</p>
                  <div>
                    1
                  </div>
                 </Para1>
                 <Para2>
                  <p>Showing 1 to 10 of 20 </p>
                  <div>
                    7
                  </div>
                 </Para2>
                 <Button>
                 Go 
                 </Button>
               </SecondSection>
            </PaginationContainer>
         </WrapPaymentStatus>
        </MainPaymentContainer>
    )
}

export default PaymentStatus
