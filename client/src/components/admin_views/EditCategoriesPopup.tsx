import { MdModeEdit } from 'react-icons/md'
import { useState, ChangeEvent } from 'react'
import { CategoryProps } from '../../types/mainTypes'
import { Box, Modal, TextField, Button, Alert, CircularProgress } from '@mui/material'
import { UpdateCategory } from '../../hooks/UpdateCategory'
import Redirect from './reusable/Redirect'

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

export default function EditCategoriesPopup({ item }: {item: CategoryProps}) {

    const [itemDetail, setItemDetail] = useState<CategoryProps>({Name: item.Name, ID: item.ID})
    const [updated, setUpdated] = useState<boolean>(false)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setItemDetail({ ...itemDetail, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        setUpdated(true)
        UpdateCategory(itemDetail)
    }

    return (
        <div>
            <div className="hover:cursor-pointer" onClick={handleOpen} >
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
                            <Button color="success" variant="contained" onClick={handleSubmit}>Update Product</Button>
                        </form>
                        <div className={`w-fit pt-4 ${updated ? "" : "hidden"}`}>
                            <Redirect item={itemDetail.Name} />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}