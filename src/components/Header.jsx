import { useState } from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Button,
    Avatar,
    Typography,
    SvgIcon
} from "@mui/material";
import TaskModal from './TaskModal';

const Header = ({setNewTask}) => {
    const [taskModel, setTaskModel] = useState(false);

    function handleTaskClick() {
        setTaskModel(true)
    }
    function handleTaskClose() {
        setTaskModel(false)
    }

    return ( 
        <Box sx={{  }} >
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Button variant="contained" color="primary"
                        sx={{ marginRight: 'auto' }}
                        onClick={handleTaskClick}>
                        <AddIcon />
                        Create Task
                    </Button>

                    <TaskModal open={taskModel} handleClose={handleTaskClose} setNewTask={setNewTask}></TaskModal>

                    <HeaderAvatar 
                        alt="Carrie Chapman" />
                </Toolbar>
            </AppBar>
        </Box>
     );
}

function HeaderAvatar({src, alt}) {
    return <>
        <Typography align="left" sx={{ marginRight: 1, 
            backgroundColor: "white", padding: 1, 
            borderRadius: 2 }}>{alt}</Typography>
        <Avatar alt={alt} />
    </>}

function AddIcon() {
    return <SvgIcon sx={{ marginRight: 1 }}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" 
            strokeWidth={2}>
            <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/>
        </svg>
    </SvgIcon>
}
 
export default Header;