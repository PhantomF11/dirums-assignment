import { 
    Box,
    Typography,
    Stack
} from "@mui/material";
import TaskList from "./TaskList";
import { useState } from "react";
import { useEffect } from "react";

export default function Main({newTask}) {
    const [todoArr, setTodoArr] = useState([]);
    const [inProgArr, setInProgArr] = useState([]);
    const [doneArr, setDoneArr] = useState([]);

    useEffect(() => {
        const mainArr = JSON.parse(localStorage.getItem("tasksList")) ?? []
        setTodoArr(mainArr.filter(task => (task?.status === "to-do")))
        setInProgArr(mainArr.filter(task => (task?.status === "in-progress")))
        setDoneArr(mainArr.filter(task => (task?.status === "done")))
        console.log(todoArr);
    }, [newTask])

    return (
        <Box padding={2}>
            <Typography variant="h4" >Web Development Tracker</Typography>
            <Stack direction="row" spacing={0.5} minWidth="100%" 
                display="flex" justifyContent="space-evenly">
                <TaskList title="To Do" data={todoArr} />
                <TaskList title="In Progress" data={inProgArr} />
                <TaskList title="Task Done" data={doneArr} />
            </Stack>
        </Box>
    )
};
