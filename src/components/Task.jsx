import { 
    Card,
    Typography
} from "@mui/material";

export default function Task({desc, date}) {
    return (
        <>
            <Card sx={{ padding: 2, marginTop: 1 }}>
                <Typography variant="body2">{desc ?? "impossible"}</Typography>
                <Typography variant="body2">{date ?? "impossible"}</Typography>
            </Card>
        </>
    )
};
