import { useState, ChangeEvent } from 'react'
import { ProductProps, CategoryProps, AddProductProps } from '../../types/mainTypes'
import { TextField, MenuItem, Button, Alert, CircularProgress } from '@mui/material';
import { AddProduct } from '../../hooks/AddProduct';
import { AiFillDelete } from 'react-icons/ai'
import { getStorage, ref, uploadBytes } from "firebase/storage"

export default function AddProducts({categories}: { categories: CategoryProps[] }) {

    const [productDetail, setProductDetail] = useState<ProductProps>({Name: "", Category: "", Price: 0, Quantity: 0, Description: "", ID: "", Picture_Name: "", ImageURL: ""})
    const [submit, setSubmit] = useState<boolean>(false)
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)
    const [filled, setFilled] = useState<boolean>(true)
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductDetail({ ...productDetail, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        if (productDetail.Name === "" || productDetail.Category === "" || productDetail.Price === 0 || productDetail.Quantity === 0 || productDetail.Description === "" || productDetail.Picture_Name === "" || selectedFile === undefined) {
            setFilled(false)
        }
        else {
            setFilled(true)
            setSubmit(true)
            const product: AddProductProps = {
                Name: productDetail.Name,
                Category: productDetail.Category,
                Price: productDetail.Price,
                Quantity: productDetail.Quantity,
                Description: productDetail.Description,
                Picture_Name: productDetail.Picture_Name
            }
            AddProduct(product)

            const storage = getStorage()
            const imageRef = ref(storage, `products/${productDetail.Picture_Name}`)
            const metadata = {
                contentType: 'image/jpeg',
            }

            const uploadTask = uploadBytes(imageRef, selectedFile, metadata)
        }
    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
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
                        value={productDetail.Picture_Name}
                        onChange={handleChange}
                    />
                </div>
                <Button variant="contained" component="label">
                    Upload Image
                    <input hidden accept="image/*" type="file" name="image" onChange={handleFileSelect} />
                </Button>
                <div className="flex flex-row items-center">
                    {!selectedFile?.name && <span className="pl-4">Choose file to upload</span>}
                    {selectedFile?.name && (
                        <>
                            <span className="px-4"> {selectedFile?.name}</span>
                            <AiFillDelete className="hover:cursor-pointer" onClick={() => setSelectedFile(undefined)} />
                        </>
                    )}
                </div>
                <div className="my-4">
                    <Button color="success" variant="contained" onClick={handleSubmit}>Add Product</Button>
                    <h1 className={`text-red-500 mt-1 ${filled ? "hidden" : ""}`}>Incomplete/Incorrect details!</h1>
                </div>
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