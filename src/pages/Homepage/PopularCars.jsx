import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import {AddShoppingCart, Money, ShoppingBag, ShoppingCart} from "@mui/icons-material";

const PopularCars = () => {
    const cars = [
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "Cadillac", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "BMW", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "Ferrari", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "BMW", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "Audi", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "Ferrari", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "BMW", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "Cadillac", release: "2007" },
        { logo: "/cars/apps-bg.png", price: 12313, name: "vehica-car-card-link", brand: "Audi", release: "2007" },
    ];

    const [selectBrand, setSelectBrand] = useState("All");

    const brands = [{ name: "All" }, { name: "BMW" }, { name: "Ferrari" }, { name: "Cadillac" }, { name: "Audi" }];

    let filtered = cars;
    if (selectBrand !== "All") {
        filtered = cars.filter((car) => car.brand === selectBrand);
    }

    return (
        <Box mt={15} className="container">
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

            <Box mt={5} sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" } }}>
                {filtered?.map((car) => (
                    <Card className="card-shadow">
                        <CardMedia component="img" image={car.logo} alt="green iguana" />

                        <CardContent sx={{paddingBottom: '0!important'}}>
                            <Typography gutterBottom variant="h6" component="div">
                                {car.brand}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {car.name}
                            </Typography>

                            <Typography color="text.secondary" variant="h6" mt={1} fontWeight={"bold"}>Tk.{car.price}</Typography>



                        </CardContent>
                        <CardActions>
                            <Button size="small">
                                <ShoppingCart sx={{fontSize: "18px", mr: "2px"}}/>
                                Add To Cart</Button>
                            <Button size="small">
                                <Money sx={{fontSize: "18px", mr: "2px"}}/>
                                Buy Now</Button>
                        </CardActions>

                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default PopularCars;
