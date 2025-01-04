import React from 'react';
import {
  
  Box,
  
} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Account/Login';
import Landing from './Pages/Account/Landing';
import LockScreen from './Pages/Account/LockScreen';
import LoggedIn from './Pages/Account/LoggedIn';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import SmallTableCard from './Constants/SmallTableCard';
import LargeTableCard from './Constants/LargeTableCard';
import TableDashboard from './Pages/Table/TableDashboard';




function App() {
  return (
    
      <Box >
   
        <Routes>

        <Route index element={<Login/>} />
        <Route path="/loggedin" element={<LoggedIn/>} />
        <Route path="/login" element={<Landing/>} />
        <Route path="/lock" element={<LockScreen/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/stable" element={<SmallTableCard />} />
        <Route path="/ltable" element={<LargeTableCard />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table" element={<TableDashboard />} />
       
        </Route>
        </Routes>
    
      </Box>
  )
   
}


export default App;
