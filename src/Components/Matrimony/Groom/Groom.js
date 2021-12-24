import React,{useContext} from 'react';
import styled from 'styled-components';
import MatrimonyLink from '../../../Utils/MatrimonyLink';
import Cardlistcontext from '../../../ContextApi/Cardlistcontext';

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
}
`

const Groom = () => {
    const state =useContext(Cardlistcontext);

    return (
        <MainContainer>
            <MatrimonyLink/>
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
                    <td style={{color:"green"}} >{items.fathername}</td>
                    <td>{items.status}</td>
                    <td> <img src={img.view2}  alt='view'/></td>
                    </tr>
                 ))}
              </table>
              </TableContainer>
        </MainContainer>
    )
}

export default Groom
