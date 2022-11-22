import React, { useState } from "react";
import { Box, Chip, Divider, FormGroup, Modal, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Google } from "@mui/icons-material";
import { Form, Link } from "react-router-dom";
import styles from "../../styles";

const Login = () => {
    const [data, setData] = useState({
        email: { label: "Enter Email", required: true, type: "email", value: "" },
        password: { label: "Enter Password", required: true, type: "password", value: "" },
    });

    const [openPasswordResetModal, setOpenPassResetModal] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        let payload = {
            email: data.email.value,
            password: data.password.value,
        };
        console.log(payload);
    }

    function handleClose() {
        setOpenPassResetModal(!openPasswordResetModal);
    }

    function handleChange(e) {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: {
                ...prevState[e.target.name],
                value: e.target.value,
            },
        }));
    }

    function handleFillFakeUserData() {
        setData({
            ...data,
            email: {
                ...data.email,
                value: "rasel@gmail.com",
            },
            password: {
                ...data.password,
                value: "rasel@123",
            },
        });
    }

    function passwordResetModal() {
        return (
            <Modal open={openPasswordResetModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={styles.modal}>
                    <Typography sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Login Form</Typography>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Box sx={{ mt: 1 }}>
                                <TextField fullWidth={true} required={true} name="email" label="Your email" type={"email"} variant="standard" />
                            </Box>
                        </FormGroup>
                        <Button type="submit" fullWidth={true} variant="contained" sx={{ mt: 2 }}>
                            Reset Password
                        </Button>
                    </Form>
                </Box>
            </Modal>
        );
    }

    return (
        <Box className="container" mt={8}>
            {passwordResetModal()}

            <Typography sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Login Form</Typography>

            <Box sx={{ display: { xs: "block", md: "grid", alignItems: "center" }, gridTemplateColumns: "8fr 10fr" }}>
                <img className="w-full" style={{flexDirection: 'column'}} src="/cars/mobile-login-concept-illustration_114360-83.webp" />

                <Box width="100%" sx={{maxWidth: 450, m: "20px auto", p: 3, borderRadius: 2, boxSizing: "border-box" }} className="card-shadow">

                    <Form onSubmit={handleSubmit}>
                        <Box>
                            {Object.keys(data).map((key) => (
                                <>
                                    <FormGroup sx={{ mt: 1 }} key={key}>
                                        <TextField
                                            onChange={handleChange}
                                            value={data[key].value}
                                            required={data[key].required}
                                            name={key}
                                            label={data[key].label}
                                            type={data[key].type}
                                            variant="standard"
                                        />
                                    </FormGroup>
                                </>
                            ))}

                            <Box mt={4} display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center">
                                    <Typography fontSize={14} color="light.200">
                                        Forgot password ?
                                    </Typography>
                                    <Typography onClick={() => setOpenPassResetModal(true)} sx={{ cursor: "pointer" }} fontSize={14} ml={1} color="blue.main">
                                        Click to reset
                                    </Typography>
                                </Box>
                                <Button onClick={handleFillFakeUserData} sx={{ textTransform: "capitalize" }} color="blue" variant="contained" size={"small"}>
                                    Use Fake User
                                </Button>
                            </Box>

                            <Button type="submit" fullWidth={true} variant="contained" sx={{ mt: 2 }}>
                                Login
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
                                        Not a member?
                                    </Typography>
                                    <Link to="/registration">
                                        <Typography sx={{ cursor: "pointer" }} fontSize={14} ml={1} color="blue.main">
                                            create an account
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
