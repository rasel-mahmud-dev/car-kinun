import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {
    Autocomplete,
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia, FormControl,
    Grid,
    InputLabel,
    Pagination, Select,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {AddShoppingCart, Money, ShoppingBag, ShoppingCart} from "@mui/icons-material";
import {motion} from "framer-motion";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import axios, {backend} from "../../axios";
import MenuItem from "@mui/material/MenuItem";
import scrollTop from "../../utils/scrollTop";

const Cars = () => {
    const [selectBrand, setSelectBrand] = useState("All");

    const brands = [{name: "All"}, {name: "BMW"}, {name: "Ferrari"}, {name: "Cadillac"}, {name: "Audi"}];

    const [pagination, setPagination] = useState({
        currentPage: 1,
        perPage: 10,
        totalItems: 30000,
    })

    const queryClient = useQueryClient()

    // Queries
    const {data, refetch} = useQuery({
        queryKey: ['cars', pagination.perPage, pagination.currentPage],
        queryFn: async ()=> {
            let query = `perPage=${pagination.perPage}&currentPage=${pagination.currentPage}`
            return await axios.get("/api/v1/cars?"+query).then(res => res.data)
        }
    })


    // Queries for fetch total cars
    const {data: totalCars} = useQuery({
        queryKey: ['total-cars'],
        queryFn: async ()=> {
            return await axios.get("/api/v1/cars/count").then(res => res.data)
        }
    })

    useEffect(()=>{
        setPagination(prev=>({...prev, totalItems: totalCars}))
    }, [totalCars])


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

    function handleFilterByBrand(e, value) {
        let index = e.target.value
        if (!isNaN(Number(index))) {
            setSelectBrand(defaultProps.options[index].title)
        } else {
            setSelectBrand("All")
        }
    }

    function showPages() {

    }

    function handlePageChange(e, page) {
        setPagination({...pagination, currentPage: page})
    }

    let filtered = data;
    if (selectBrand !== "All") {
        filtered = data.filter((car) => car.brand === selectBrand)
    }

    useEffect(() => {
        scrollTop()
        refetch()

    }, [pagination.currentPage, pagination.perPage])


    function changeShowPerPage(e){
        setPagination((prevState)=>({...prevState, perPage: e.target.value}))
    }

    return (
        <Box className="container section" id="cars">
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {xs: "1fr", md: "1fr 1fr"},
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                <Box>
                    <Typography component="h1" fontSize={40} fontWeight={"bold"} lineHeight={0.9} color="dark.300">
                        Cars
                    </Typography>

                    <Typography component="h6" fontSize={14} mt={1} fontWeight={500} color="dark.100">
                        Show result {filtered?.length} in {pagination.totalItems}
                    </Typography>

                </Box>

                <Box display="flex" justifyContent="flex-end" sx={{gap: '20px'}}>

                    <FormControl  variant="standard" fullWidth={true}>
                        <InputLabel id="demo-simple-select-standard-label" sx={{px: 2}}>Show items</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="perPage"
                            label={"Show items"}
                            variant="outlined"
                            value={pagination.perPage}
                            size="small"
                            onChange={changeShowPerPage}
                        >
                            {new Array(10).fill(1).map((_, opt) => (
                                <MenuItem value={    (opt + 1) * 5} key={opt}>
                                    {(opt + 1) * 5}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                    <Autocomplete
                        {...flatProps}
                        id="flat-demo"
                        fullWidth={true}
                        onChange={handleFilterByBrand}
                        renderInput={(params) => (
                            <TextField {...params} fullWidth={true} label="Filter with Brand"        size="small" variant="outlined"/>
                        )}
                    />
                </Box>

            </Box>

            <Box mt={5} sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: {xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}
            }}>
                {filtered?.map((car, index) => (

                        <Card className="card-shadow" sx={{borderRadius: 3}}>
                            <CardMedia component="img"  className="w-full card-image" image={car.image} alt="green iguana"/>

                            <CardContent sx={{paddingBottom: "0!important"}}>
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
                                    <ShoppingCart sx={{fontSize: "18px", mr: "2px"}}/>
                                    Add To Cart
                                </Button>
                                <Button size="small" variant="outlined">
                                    <Money sx={{fontSize: "18px", mr: "2px"}}/>
                                    Buy Now
                                </Button>
                            </CardActions>
                        </Card>

                ))}
            </Box>

            <Box display="flex" justifyContent="center" mt={5} mb={10}>
                <Pagination page={pagination.currentPage} onChange={handlePageChange} count={pagination.totalItems}
                            variant="outlined" color="primary"/>
            </Box>

        </Box>
    );
};

export default Cars;
