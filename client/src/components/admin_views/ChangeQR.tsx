import { useState, ChangeEvent } from 'react'
import { Button, Alert, CircularProgress } from '@mui/material'
import { AiFillDelete } from 'react-icons/ai'
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage"

export default function ChangeQR() {

    const [image, setImage] = useState<File | undefined>(undefined)
    const [uploaded, setUploaded] = useState<boolean>(true)
    const [submit, setSubmit] = useState<boolean>(false)

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    }

    const handleSubmit = () => {
        if (image === undefined) {
            setUploaded(false)
        }
        else {
            setUploaded(true)
            setSubmit(true)

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

            const uploadTask = uploadBytes(imageRef, image, metadata)

            setTimeout(() => window.location.reload(), 3000)
        }
    }

    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 mb-2 rounded-lg flex justify-center items-center">
                <h1>
                    This page is for you to change the Paylah/Paynow QR code whenever there is a handover. Please name your file 'qrcode' if not it will not work. E.g. qrcode.png
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
            <div className="my-4">
                <Button color="success" variant="contained" onClick={handleSubmit}>Replace QR Code</Button>
                <h1 className={`text-red-500 mt-1 ${uploaded ? "hidden" : ""}`}>No image uploaded!</h1>
            </div>
            <div className={`w-fit pt-4 ${submit ? "" : "hidden"}`}>
                <Alert severity="success">
                    <div className="flex justify-between">
                        <h1>Replaced QR Code. Redirecting you</h1>
                        <CircularProgress />
                    </div>
                </Alert>
            </div>
        </div>
    )
}