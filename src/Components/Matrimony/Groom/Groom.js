import React,{useContext} from 'react';
import styled from 'styled-components';
import MatrimonyLink from '../../../Utils/MatrimonyLink';
import Cardlistcontext from '../../../ContextApi/Cardlistcontext';
import img from '../../../Assets/Images/Images';
// import { SvgIcon } from '@mui/material';
import SvgIcon from "@material-ui/core/SvgIcon";
import Pagination from '../../../Utils/Pagination';

const MainContainer =styled.div`
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
  &:hover{
    background: #F7F7F7 0% 0% no-repeat padding-box;
    }
}
`
const SvgIconsDiv =styled.div`
display:flex;
padding-top:7px;
justify-content:center;
color:#b3b3b3;
cursor:pointer;
&:hover{
  color:#D8AE25;
}
`
const PaginationDiv= styled.div`

`
const Groom = () => {
    const state =useContext(Cardlistcontext);
    return (
        <MainContainer>
            {/* <MatrimonyLink/> */}
            <TableContainer>
              <table>
                <tr>
                  <th>Date of Join</th>
                  <th>Groom Name</th>
                  <th>Age</th>
                  <th>Profession</th>
                  <th>Father Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {state.groomDataList.map((items,index)=>(
                    <tr>
                    <td>{items.date}</td>
                    <td>{items.groomname}</td>
                    <td>{items.age}</td>
                    <td>{items.profession}</td>
                    <td >{items.fathername}</td>
                    <td style={{color:"green"}}>{items.status}</td>
                    <td> 
                      <SvgIconsDiv>
                      <SvgIcon>
                      <g id="Group_5000" data-name="Group 5000">
                        <path id="Path_8127" data-name="Path 8127" d="M7.366,4C2.491,4-.012,8.915-.012,8.915A8.076,8.076,0,0,0,7.366,13.83c4.971,0,7.377-4.9,7.377-4.9S12.317,4,7.366,4Zm.011,7.987A3,3,0,0,1,4.306,8.915,3,3,0,0,1,7.377,5.843a3,3,0,0,1,3.071,3.072A3,3,0,0,1,7.377,11.987Zm0-4.915A1.843,1.843,0,1,0,9.219,8.915,1.864,1.864,0,0,0,7.377,7.072Z" transform="translate(0.012 -4)"/>
                      </g>
                      </SvgIcon>
                      </SvgIconsDiv>
                      </td>
                    </tr>
                 ))}
              </table>
              </TableContainer>
          {/* <PaginationDiv>
            <Pagination/>
          </PaginationDiv> */}

        </MainContainer>
    )
}
export default Groom;
