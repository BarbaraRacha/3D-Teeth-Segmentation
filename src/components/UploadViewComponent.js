import React, { useState } from 'react';
import UploadForm from './UploadForm';
import TeethViewer from './TeethViewer';
import SegmentationResults from './SegmentationResults';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function UploadViewComponent() {
    const [model, setModel] = useState(null);  // Pour gérer le modèle 3D
    const [uploadedImage, setUploadedImage] = useState(null); // Pour gérer l'image téléchargée

    // Fonction appelée lorsque le modèle est chargé
    const handleModelLoaded = (loadedModel) => {
        setModel(loadedModel);
    };

    // Fonction appelée lorsque l'image est téléchargée
    const handleImageUpload = (image) => {
        setUploadedImage(image);
    };

    return (
        <div>
            <Container>
                <h1>3D Teeth Segmentation</h1>

                {/* Formulaire de téléchargement avec gestion du modèle et de l'image */}
                <div style={{ marginBottom: '32px' }}>
                    <UploadForm onModelLoaded={handleModelLoaded} onImageUpload={handleImageUpload} />
                </div>

                {/* Affichage du modèle 3D */}
                <div style={{ marginBottom: '32px' }}>
                    {model && <h2>Model loaded: {model.name}</h2>}
                    <TeethViewer model={model} />
                </div>

                <div align={'center'}>
                    <Link to={{ pathname: "/segmentation", state: { uploadedImage } }} style={{ textDecoration: 'none' }}>
                        <Button style={{ height: 50, width: 300 }} variant="contained" color="primary">
                            Apply Segmentation
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default UploadViewComponent;
