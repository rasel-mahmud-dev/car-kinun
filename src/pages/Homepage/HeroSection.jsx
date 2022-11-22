import React from 'react';
import {Box, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";


const HeroSection = () => {
    return (
        <div>
            <div className="hero-root">

                <div className="container">
                    <Box position="absolute" maxWidth={700} top="20%">
                        <Typography component="h1" fontSize={90} fontWeight={"bold"} lineHeight={0.9} color="primary">
                            Find your
                            dream car
                        </Typography>

                        <Typography component="p" fontSize={20} maxWidth={500} color="light.200" mt={4}>
                            We can help you find the best car. Check our reviews, compare models and find cars for sale.
                        </Typography>

                    </Box>
                </div>


                <img className="hero-car-image" src="/car-silver.png" alt=""/>
            </div>
        </div>
    );
};

export default HeroSection;