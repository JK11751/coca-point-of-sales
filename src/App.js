import React from 'react';
import {
  
  Box,
  
} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Account/Login';
import Landing from './Pages/Account/Landing';
import LockScreen from './Pages/Account/LockScreen';
import LoggedIn from './Pages/Account/LoggedIn';

function App() {
  return (
    
      <Box >
        <Routes>

        <Route index element={<Login/>} />
        <Route path="/loggedin" element={<LoggedIn/>} />
        <Route path="/login" element={<Landing/>} />
        <Route path="/lock" element={<LockScreen/>} />
        </Routes>
    
      </Box>
  )
   
}

export default App;
