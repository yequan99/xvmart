import { Alert, CircularProgress } from '@mui/material'

export default function Redirect({item}: {item: string}) {
    return (
        <Alert severity="success">
            <div className="flex justify-between">
                <h1>Updated {item}. Refreshing page now </h1>
                <CircularProgress />
            </div>
        </Alert>
    )
}