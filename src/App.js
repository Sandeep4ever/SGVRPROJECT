import React from 'react';
import './App.css'
import Navbar from './Utils/Navbar';
import SideNav from './Utils/SideNav';
import GlobalStyle from './Utils/GlobalStyle';
import CardlistState from './ContextApi/CardlistState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onbordinglist from './Components/Jewellery/Onbordinglist/Onbordinglist';
import PostList from './Components/AddPost/PostList';
import LastNameList from './Components/LastNameList/LastNameList';
import PaymentStatus from './Components/Payment/PaymentStatus';
import Messages from './Pages/Messages/Messages';
import ForgetPassword from './Pages/LoginPage/ForgetPassword';
import Matrimony from './Components/Matrimony/Matrimony';
import Groom from './Components/Matrimony/Groom/Groom';
import GroomonboardingData from './Components/Matrimony/Groom/GroomonboardingData';

const App = () => {
 
    return(
        <BrowserRouter> 
<CardlistState>
        <GlobalStyle/>
        <Navbar/>
<Routes>
     <Route path='/' element={<SideNav/>}/>
</Routes>
            {/* <CardList/> */}
    {/* <Login/> */}
     {/* <AddLastNamepopup/> */}
   {/* <Upload/> */}
     {/* <OnlySearchbar/> */}
     {/* <PaymentStatus/> */}
      {/* <VendorDetails/> */}
      {/* <MatrimonyLink/> */}
      <GroomonboardingData/>
 <Routes>
      <Route path='/matrimonylist' element={ <Matrimony/>}/>
 </Routes>
 <Routes>
      {/* <Route path='/groom' element={ <Groom/>}/> */}
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