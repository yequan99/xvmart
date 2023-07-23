import { useState, ChangeEvent } from 'react'
import { UserFormProps, OrderProps, SendOrderProps } from '../../types/mainTypes';
import { TextField, Button, MenuItem, Box, Modal, Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SendOrder from '../../api/post/SendOrder';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SubmitOrderForm({cartItems, qrcode, phoneNumber} : { cartItems: OrderProps[], qrcode: string, phoneNumber: string }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<UserFormProps>({Name: "", Block: null, Level: null, Unit: null})
    const [filled, setFilled] = useState(true)
    const [open, setOpen] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const goToPayment = () => {
        if (formData.Name === "" || formData.Block === null || formData.Level === null || formData.Unit === null || formData.Unit < 1000 || formData.Unit > 2000) {
            setFilled(false)
        }
        else {
            setOpen(true)
        }
    }

    const sendOrder = async () => {
        setDisabled(true)
        const sendOrder: SendOrderProps[] = []
        cartItems.forEach((item) => {
            if (item.Quantity > 0) {
                const order: SendOrderProps = {
                    Item: item.Name,
                    Price: item.Price,
                    Quantity: item.Quantity,
                    Description: item.Description,
                    Name: formData.Name,
                    Block: formData.Block,
                    Level: formData.Level,
                    Unit: formData.Unit,
                    Date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' })
                }
                sendOrder.push(order)
            }
        })
        SendOrder(sendOrder, navigate)
    }

    return (
        <form>
            <div className="my-4">
                <TextField
                    label="Name"
                    size="small"
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-row items-center">
                <TextField
                    select
                    sx={{ width: "100px" }}
                    label="Block"
                    size="small"
                    type="number"
                    name="Block"
                    value={formData.Block === null ? '' : formData.Block}
                    onChange={handleChange}
                >
                    <MenuItem value="69">69</MenuItem>
                    <MenuItem value="70">70</MenuItem>
                    <MenuItem value="71">71</MenuItem>
                    <MenuItem value="72">72</MenuItem>
                </TextField>
                <h1 className="mx-2">-</h1>
                <TextField
                    select
                    sx={{ width: "100px" }}
                    label="Level"
                    size="small"
                    type="number"
                    name="Level"
                    value={formData.Level === null ? '' : formData.Level}
                    onChange={handleChange}
                >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                </TextField>
                <h1 className="mx-2">-</h1>
                <TextField
                    sx={{ width: "100px" }}
                    label="Unit"
                    size="small"
                    type="number"
                    name="Unit"
                    value={formData.Unit === null ? '' : formData.Unit}
                    onChange={handleChange}
                    inputProps={{
                        min: 1000,
                        max: 2000,
                        step: 1,
                    }}
                    error={(formData.Unit !== null && (formData.Unit < 1000 || formData.Unit > 2000))}
                    helperText={(formData.Unit !== null && (formData.Unit < 1000 || formData.Unit > 2000)) ? 'Number must be between 1000 and 2000' : ''}
                />
            </div>
            <div className="my-4">
                <Button color="success" variant="contained" onClick={goToPayment}>Click to Pay</Button>
                <h1 className={`text-red-500 mt-1 ${filled ? "hidden" : ""}`}>Incomplete/Incorrect details!</h1>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="flex flex-col justify-center items-center lg:gap-y-4 w-full">
                            <h1 className="text-xl font-bold">Scan and Pay via PayNow / Paylah!</h1>
                            <div className="rounded-md h-48 flex justify-center items-center">
                                {qrcode === "" && <h1>Cannot retrieve QR Code, please contact Hall XV Council</h1>}
                                {/* eslint-disable-next-line */}
                                <img className="h-[80%]" src={qrcode} />
                             </div>
                             <div className="flex flex-col justify-center items-center pb-2">
                                <h1 className="text-sm lg:text-lg">Or pay to:</h1>
                                <h1 className="text-sm lg:text-lg">{phoneNumber}</h1>
                             </div>
                            <Button color="success" variant="contained" disabled={disabled} onClick={sendOrder}>Submit Order</Button>
                            <div className={`w-fit pt-4 ${disabled ? "" : "hidden"}`}>
                                <Alert severity="success">
                                    <div className="flex justify-between">
                                        <h1>Sent order. Refreshing page now </h1>
                                        <CircularProgress />
                                    </div>
                                </Alert>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </form>
    )
}