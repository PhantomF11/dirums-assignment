import Task from "./Task";
import { 
    Typography,
    Box
} from "@mui/material";

export default function TaskList({data, title}) {
    return (
        <Box>
            <Typography variant="h6">{title}</Typography>

            <Box display="flex" flexDirection="column">
                {data?.map((task, idx) => (
                    <Task desc={task?.desc} date={task?.date} key={idx} />
                ))}
            </Box>
        </Box>
    )
};
