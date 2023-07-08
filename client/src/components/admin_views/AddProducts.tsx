import { useState, ChangeEvent } from 'react'
import { ProductProps, CategoryProps, AddProductProps } from '../../types/mainTypes'
import { TextField, MenuItem, Button, Alert, CircularProgress } from '@mui/material';
import { AddProduct } from '../../hooks/AddProduct';

export default function AddProducts({categories}: { categories: CategoryProps[] }) {

    const [productDetail, setProductDetail] = useState<ProductProps>({Name: "", Category: "", Price: 0, Quantity: 0, Description: "", ID: "", PictureName: "", ImageURL: ""})
    const [submit, setSubmit] = useState<boolean>(false)
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductDetail({ ...productDetail, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        setSubmit(true)
        const product: AddProductProps = {
            Name: productDetail.Name,
            Category: productDetail.Category,
            Price: productDetail.Price,
            Quantity: productDetail.Quantity,
            Description: productDetail.Description,
            Picture_Name: productDetail.PictureName
        }
        AddProduct(product)
    }

    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 w-full mb-4 rounded-lg flex justify-center items-center">
                <h1>
                    This page is for you to add new products. Picture name would be the name of the file. E.g. if the uploading file name is 'milo.jpeg', Picture Name would be 'milo'
                </h1>
            </div>
            <h1>Product Details:</h1>
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
                <div className="my-4">
                    <TextField
                        sx={{ width: "200px" }}
                        label="Picture Name"
                        size="small"
                        type="text"
                        name="PictureName"
                        value={productDetail.PictureName}
                        onChange={handleChange}
                    />
                </div>
                <Button color="success" variant="contained" onClick={handleSubmit}>Add Product</Button>
            </form>
            <div className={`w-fit pt-4 ${submit ? "" : "hidden"}`}>
                <Alert severity="success">
                    <div className="flex justify-between">
                        <h1>Added {productDetail.Name}. Redirecting you</h1>
                        <CircularProgress />
                    </div>
                </Alert>
            </div>
        </div>
    )
}