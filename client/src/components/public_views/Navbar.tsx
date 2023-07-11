import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

import xvmartLogo from '../../assets/images/xvmart.jpg';
import { CategoryProps } from '../../types/mainTypes'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar({ categories, setSelectedCategory, cartCount }: { categories: CategoryProps[], setSelectedCategory: Dispatch<SetStateAction<string>>, cartCount: number }) {

    const [category, setCategory] = useState("All")

    const handleDropdownChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string)
        setSelectedCategory(event.target.value as string)
    }

    return (
        <div className="fixed top-0 w-full z-10 bg-white">
            <div className="flex flex-row container m-auto pt-2 items-center justify-between pl-2 md:pl-0 pr-6 md:px-0">
                <div className="flex items-center justify-center">
                    <Link to="/">
                        {/* eslint-disable-next-line */}
                        <img className="md:h-16 md:w-48 h-12 w-36" src={xvmartLogo} />
                    </Link>
                    <div className="hidden pt-2 pl-10 sm:block">
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