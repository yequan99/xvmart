import { useState, ChangeEvent } from 'react'
import { Button, TextField, Divider } from '@mui/material'
import { AiFillDelete } from 'react-icons/ai'
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage"
import UpdateNumber from '../../api/post/UpdateNumber'
import { PhoneProps } from '../../types/mainTypes'
import Redirect from './reusable/Redirect'

export default function ChangeQR({phoneNumber}: {phoneNumber: PhoneProps}) {

    const [image, setImage] = useState<File | undefined>(undefined)
    const [phone, setPhone] = useState<PhoneProps>({PhoneNumber: "", ID: phoneNumber.ID})
    const [uploaded, setUploaded] = useState<boolean>(true)
    const [submit, setSubmit] = useState<boolean>(false)

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone({ ...phone, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        if (image === undefined || phone.PhoneNumber.length !== 8) {
            setUploaded(false)
        }
        else {
            setUploaded(true)
            setSubmit(true)

            UpdateNumber(phone)

            const storage = getStorage()

            // deleting old qrcode
            const deleteRef = ref(storage, 'qrcode/qrcode')
            deleteObject(deleteRef).then(() => {
                console.log("Deleted old image!")
            }).catch((error) => {
                console.error("Error deleting old image: ", error)
            })

            // add new qr code
            const imageRef = ref(storage, 'qrcode/qrcode')
            const metadata = {
                contentType: 'image/jpeg',
            }

            // eslint-disable-next-line
            const uploadTask = uploadBytes(imageRef, image, metadata)

            setTimeout(() => window.location.reload(), 3000)
        }
    }

    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 mb-2 rounded-lg flex justify-center items-center">
                <h1>
                    This page is for you to change the Paylah/Paynow QR code and phone number whenever there is a handover. Please name your file 'qrcode' if not it will not work. E.g. qrcode.png
                </h1>
            </div>
            <h1 className="py-4">Upload the new qrcode</h1>
            <Button variant="contained" component="label">
                Upload Image
                <input hidden accept="image/*" type="file" name="image" onChange={handleFileSelect} />
            </Button>
            <div className="flex flex-row items-center">
                {!image?.name && <span className="pl-4">Choose file to upload</span>}
                {image?.name && (
                    <>
                        <span className="px-4"> {image?.name}</span>
                        <AiFillDelete className="hover:cursor-pointer" onClick={() => setImage(undefined)} />
                    </>
                )}
            </div>
            <Divider />
            <h1 className="py-4">Upload new Paynow/Paylah number</h1>
            <div className="my-4">
                <TextField
                    sx={{ width: "200px" }}
                    label="Phone number"
                    size="small"
                    type="text"
                    name="PhoneNumber"
                    value={phone.PhoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="my-4">
                <Button color="success" variant="contained" onClick={handleSubmit}>Confirm update</Button>
                <h1 className={`text-red-500 mt-1 ${uploaded ? "hidden" : ""}`}>No image uploaded/ Invalid phone number!</h1>
            </div>
            <div className={`w-fit pt-4 ${submit ? "" : "hidden"}`}>
                <Redirect item={phone.PhoneNumber} />
            </div>
        </div>
    )
}