import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'
import { CategoryProps } from '../../types/mainTypes'
import { Box, Modal, Button, Alert, CircularProgress } from '@mui/material'
import { DeleteCategory } from '../../hooks/DeleteCategory'

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

export default function DeleteCategories({ item }: {item: CategoryProps}) {

    const [submit, setSubmit] = useState<boolean>(false)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleSubmit = () => {
        setSubmit(true)
        DeleteCategory(item)
    }

    return (
        <div>
            <div className="hover:cursor-pointer" onClick={handleOpen} >
                <AiFillDelete />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className="font-bold uppercase" id="modal-modal-title">Confirm deletion?</h1>
                    <div className="mt-2" id="modal-modal-description">
                        <div className="flex flex-row justify-center gap-4">
                            <Button color="warning" variant="contained" onClick={handleClose}>No</Button>
                            <Button color="success" variant="contained" onClick={handleSubmit}>Yes</Button>
                        </div>
                        <div className={`w-fit pt-4 ${submit ? "" : "hidden"}`}>
                            <Alert severity="success">
                                <div className="flex justify-between">
                                    <h1>Submitted. Refreshing page now </h1>
                                    <CircularProgress />
                                </div>
                            </Alert>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}