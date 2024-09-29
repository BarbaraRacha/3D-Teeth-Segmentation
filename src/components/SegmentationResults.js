import React, { useEffect, useRef } from 'react';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor';
import { Container, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import RotateRightIcon from '@mui/icons-material/RotateRight';

const SegmentationResults = () => {
    const mountRef = useRef(null);
    const containerRef = useRef(null);
    const location = useLocation();
    const { file } = location.state || {}; // Récupérer le chemin du fichier passé

    useEffect(() => {
        if (!containerRef.current || !file) return;

        // Setup VTK renderer
        const renderWindow = vtkRenderWindow.newInstance();
        const renderer = vtkRenderer.newInstance();
        renderWindow.addRenderer(renderer);

        const interactor = vtkRenderWindowInteractor.newInstance();
        interactor.setRenderWindow(renderWindow);
        interactor.initialize();
        interactor.start();

        // Vous pouvez ajouter ici un exemple de vtkPolyData si vous n'avez pas de fichier .obj
        // Créer un acteur de test pour démonstration
        const actor = vtkActor.newInstance();
        const mapper = vtkMapper.newInstance();
        // Ajoutez ici une géométrie simple pour le test (par exemple un cube)
        // mapper.setInputData(geometryData);
        actor.setMapper(mapper);

        // Ajouter l'actor au renderer et afficher la scène
        renderer.addActor(actor);
        renderer.resetCamera();
        renderWindow.render();

        // Ajouter le rendu à l'élément HTML
        containerRef.current.appendChild(renderWindow.getContainer());
    }, [file]);

    return (
        <Container>
            <h2>Segmentation Results</h2>

            <div style={{ position: 'relative', width: '60vw', height: '60vh', margin: '0 auto', marginTop: '20px', border: '1px solid #ccc' }}>
                <div ref={mountRef} style={{ width: '100%', height: '100%', background: 'black' }} />

                {/* Icône de rotation */}
                <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.7)', padding: '5px', borderRadius: '5px' }}>
                    <RotateRightIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '12px' }}>Rotate the model</span>
                </div>
            </div>

            {/* Bouton pour télécharger une nouvelle image */}
            <div align={'center'} style={{marginTop: 40, marginBottom: 20}}>
                <Link to="/upload" style={{ textDecoration: 'none' }}>
                    <Button style={{ height: 50, width: 300 }}
                            variant="contained"
                            color="primary"
                    >
                        New Image
                    </Button>
                </Link>
            </div>
        </Container>
    );
};

export default SegmentationResults;
