import React from 'react';
import {TextField} from "@mui/material";

const Login = () => {
    return (
        <div>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
            />
        </div>
    );
};

export default Login;