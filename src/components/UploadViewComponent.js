import React, { useState } from 'react';
import UploadForm from './UploadForm';
import TeethViewer from './TeethViewer';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function UploadViewComponent() {
    const [model, setModel] = useState(null);  // Pour gérer le modèle 3D
    
    // Fonction appelée lorsque le modèle est chargé
    const handleModelLoaded = (loadedModel) => {
        setModel(loadedModel);
    };

    return (
        <div>
            {/* Contenu principal */}
            <Container>
                <h1>3D Teeth Segmentation</h1>

                {/* Formulaire de téléchargement avec gestion du modèle */}
                <div style={{ marginBottom: '32px' }}>
                    <UploadForm onModelLoaded={handleModelLoaded} />
                </div>

                {/* Affichage de l'image 3D */}
                <div style={{ marginBottom: '32px' }}>
                    {model && <h2>Model loaded: {model.name}</h2>}
                    <TeethViewer model={model} />
                </div>

                <div style={{ marginBottom: '32px' }}>
                </div>

                {/* Bouton "Apply Segmentation" */}
                <div align={'center'}>
                    <Link to="/segmentation" style={{ textDecoration: 'none' }}>
                        <Button style={{ height: 50, width: 300 }}
                                variant="contained"
                                color="primary"
                        >
                            Apply Segmentation
                        </Button>
                    </Link>
                </div>


            </Container>
        </div>
    );
}

export default UploadViewComponent;
