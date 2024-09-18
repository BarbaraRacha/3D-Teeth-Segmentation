import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import TeethViewer from './components/TeethViewer';
import SegmentationResults from './components/SegmentationResults';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Contact from './components/Contact';

function App() {
    const [themeMode, setThemeMode] = useState('light');

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

    // Define style based on themeMode
    const appStyles = {
        backgroundColor: themeMode === 'dark' ? '#333' : '#fff',
        color: themeMode === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
    };

    return (
        <Router> {/* Add Router component here */}
            <div style={appStyles}>
                <Navbar themeMode={themeMode} changeThemeMode={changeThemeMode} />
                <Routes>
                    {/* Other routes */}
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Container sx={{marginTop: 10}}>
                    <h1>3D Teeth Segmentation</h1>
                    <UploadForm /*themeMode={themeMode} *//>
                    <br></br>
                    <TeethViewer /*themeMode={themeMode}*/ />
                    <SegmentationResults />
                </Container>
            </div>
        </Router>
    );
}

export default App;
