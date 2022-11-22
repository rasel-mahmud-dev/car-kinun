import React, { useState } from "react";
import { Box, Chip, Divider, FormGroup, Modal, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Google } from "@mui/icons-material";
import { Form, Link } from "react-router-dom";
import styles from "../../styles";

const Registration = () => {
    const data = [
        { name: "firstName", label: "First Name", required: true, type: "text", defaultValue: "" },
        { name: "lastName", label: "Last Name", required: false, type: "text", defaultValue: "" },
        { name: "email", label: "Email", required: true, type: "email", defaultValue: "" },
        { name: "password", label: "Password", required: true, type: "password", defaultValue: "" },
        { name: "confirmPassword", label: "confirm Password", required: true, type: "password", defaultValue: "" },
    ];

    function handleSubmit(e) {
        e.preventDefault();

        let payload = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
        };
        console.log(payload);
    }

    return (
        <Box className="container" mt={8}>
            <Typography sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center", mb: 2 }}>Registration Form</Typography>

            <Box sx={{ display: { xs: "block", md: "grid", alignItems: "center" }, gridTemplateColumns: "8fr 10fr" }}>


                <Box width="100%" sx={{ maxWidth: 450, m: "20px auto", p: 3, borderRadius: 2, boxSizing: "border-box" }} className="card-shadow">
                    <Form onSubmit={handleSubmit}>
                        <Box>
                            {data.map((item, index) => (
                                <>
                                    <FormGroup sx={{ mt: 1 }} key={index}>
                                        <TextField required={item.required} name={item.name} label={item.label} type={item.type} variant="standard" />
                                    </FormGroup>
                                </>
                            ))}

                            <Button type="submit" fullWidth={true} variant="contained" sx={{ mt: 2 }}>
                                Create Account
                            </Button>

                            <Divider sx={{ mt: 4 }}>
                                <Chip label="Or" />
                            </Divider>

                            <Box>
                                <Button fullWidth={true} variant="contained" color="red" sx={{ mt: 2, display: "flex", alignItems: "center", gap: "4px" }}>
                                    <Google sx={{ fontSize: "18px" }} />
                                    Login With Google
                                </Button>
                                <Button fullWidth={true} color="blue" variant="contained" sx={{ mt: 2, display: "flex", alignItems: "center", gap: "4px" }}>
                                    <Google sx={{ fontSize: "18px" }} />
                                    Login With Google
                                </Button>

                                <Box mt={3} mb={2} display="flex" justifyContent="center" alignItems="center">
                                    <Typography fontSize={14} color="light.200">
                                        Already have an account?
                                    </Typography>
                                    <Link to="/login">
                                        <Typography sx={{ cursor: "pointer" }} fontSize={14} ml={1} color="blue.main">
                                            login
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Form>
                </Box>

                <img className="w-full" style={{ flexDirection: "column" }} src="/cars/mobile-login-concept-illustration_114360-83.webp" />

            </Box>
        </Box>
    );
};

export default Registration;
