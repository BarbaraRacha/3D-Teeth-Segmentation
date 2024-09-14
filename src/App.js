import React from 'react';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import TeethViewer from './components/TeethViewer';
import SegmentationResults from './components/SegmentationResults';
import { Container } from '@mui/material';

function App() {
  return (
      <div>
        <Navbar />
        <Container>
          <h1>3D Teeth Segmentation</h1>
          <UploadForm />
          <TeethViewer />
          <SegmentationResults />
        </Container>
      </div>
  );
}

export default App;
