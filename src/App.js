import React from 'react';
import {
  
  Box,
  
} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Account/Login';
import Landing from './Pages/Account/Landing';
import LockScreen from './Pages/Account/LockScreen';
import LoggedIn from './Pages/Account/LoggedIn';
import Layout from './components/General/Layout';
import TableDashboard from './Pages/Staff/TableDashboard';
import Dashboard from './Pages/Dashboard/Dashboard';







function App() {
  return (
    
      <Box >
        <Routes>
        <Route index element={<Login/>} />
        <Route path="/loggedin" element={<LoggedIn/>} />
        <Route path="/login" element={<Landing/>} />
        <Route path="/lock" element={<LockScreen/>} />

        <Route path="/" element={<Layout />}>
          <Route path="/coffee" element={<Dashboard categoryType="coffee" />} />
          <Route path="/beverages" element={<Dashboard categoryType="beverages" />} />
          <Route path="/food" element={<Dashboard categoryType="food" />} />
          <Route path="/appetizer" element={<Dashboard categoryType="appetizer" />} />
          <Route path="/bread" element={<Dashboard categoryType="bread" />} />
          <Route path="/snack" element={<Dashboard categoryType="snack" />} />

          <Route path="/table" element={<TableDashboard />} />
          
        </Route>
        
       
        </Routes>
    
      </Box>
  )
   
}


export default App;
