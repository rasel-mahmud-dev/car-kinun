import React, {useState} from "react";
import {
    Box,
    Chip,
    Divider,
    FormControl,
    FormGroup, Input, InputBase,
    InputLabel,
    Modal,
    Select,
    TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import {Google} from "@mui/icons-material";
import {Form, Link} from "react-router-dom";
import styles from "../../styles";
import MenuItem from "@mui/material/MenuItem";
import axios from "../../axios";

const Login = () => {
    const [data, setData] = useState({
        name: {label: "Enter name", required: true, type: "text", value: ""},
        model: {label: "Enter model", required: true, type: "text", value: ""},
        price: {label: "Enter price", required: true, type: "number", value: ""},
        image: { label: "Enter Image", required: true, type: "file", value: "" },
        brand: {label: "Enter brand", required: true, type: "select", value: "", options: ["Car", "Nba"]},
        // userId: { label: "Enter Password", required: true, type: "text", value: "" },
        description: {label: "Description", required: true, type: "text", multiline: true, value: ""},
        // attributes: { label: "Enter Password", required: true, type: "password", value: "" },
    });

    const [openPasswordResetModal, setOpenPassResetModal] = useState(false);


    function imageUpload(){

    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("/api/v1/cars", {
            name: data.name.value,
            model: data.model.value,
            price: data.price.value,
            image: "",
            brand: data.brand.value,
            description: data.description.value,
            userId: 12312321,
            attributes: {autoPilot: true}
        }).then(r => {
            console.log(r)
        })
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

    function passwordResetModal() {
        return (
            <Modal open={openPasswordResetModal} onClose={handleClose} aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={styles.modal}>
                    <Typography sx={{fontSize: 30, fontWeight: "bold", textAlign: "center"}}>Login Form</Typography>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Box sx={{mt: 1}}>
                                <TextField fullWidth={true} required={true} name="email" label="Your email"
                                           type={"email"} variant="standard"/>
                            </Box>
                        </FormGroup>
                        <Button type="submit" fullWidth={true} variant="contained" sx={{mt: 2}}>
                            Reset Password
                        </Button>
                    </Form>
                </Box>
            </Modal>
        );
    }

    return (
        <Box className="container" mt={4}>
            {passwordResetModal()}

            <Typography sx={{fontSize: 30, fontWeight: "bold", textAlign: "center"}}>Add Car</Typography>

            <Box width="100%" sx={{maxWidth: 600, m: "20px auto", p: 3, borderRadius: 2, boxSizing: "border-box"}}
                 className="card-shadow">


                <Form onSubmit={handleSubmit}>
                    <Box>
                        {Object.keys(data).map((key) => (
                            <div key={key}>
                                {data[key].type === "select" ? (
                                    <FormControl sx={{mt: 1}} variant="standard" fullWidth={true}>
                                        <InputLabel id="demo-simple-select-standard-label" required={data[key].required}>{data[key].label}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            name={key}
                                            label={data[key].label}
                                            onChange={handleChange}
                                            value={data[key].value}

                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {data[key]?.options.map(opt => (
                                                <MenuItem value={opt} key={opt}>
                                                    {opt}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                ):  (
                                    <FormGroup sx={{mt: 1}} key={key}>
                                        <TextField
                                            multiline={!!data[key].multiline}
                                            onChange={handleChange}
                                            value={data[key].value}
                                            required={data[key].required}
                                            name={key}
                                            label={data[key].label}
                                            type={data[key].type}
                                            variant="standard"
                                        />
                                    </FormGroup>
                                )}
                            </div>
                        ))}

                        <Button type="submit" fullWidth={true} variant="contained" sx={{mt: 2}}>
                            Add Car
                        </Button>

                    </Box>
                </Form>

            </Box>
        </Box>
    );
};

export default Login;
