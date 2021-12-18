import React,{useContext} from 'react';
import styled from 'styled-components';
import img from '../../Assets/Images/Images';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';

const PopupContainer=styled.div`
width: 274px;
height:157px;
padding: 15px 14px 14px 16px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 10px;
input{
    width: 242px;
height: 38px;
    background: #F7F7F7 0% 0% no-repeat padding-box;
border-radius: 8px;
border:none;
margin-top:10px;
margin-bottom:14px;
padding : 0% 5%;
&:focus-visible{
    outline : none;
}
}
`
const ContextContainer=styled.div`
`
const Image=styled.div`
float: right;
margin-top:-10px;
cursor: pointer;

`
const Header=styled.h6`
font: normal normal 500 16px/21px Roboto;
color: #2C2C2C;
`
const Button=styled.button`
background: #D8AE25 0% 0% no-repeat padding-box;
border-radius: 8px;
width: 242px;
height: 38px;
color:white;
border:none;
`
const AddLastNamepopup = () => {
    const state =useContext(Cardlistcontext);
      let data=[{...state.lastnameData},]

    const closePopup=()=>{
     state.setCardlistClose(!state.cardlistClose)
    }

    const handleData=(e)=>{
        data={[e.target.name]:e.target.value,id:state.lastnameData.at(-1).id+1}
    }


    const AddData=()=>{
        state.lastnameData.push(data)
        state.setCardlistClose(!state.cardlistClose)
    }

    return (
        <PopupContainer>
            <ContextContainer>
                <Image onClick={closePopup}><img src={img.close} alt="close"/></Image>
                <Header> Add Last Name </Header>             
                <input 
                type='text'  
                placeholder='Add last Name'
                name='lastname'
                value={ state.lastnameData.lastname}
                onChange={handleData}
                />    
                <Button onClick={AddData} >Add </Button>
            </ContextContainer>
        </PopupContainer>
    )
}
export default AddLastNamepopup;
