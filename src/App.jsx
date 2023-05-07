import Header from './components/Header';
import {  Box } from '@mui/material';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { useState } from 'react';

export default function App() {
  const [newTask, setNewTask] = useState(null);
  return (
    <Box display="grid" gridTemplateColumns="auto 1fr" gap={0.5}>
      <Box sx={{ 
        heigth: '100%', 
        minWidth: "5vw",
        backgroundImage: "url(http://www.logoed.co.uk/wp-content/uploads/2023/03/Screenshot-2023-03-07-at-20.44.07.png)",
        backgroundPosition: "center center",
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat"
      }}>
      </Box>
      
      <Header setNewTask={setNewTask} />

      <SideBar /> 

      <Main newTask={newTask} />
    </Box>
  )
}