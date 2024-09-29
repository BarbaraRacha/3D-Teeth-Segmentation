import React, { useEffect, useRef } from 'react';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkHttpDataSetReader from '@kitware/vtk.js/IO/Core/HttpDataSetReader';
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor';
import vtkDataArray from '@kitware/vtk.js/Common/Core/DataArray';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const SegmentationResults = ({ segmentedImage }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        console.log("Segmented Image URL:", segmentedImage);
        if (!containerRef.current || !segmentedImage) return;

        const renderWindow = vtkRenderWindow.newInstance();
        const renderer = vtkRenderer.newInstance();
        renderWindow.addRenderer(renderer);

        const interactor = vtkRenderWindowInteractor.newInstance();
        interactor.setRenderWindow(renderWindow);
        interactor.initialize();
        interactor.start();

        const reader = vtkHttpDataSetReader.newInstance();
        reader.setUrl(segmentedImage).then(() => {
            const polyData = reader.getOutputData();
            if (!polyData) {
                console.error("polyData is undefined");
                return;
            }

            const actor = vtkActor.newInstance();
            const mapper = vtkMapper.newInstance();
            mapper.setInputData(polyData);
            actor.setMapper(mapper);

            const colors = [
                [1, 0, 0], // Rouge
                [0, 1, 0], // Vert
                [0, 0, 1], // Bleu
            ];

            const scalars = polyData.getPointData().getScalars();
            const numberOfPoints = scalars.getNumberOfTuples();
            const newColors = new Uint8Array(numberOfPoints * 3);

            for (let i = 0; i < numberOfPoints; i++) {
                const colorIndex = i % colors.length;
                newColors[i * 3] = colors[colorIndex][0] * 255;
                newColors[i * 3 + 1] = colors[colorIndex][1] * 255;
                newColors[i * 3 + 2] = colors[colorIndex][2] * 255;
            }

            const vtkColorArray = vtkDataArray.newInstance({
                name: 'Colors',
                values: newColors,
                numberOfComponents: 3,
            });

            polyData.getPointData().setScalars(vtkColorArray);
            renderer.addActor(actor);
            renderer.resetCamera();
            renderWindow.render();
        }).catch((error) => {
            console.error("Error loading segmented image:", error);
        });

        return () => {
            interactor.getRenderWindow().finalize();
        };
    }, [segmentedImage]);

    return (
        <div align={'center'}>
            <Link to="/upload" style={{ textDecoration: 'none' }}>
                <Button style={{ height: 50, width: 300 }}
                        variant="contained"
                        color="primary"
                >
                    New Image
                </Button>
            </Link>
        </div>
    );
};

export default SegmentationResults;
