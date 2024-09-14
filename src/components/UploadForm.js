import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function UploadForm() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (file) {
            console.log('Fichier téléchargé :', file);
            // Logique pour envoyer le fichier au backend ou le traiter directement
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type="file"
                onChange={handleFileChange}
                inputProps={{ accept: '.obj,.json' }}
            />
            <Button type="submit" variant="contained" color="primary">
                Upload
            </Button>
        </form>
    );
}

export default UploadForm;
