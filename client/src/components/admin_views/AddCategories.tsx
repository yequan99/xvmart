import { useState, ChangeEvent } from 'react'
import { CategoryProps } from '../../types/mainTypes'
import { TextField, Button, Alert, CircularProgress } from '@mui/material';
import { AddCategory } from '../../hooks/AddCategory';

export default function AddCategories() {

    const [category, setCategory] = useState<CategoryProps>({Name: "", ID: ""})
    const [submit, setSubmit] = useState<boolean>(false)
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCategory({ ...category, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        setSubmit(true)
        AddCategory(category)
    }

    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 w-full mb-4 rounded-lg flex justify-center items-center">
                <h1>
                    This page is for you to add new categories
                </h1>
            </div>
            <h1>New category name:</h1>
            <form>
                <div className="my-4">
                    <TextField
                        sx={{ width: "200px" }}
                        label="Category"
                        size="small"
                        type="text"
                        name="Name"
                        value={category.Name}
                        onChange={handleChange}
                    />
                </div>
                <Button color="success" variant="contained" onClick={handleSubmit}>Add Category</Button>
            </form>
            <div className={`w-fit pt-4 ${submit ? "" : "hidden"}`}>
                <Alert severity="success">
                    <div className="flex justify-between">
                        <h1>Added {category.Name}. Redirecting you</h1>
                        <CircularProgress />
                    </div>
                </Alert>
            </div>
        </div>
    )
}