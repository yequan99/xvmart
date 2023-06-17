import { useState, ChangeEvent, FormEvent } from 'react'
import { UserForm } from '../types/mainTypes';
import { TextField, Button, MenuItem } from '@mui/material';

export default function SubmitOrderForm() {

    const [formData, setFormData] = useState<UserForm>({Name: "", Block: null, Level: null, Unit: null})

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(formData)
    }  

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                        value={formData.Block}
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
                        value={formData.Level}
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
                        value={formData.Unit}
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
                    <Button type="submit" color="success" variant="contained">Click to Pay</Button>
                </div>
            </form>
            <div>
                <h1>useState</h1>
                <h1>{formData.Name}</h1>
                <h1>{formData.Block}</h1>
                <h1>{formData.Level}</h1>
                <h1>{formData.Unit}</h1>
            </div>
        </>

    )
}