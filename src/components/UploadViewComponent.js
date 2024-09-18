import React, { useState, useEffect } from 'react';
import UploadForm from './UploadForm';
import TeethViewer from './TeethViewer';
import SegmentationResults from './SegmentationResults';
import { Container } from '@mui/material';

function UploadViewComponent() {
    const [model, setModel] = useState(null);  // Pour gérer le modèle 3D
    const [themeMode, setThemeMode] = useState('light');  // Pour le thème

    // Gestion du thème avec localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setThemeMode(savedTheme);
        document.body.className = savedTheme;
    }, []);

    const changeThemeMode = (mode) => {
        setThemeMode(mode);
        localStorage.setItem('theme', mode);
        document.body.className = mode;
    };

    // Style de l'application basé sur le thème
    const appStyles = {
        backgroundColor: themeMode === 'dark' ? '#333' : '#fff',
        color: themeMode === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
    };

    // Fonction appelée lorsque le modèle est chargé
    const handleModelLoaded = (loadedModel) => {
        setModel(loadedModel);
    };

    return (
        <div>
            {/* Contenu principal */}
            <Container sx={{ marginTop: 10 }}>
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
