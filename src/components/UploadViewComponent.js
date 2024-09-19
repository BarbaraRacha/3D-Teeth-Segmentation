import React, { useState } from 'react';
import UploadForm from './UploadForm';
import TeethViewer from './TeethViewer';
import SegmentationResults from './SegmentationResults';
import { Container } from '@mui/material';

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

                {/* Affichage du modèle 3D */}
                <TeethViewer model={model} />

                {/* Résultats de la segmentation */}
                <SegmentationResults />
            </Container>
        </div>
    );
}

export default UploadViewComponent;
