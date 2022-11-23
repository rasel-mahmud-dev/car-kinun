import React from 'react';
import {Box, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";


const HeroSection = () => {
    return (
        <section id='hero'>
            <div className="hero-root">

                <div className="container">
                    <Box position="absolute" zIndex={10} maxWidth={700} top="20%">
                        <Typography component="h1" sx={{fontSize: {xs: 40, md: 60, lg: 80}}} fontWeight={"bold"} lineHeight={0.9} color="primary">
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
        </section>
    );
};

export default HeroSection;