import React from "react";
import Typography from "@mui/material/Typography";
import {Box, Card, CardActions, CardContent, CardMedia, Chip} from "@mui/material";
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import {Money, ShoppingCart} from "@mui/icons-material";

const Upcoming = () => {

    const upcomingCars = [
        { logo: "/cars/apps-bg.png", name: "Philosophy that addresses topics such as Goodness", date: 'Coming on 02 jan 2025', desc: "Struggling to sell onee currently on the market won't stop actress and singer...", brand: "Audi" },
        { logo: "/cars/apps-bg.png", name: "Philosophy that addresses topics such as Goodness", date: 'Coming on 01 may 2024', desc: "Struggling to sell onee currently on the market won't stop actress and singer...", brand: "Audi" },
        { logo: "/cars/apps-bg.png", name: "Philosophy that addresses topics such as Goodness", date: 'Coming on 12 march 2023', desc: "Struggling to sell onee currently on the market won't stop actress and singer...", brand: "Audi" },
    ]

    return (
        <Box className="container section" id="cars">

                <Typography
                    component="h1"
                    textAlign="center"
                    fontSize={40}
                    fontWeight={"bold"}
                    lineHeight={0.9}
                    color="dark.300"
                >
                    Upcoming Cars
                </Typography>

            <Box mt={5} sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" } }}>
                {upcomingCars?.map((car, index) => (
                    <motion.div layoutId={car.name} key={car.name} layout transition={{ duration: 0.5 }}>
                        <Card className="card-shadow" sx={{borderRadius: 3}}>
                            <CardMedia component="img" image={car.logo} alt="green iguana" />

                            <CardContent >

                                <Typography variant="body2" color="text.secondary" mb={1}>
                                    {car.brand}
                                </Typography>

                                <Typography gutterBottom fontWeight='bold' variant="h6" lineHeight={1.3} component="div">
                                    {car.name}
                                </Typography>
                                 <Typography variant="p" color="dark.200"  component="p">
                                    {car.desc}
                                </Typography>
                                <Chip sx={{mt:2, color: "white"}} label={car.date} color="primary" />



                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </Box>

        </Box>
    );
};

export default Upcoming;