import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductProps, CategoryProps } from '../../types/mainTypes'
import { TextField, MenuItem, Button, Alert } from '@mui/material';
import { AddProduct } from '../../hooks/postReq/AddProduct';

export default function AddProducts({categories}: { categories: CategoryProps[] }) {

    const [productDetail, setProductDetail] = useState<ProductProps>({Name: "", Category: "", Price: 0, Quantity: 0, Description: ""})
    const [submit, setSubmit] = useState<boolean>(false)
    const navigate = useNavigate()
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductDetail({ ...productDetail, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        setSubmit(true)
        AddProduct(productDetail, navigate)
    }

    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 w-full mb-4 rounded-lg flex justify-center items-center">
                <h1>
                    This page is for you to add new products.
                </h1>
            </div>
            <h1>Producy Details:</h1>
            <form>
                <div className="my-4">
                    <TextField
                        sx={{ width: "200px" }}
                        label="Name"
                        size="small"
                        type="text"
                        name="Name"
                        value={productDetail.Name}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-4">
                    <TextField
                        select
                        sx={{ width: "200px" }}
                        label="Category"
                        size="small"
                        type="text"
                        name="Category"
                        value={productDetail.Category}
                        onChange={handleChange}
                    >
                        {categories.map((item,index) => (
                            item.Name !== "All" &&
                            <MenuItem key={index} value={item.Name}>{item.Name}</MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="my-4">
                    <TextField
                        sx={{ width: "200px" }}
                        label="Price"
                        size="small"
                        type="number"
                        name="Price"
                        value={productDetail.Price === 0 ? '' : productDetail.Price}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-4">
                    <TextField
                        sx={{ width: "200px" }}
                        label="Quantity"
                        size="small"
                        type="number"
                        name="Quantity"
                        value={productDetail.Quantity === 0 ? '' : productDetail.Quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-4">
                    <TextField
                        sx={{ width: "200px" }}
                        label="Description"
                        size="small"
                        type="text"
                        name="Description"
                        value={productDetail.Description}
                        onChange={handleChange}
                    />
                </div>
                <Button color="success" variant="contained" onClick={handleSubmit}>Add Product</Button>
            </form>
            <div className={`w-fit pt-4 ${submit ? "" : "hidden"}`}>
                <Alert severity="success">Added {productDetail.Name}</Alert>
            </div>
            
        </div>
    )
}