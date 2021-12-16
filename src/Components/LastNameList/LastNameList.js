import React,{useContext} from 'react';
import styled from 'styled-components';
import SideNav from '../../Utils/SideNav';
import img from '../../Assets/Images/Images';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';
import AddLastNamepopup from './AddLastNamepopup';
import Upload from './upload';

const MainContainer=styled.div`
 display: flex;
`
const NameListContainer=styled.div`
width: 100%;
padding: 14px 42px;
`
const Header=styled.h4`
font: normal normal 500 18px/20px Rubik;
color: #202124;
`
const SearchContainer=styled.div`
display: flex;
margin-top:24px;

`
const Searchdiv=styled.div`
 width: 242px;
height: 38px;
background: #D8AE25 0% 0% no-repeat padding-box;
border-radius: 0px 8px 8px 0px;
opacity: 1;
/* border:1px solid red; */
 input{
   width: 204px;
   height: 38px;
   background: #F7F7F7 0% 0% no-repeat padding-box;
/* border-radius: 8px; */
   border:none;
/* border-radius: 8px 0px 0px 8px; */

 }
 img{
     width: 20px;
     height: 20px;
     position:relative;
     top:6px;
     left:9px;
 }
`
const Images=styled.div`
 margin-left:93px;
 img{
     padding-left:23px;
     cursor: pointer;
 }
 
`
const TableContainer=styled.div`
margin-top:35px;
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  /* width: 100%; */
  width: 466px;
  height: 45px;
  img{
    margin-left:15px;
    cursor: pointer;
  }
}
th{
  background: #D8AE2526 0% 0% no-repeat padding-box;
}
td, th {
  text-align: left;
  padding: 8px;

}
tr:nth-child(odd) {
  background: #F7F7F7 0% 0% no-repeat padding-box;
}
`
const AddIcon=styled.div`
margin-top:121px;
float: right;
margin-right:15px;
img{
  width: 58px;
height: 58px;
cursor: pointer;
}
`
const PopupCenter=styled.div`
display: flex;
align-items:center;
justify-content:center;
position:fixed;
z-index:+100;
top:0;
min-width:100vw;
height:100%;
margin-left:185px;
background: rgb(0,0,0,0.2);
`
const LastNameList = () => {
  const state= useContext(Cardlistcontext);
  const uploadfile= useContext(Cardlistcontext);
  //  let allData=state.lastnameData;
  //  let renderData =[];
  //  renderData =renderData.length > 0 ? renderData :state.lastnameData;

//  let actualData =lastData.lastnameData;
// console.log(renderData)

 const showLastName=()=>{
  state.setCardlistClose(!state.cardlistClose)
 }

 const showUploadFile=()=>{
  uploadfile.setUploadFile(!uploadfile.uploadFile)
 }
 console.log(state.lastnameData)

 const deleteData =(id)=>{
   console.log("index kiska", id);

   state.setlastnameData(state.lastnameData.filter((items) => items.id !== id))
  
  console.log(state.lastnameData)
  //  if(renderData.id !== index){
      
   }
  
  

 
    return (
  

        <MainContainer>
            <SideNav/>

            {!state.cardlistClose &&   <PopupCenter> <AddLastNamepopup/>  </PopupCenter>  }
            {!uploadfile.uploadFile &&   <PopupCenter> <Upload/>  </PopupCenter>  }

            <NameListContainer>
              <Header>Last Name List </Header>
              <SearchContainer>
                  <Searchdiv>
                      <input type='text' placeholder='Search..' />
                      <img src={img.search} alt='search'/>
                  </Searchdiv>
                  <Images>
                  <img onClick={showUploadFile} src={img.upload2} alt='search'/>
                  <img src={img.download} alt='search'/>
                  </Images> 
              </SearchContainer>
              <TableContainer>
              <table>
                <tr>
                  <th>Last Name</th>
                  <th>Created Date</th>
                  <th>Action</th>
                </tr>
          {state.lastnameData.map((items)=>(
                <tr key={items.id}>
                <td>{items.lastname}</td>
                <td>{items.date}</td>
                <td> <img src={img.delete2} onClick={()=>deleteData(items.id)} alt='delete'/></td>
                </tr>
          ))}
              </table>
              </TableContainer>
              <AddIcon>
                <img src={img.addicon} alt='addicon' onClick={showLastName}/>
              </AddIcon>
            </NameListContainer>
        </MainContainer>
        
    )
}
export default LastNameList
