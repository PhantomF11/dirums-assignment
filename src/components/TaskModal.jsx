import { 
    Dialog,
    DialogTitle,
    TextField,
    Typography,
    Button,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    Box
} from "@mui/material";
import { useState } from 'react';

export default function TaskModal({ open, handleClose, setNewTask }) {
    
    const [tasks, setTasks] = useState([]);
    const [taskDsc, setTaskDsc] = useState("");
    const [taskStatus, setTaskStatus] = useState("to-do");
    const [taskDueDate, setTaskDueDate] = useState("");

    function addTasks() {
        if (taskDsc !== "" && taskStatus !== "" && taskDueDate !== "") {
            const task = {desc: taskDsc, date: taskDueDate, status: taskStatus}

            setTasks(prev => ([...prev, task]))
            localStorage.setItem("tasksList", JSON.stringify(tasks))
            console.log(localStorage.getItem("tasksList"));

            setNewTask(prev => (prev + 1))

            handleClose()
        }
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <Box padding={2} display="flex" flexDirection="column" gap={1}>
                    <DialogTitle><Typography variant="h5">Create a Task</Typography></DialogTitle>

                    <TextField variant="standard" label="Add Task Description" required
                        multiline minRows={2} onInput={e => {setTaskDsc(e.target.value);}}/>
                    
                    <FormControl required>
                        <FormLabel>Select Task Status</FormLabel>
                        <RadioGroup defaultValue="to-do" row onChange={e => {setTaskStatus(e.target.value)}}>
                            <FormControlLabel value="to-do" label="To Do" control={<Radio />}/>
                            <FormControlLabel value="in-progress" label="In Progress" control={<Radio />}/>
                            <FormControlLabel value="done" label="Task Done" control={<Radio />}/>
                        </RadioGroup>
                    </FormControl>

                    <FormLabel style={{}}>
                        <Typography variant="body1">Due Date*</Typography>
                        <input type="date" style={{display: "block"}} required onChange={e => {setTaskDueDate(e.target.value);}}/>
                    </FormLabel>

                    <Button variant="contained" onClick={addTasks}>Create Task</Button>
                </Box>
            </Dialog>
        </>
    )
};
