import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { AddShoppingCart, Money, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { motion } from "framer-motion";

const PopularCars = () => {
    const cars = [
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link1", brand: "Cadillac", release: "2007" },
        { logo: "/cars/hero-car-3.png", price: 12313, name: "vehica-car-card-link123", brand: "BMW", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link344", brand: "Ferrari", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link2", brand: "BMW", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link13", brand: "Audi", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link1231", brand: "Ferrari", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link12123123", brand: "BMW", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link11123sa2", brand: "Cadillac", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link2213123", brand: "Audi", release: "2007" },
    ];

    const [selectBrand, setSelectBrand] = useState("All");

    const brands = [{ name: "All" }, { name: "BMW" }, { name: "Ferrari" }, { name: "Cadillac" }, { name: "Audi" }];

    let filtered = cars;
    if (selectBrand !== "All") {
        filtered = cars.filter((car) => car.brand === selectBrand)
    }

    return (
        <Box className="container section" id="cars">
            <Box sx={{ display: { xs: "block", md: "flex" }, justifyContent: "space-between", alignItems: "center" }}>
                <Typography component="h1" textAlign={{ xs: "center" }} fontSize={40} fontWeight={"bold"} lineHeight={0.9} color="dark.300">
                    Popular Cars
                </Typography>

                <Grid display="flex" sx={{ gap: 2, justifyContent: { xs: "center" } }} mt={{ xs: 4, md: 0 }}>
                    {brands.map((brand) => (
                        <Button onClick={() => setSelectBrand(brand.name)} variant={selectBrand === brand.name ? "contained" : "outlined"}>
                            {brand.name}
                        </Button>
                    ))}
                </Grid>
            </Box>

            <Box mt={5} sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" } }}>
                {filtered?.map((car, index) => (
                    <motion.div layoutId={car.name} key={car.name} layout transition={{ duration: 0.5 }}>
                        <Card className="card-shadow" sx={{borderRadius: 3}}>
                            <CardMedia component="img" image={car.logo} alt="green iguana" />

                            <CardContent sx={{ paddingBottom: "0!important" }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {car.brand}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {car.name}
                                </Typography>

                                <Typography color="text.secondary" variant="h6" mt={1} fontWeight={"bold"}>
                                    Tk.{car.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined">
                                    <ShoppingCart sx={{ fontSize: "18px", mr: "2px" }} />
                                    Add To Cart
                                </Button>
                                <Button size="small" variant="outlined">
                                    <Money sx={{ fontSize: "18px", mr: "2px" }} />
                                    Buy Now
                                </Button>
                            </CardActions>
                        </Card>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default PopularCars;
