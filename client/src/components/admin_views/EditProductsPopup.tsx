import { MdModeEdit } from 'react-icons/md'
import { useState, ChangeEvent } from 'react'
import { CategoryProps, ProductProps } from '../../types/mainTypes'
import { Box, Modal, TextField, Button, MenuItem } from '@mui/material'
import UpdateProduct from '../../api/post/UpdateProduct'
import Redirect from './reusable/Redirect'
import { AiFillDelete } from 'react-icons/ai'
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function EditProductsPopup({ item, categories }: {item: ProductProps, categories: CategoryProps[]}) {

    const [itemDetail, setItemDetail] = useState<ProductProps>({Name: item.Name, Category: item.Category, Price: item.Price, Quantity: item.Quantity, Description: item.Name, ID: item.ID, Picture_Name: item.Picture_Name, ImageURL: item.ImageURL})
    const [image, setImage] = useState<File | undefined>(undefined)
    const [updated, setUpdated] = useState<boolean>(false)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setItemDetail({ ...itemDetail, [event.target.name]: event.target.value })
    }

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    }

    const handleSubmit = () => {
        if (image !== undefined) {
            const storage = getStorage()

            // deleting old image
            const deleteRef = ref(storage, `products/${item.Picture_Name}`)
            deleteObject(deleteRef).then(() => {
                console.log("Deleted old image!")
            }).catch((error) => {
                console.error("Error deleting old image: ", error)
            })

            // add new qr code
            const imageRef = ref(storage, `products/${item.Picture_Name}`)
            const metadata = {
                contentType: 'image/jpeg',
            }

            // eslint-disable-next-line
            const uploadTask = uploadBytes(imageRef, image, metadata)
        }

        UpdateProduct(itemDetail)
        setUpdated(true)
    }

    return (
        <div>
            <div className="hover:cursor-pointer w-fit" onClick={handleOpen} >
                <MdModeEdit />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className="font-bold uppercase" id="modal-modal-title">Edit item details</h1>
                    <div className="mt-2" id="modal-modal-description">
                        <form>
                            <div className="my-4">
                                <TextField
                                    sx={{ width: "200px" }}
                                    label="Name"
                                    size="small"
                                    type="text"
                                    name="Name"
                                    value={itemDetail.Name}
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
                                    value={itemDetail.Category}
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
                                    value={itemDetail.Price}
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
                                    value={itemDetail.Quantity}
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
                                    value={itemDetail.Description}
                                    onChange={handleChange}
                                />
                            </div>
                            <h1 className="py-2">Update image only if required</h1>
                            <Button variant="contained" component="label">
                                Upload Image
                                <input hidden accept="image/*" type="file" name="image" onChange={handleFileSelect} />
                            </Button>
                            <div className="flex flex-row items-center pb-2">
                                {!image?.name && <span className="pl-4">Choose file to upload</span>}
                                {image?.name && (
                                    <>
                                        <span className="px-4"> {image?.name}</span>
                                        <AiFillDelete className="hover:cursor-pointer" onClick={() => setImage(undefined)} />
                                    </>
                                )}
                            </div>
                            <Button color="success" variant="contained" onClick={handleSubmit}>Update Product</Button>
                        </form>
                        <div className={`w-fit pt-4 ${updated ? "" : "hidden"}`}>
                            <Redirect item={item.Name} />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}