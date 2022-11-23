import React, {useEffect} from "react";
import {Alert, Box, Collapse} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";

export default function ResponseMessage(props) {
    const { message,
        isLoading,
        isSuccess
    } = props.state


    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={message}>
                <Alert
                    color={isSuccess ? "success": "error"}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                props.setClose && props.setClose(false);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {message}
                </Alert>
            </Collapse>
        </Box>
    );
}