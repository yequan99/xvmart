import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

import xvmartLogo from '../assets/images/xvmart.jpg';
import { categoryProps } from '../types/mainTypes'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar({ categories, setSelectedCategory, cartCount }: { categories: categoryProps[], setSelectedCategory: Dispatch<SetStateAction<string>>, cartCount: number }) {

    const [category, setCategory] = useState("All")

    const handleDropdownChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string)
        setSelectedCategory(event.target.value as string)
    }

    return (
        <div className="fixed top-0 w-full z-50 bg-white">
            <div className="flex flex-row container m-auto mt-4 items-center justify-between">
                <div className="flex items-center justify-center">
                    <Link to="/">
                        {/* eslint-disable-next-line */}
                        <img className="h-16 w-48" src={xvmartLogo} />
                    </Link>
                    <div className="pl-10 pt-2">
                        <FormControl sx={{ minWidth: 160 }}>
                            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Standard"
                                onChange={handleDropdownChange}
                                size="small"
                            >
                                {categories.map((category,index) => (
                                    <MenuItem key={index} value={category.Name}>{category.Name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <Link to="/cart">
                    <Badge badgeContent={cartCount} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                </Link>
            </div>
        </div>
    )
}