import React from 'react';
import Navbar from './Utils/Navbar';
import SideNav from './Utils/SideNav';
import CardList from './Components/Jewellery/CardList';
import styled from 'styled-components';
import GlobalStyle from './Utils/GlobalStyle';
import CardlistState from './ContextApi/CardlistState';
import Searchbar from './Utils/Searchbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onbordinglist from './Components/Jewellery/Onbordinglist/Onbordinglist';
import Form from './Components/Jewellery/Onbordinglist/Form';
import PostList from './Components/AddPost/PostList';
import PostForm from './Components/AddPost/PostForm';
import Login from './Pages/LoginPage/Login';
import LastNameList from './Components/LastNameList/LastNameList';
import AddLastNamepopup from './Components/LastNameList/AddLastNamepopup';
import Upload from './Components/LastNameList/upload';
import OnlySearchbar from './Utils/OnlySearchbar';
import PaymentStatus from './Components/Payment/PaymentStatus';
import Messages from './Pages/Messages/Messages';
import ForgetPassword from './Pages/LoginPage/ForgetPassword';

const App = () => {
 
    return(
        <BrowserRouter> 
<CardlistState>
        <GlobalStyle/>
        <Navbar/>
     =
<Routes>
     <Route path='/' element={<Login/>}/>
</Routes>
            {/* <CardList/> */}
    {/* <Login/> */}
     {/* <AddLastNamepopup/> */}
   {/* <Upload/> */}
     {/* <OnlySearchbar/> */}
     {/* <PaymentStatus/> */}
      
        <Routes>
 <Route path='/matrimonylist' element={ <CardList/>}/>
 </Routes>
   <Routes>
 <Route path='/onbordinglist' element={ <Onbordinglist/>}/>
 </Routes>
 <Routes>
 <Route path='/postlist' element={ <PostList/>}/>
 </Routes>
 <Routes>
   <Route path='/lastnamelist' element={<LastNameList/>}/>
 </Routes>
 <Routes>
   <Route path='/paymentstatus' element={ <PaymentStatus/>}/>
 </Routes>
 <Routes>
   <Route path='/messages' element={ <Messages/>}/>
 </Routes>
 <Routes>
   <Route path='/forgetpassword' element={ <ForgetPassword/>}/>
 </Routes>
 </CardlistState>
  
  
  </BrowserRouter> 
    );
}
export default App;