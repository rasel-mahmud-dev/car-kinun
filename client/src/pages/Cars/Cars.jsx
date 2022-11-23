import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {Autocomplete, Box, Card, CardActions, CardContent, CardMedia, Grid, Pagination, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { AddShoppingCart, Money, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { motion } from "framer-motion";

const Cars = () => {
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

    const [pagination, setPagination] = useState({
        currentPage: 1,
        perPage: 10,
        totalItems: 30000,
    })



    const defaultProps = {
        options: [
            {title: "BMW"},
            {title: "Toyota"},
            {title: "Cadillac"},
            {title: "Ferrari"},
            {title: "Audi"}
        ],
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: defaultProps.options.map((option) => option.title),
    };
    const [value, setValue] = React.useState(null);

    function handleFilterByBrand(e, value){
        let index = e.target.value
        if(!isNaN(Number(index))) {
            setSelectBrand(defaultProps.options[index].title)
        } else {
            setSelectBrand("All")
        }
    }

    function showPages(){

    }

    function handlePageChange(e, page){
        setPagination({...pagination, currentPage: page})
    }

    let filtered = cars;
    if (selectBrand !== "All") {
        filtered = cars.filter((car) => car.brand === selectBrand)
    }

    useEffect(()=>{

    }, [pagination.currentPage, pagination.perPage])



    return (
        <Box className="container section" id="cars">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, justifyContent: "space-between", alignItems: "center" }}>

                <Box>
                    <Typography component="h1"  fontSize={40} fontWeight={"bold"} lineHeight={0.9} color="dark.300">
                        Cars
                    </Typography>

                    <Typography component="h6" fontSize={14} mt={1} fontWeight={500} color="dark.100">
                        Show result 10 in 2000
                    </Typography>

                </Box>

               <Box display="flex" justifyContent="flex-end" sx={{gap: '20px'}}>
                   <Autocomplete
                       {...flatProps}
                       id="flat-demo"
                       fullWidth={true}
                       onChange={showPages}
                       renderInput={(params) => (
                           <TextField {...params} fullWidth={true} label="Show items" variant="standard" />
                       )}
                   />

                   <Autocomplete
                       {...flatProps}
                       id="flat-demo"
                       fullWidth={true}
                       onChange={handleFilterByBrand}
                       renderInput={(params) => (
                           <TextField {...params} fullWidth={true} label="Filter with Brand" variant="standard" />
                       )}
                   />
               </Box>

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

           <Box display="flex" justifyContent="center" mt={5} mb={10}>
               <Pagination page={pagination.currentPage} onChange={handlePageChange}  count={pagination.totalItems}  variant="outlined" color="primary" />
           </Box>

        </Box>
    );
};

export default Cars;
