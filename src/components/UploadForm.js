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
                sx={{
                    backgroundColor: 'white', // Couleur de fond fixe
                    input: {
                        color: '#000', // Couleur du texte de l'input
                    },
                    '& .MuiInputBase-root': {
                        backgroundColor: 'white', // Arrière-plan de l'input
                    },
                    width:760
                }}
            />
            <Button sx={{ height: 55, width: 200, fontSize: 17, marginLeft: 5 }} type="submit" variant="contained" color="primary">
                Upload
            </Button>

        </form>
    );
}

export default UploadForm;
