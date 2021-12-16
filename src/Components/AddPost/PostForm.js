import React,{useContext} from 'react';
import { useState,useEffect,useRef } from 'react/cjs/react.development';
import styled from 'styled-components';
import img from '../../Assets/Images/Images';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';

const MainContainer=styled.div`
/* width: 100%; */
display: flex;
justify-content: center;
padding-top: 93px;
padding-left: 69px;
padding-bottom: 214px;
`
const PhotoContainer=styled.div`
width: 294px;
height: 294px;
background: #F7F7F74D 0% 0% no-repeat padding-box;
border: 0.5px dashed #D8AE25;
border-radius: 4px;
input[type=file]{
    display: none;
}

`
const Para=styled.p`
margin-top: -20px;
font: normal normal normal 14px/20px Rubik;
color: #202124;
`
const Image =styled.div`
width: 294px;
height: 294px;
 display: flex;
        align-items: center;
        justify-content: center;
    img{
        width:34px;
        height:26px;
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content:center;
    }
`
const FormContainer=styled.div`
margin-left:33px;
label{
    margin-top: 10px;
}
input{
    width:435px;
    height: 43px;
    margin-bottom: 15px;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    font: normal normal normal 14px/20px Rubik;
color: #747474;
}

 input::placeholder{
    padding-left:10px;
   
}
button{
    width: 151PX;
    height: 43PX;
    background: #D8AE25 0% 0% no-repeat padding-box;
    border-radius: 4px;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
}
textarea{
    width: 435px;
    height: 120px;
    border: none;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    font: normal normal normal 14px/20px Rubik;
color: #747474;
margin-bottom:15px;
}
textarea::placeholder{
    padding:10px 10px;

}
`
const TextArea=styled.div`

`
const PostForm = () => {
    const closeFormState =useContext(Cardlistcontext);
    const image1 = useRef();
    const [showImg,setshowImg]=useState(img.upload);

    useEffect(()=>{
        image1.current.style.width='200px';
        image1.current.style.height='200px';
    },[showImg])


    useEffect(()=>{
        image1.current.style.width='34px';
        image1.current.style.height='26px';
    },[])

    const uploadpic=(e)=>{
        if(e.target.files[0]==undefined)
        {
            // console.log(e.target.files[0])
        } else{
           setshowImg(URL.createObjectURL(e.target.files[0]));
                        }
    }
    const closePostForm =()=>{
        closeFormState.setCardlistClose(!closeFormState.cardlistClose)
    }
    return (
            <MainContainer>
            <PhotoContainer>
              <Para>Upload Image</Para> 
              <Image>
              <label htmlFor="file" >
              <img ref={image1} id="blah" src={showImg} alt="your image" />
              </label>
              <input type="file"  accept="image/*" name="image"  id="file" onChange={uploadpic} ></input>
              </Image>
            </PhotoContainer>
            <FormContainer>
                {/* <label>Name </label> <br/> */}
                <input type='text' placeholder='Name'/> <br/>
                {/* <label>Main Heading </label> <br/> */}
                <input type='text' placeholder='Main Heading'/> <br/>
                {/* <label>Discription </label> <br/> */}
                <TextArea>
                <textarea placeholder='Discription'/>
                </TextArea>

                {/* </textarea>    */}
                {/* <input type='text' placeholder='Discription' /> <br/> */}
                {/* <label>Meeting Link </label> <br/> */}
                <input type='text' placeholder='Meeting Link' /> <br/>
                <button onClick={closePostForm}>
                 Publish
                </button>
            </FormContainer>
        </MainContainer>
    )
}
export default PostForm;
