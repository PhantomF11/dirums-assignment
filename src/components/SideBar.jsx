import { Box, Stack, Button } from "@mui/material";

export default function SideBar() {
    return (
        <>
            <Box display="flex" flexDirection="column" 
                alignItems="center" backgroundColor="#f1f0f2"
                minHeight="100vmax" >
                <Stack >
                    <SideBarItem />
                    <SideBarItem />
                    <SideBarItem />
                    <SideBarItem />
                    <SideBarItem borderStyle="none"/>
                </Stack>
            </Box>
        </>
    )
}


function SideBarItem(props) {
    return <Box borderBottom={props?.borderStyle || "1px solid #3e3e3e" }
        padding={1}>
            <Button color="inherit" fullWidth>Home</Button>
        </Box>
}